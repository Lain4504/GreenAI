

from flask import Flask, render_template, Response, request
import json
import argparse
import os
import sys
from pathlib import Path
import base64

from ultralytics import YOLO
from ultralytics.utils.checks import cv2, print_args
from flask_cors import CORS

# Initialize paths
FILE = Path(__file__).resolve()
ROOT = FILE.parents[0]
if str(ROOT) not in sys.path:
    sys.path.append(str(ROOT))
ROOT = Path(os.path.relpath(ROOT, Path.cwd()))

# Initialize Flask API
app = Flask(__name__)
CORS(app)

def predict(opt):
  
    results = model(**vars(opt), stream=True)

    for result in results:
        if opt.save_txt:
            result_json = json.loads(result.tojson())
            yield json.dumps({'results': result_json})
        else:
            # Convert image to base64
            _, img_encoded = cv2.imencode('.jpg', result.plot())
            img_base64 = base64.b64encode(img_encoded).decode('utf-8')
            yield img_base64

@app.route('/')
def index():
    """
    Video streaming home page.
    """

    return render_template('index.html')

@app.route('/predict', methods=['GET', 'POST'])
def video_feed():
    if request.method == 'POST':
        uploaded_file = request.files.get('myfile')
        save_txt = request.form.get('save_txt', 'F')  # Default to 'F' if save_txt is not provided

        if uploaded_file:
            source = Path(__file__).parent / 'raw_data' / uploaded_file.filename
            uploaded_file.save(source)
            opt.source = source
        else:
            opt.source = request.form.get('source')
            
        opt.save_txt = True if save_txt == 'T' else False

    elif request.method == 'GET':
        opt.source = request.args.get('source')
        opt.save_txt = request.args.get('save_txt', 'F') == 'T'

    return Response(predict(opt), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    # Input arguments
    parser = argparse.ArgumentParser()
    parser.add_argument('--model','--weights', type=str, default=str(ROOT / 'best.pt'), help='model path or triton URL')
    parser.add_argument('--source', type=str, default=str(ROOT / 'data/images'), help='source directory for images or videos')
    parser.add_argument('--port', default=5000, type=int, help='port deployment')
    opt, unknown = parser.parse_known_args()

    # print used arguments
    print_args(vars(opt))

    # Get port to deploy
    port = opt.port
    delattr(opt, 'port')

    # Load model (Ensemble is not supported)
    model = YOLO(opt.model)

    # Run app
    app.run(host='0.0.0.0', port=port, debug=False) # Don't use debug=True, model will be loaded twice (https://stackoverflow.com/questions/26958952/python-program-seems-to-be-running-twice)

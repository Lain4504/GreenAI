import React, { useState } from 'react';
import axios from 'axios';
import "./launchapp.css";

function LaunchAppSection() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [uploadDisabled, setUploadDisabled] = useState(false);
  const [progress, setProgress] = useState(0);

  const dragNdrop = (event) => {
    let file = event.target.files[0];
    if (!file) return;
    setFile(file);
    setFileName(file.name);
    setFileUrl(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    setUploadDisabled(true);
    const formData = new FormData();
    formData.append('myfile', file);

    try {
      const response = await axios.post('http://localhost:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => {
          setProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total));
        }
      });

      const imgBase64 = response.data;
      setFileUrl(`data:image/jpeg;base64,${imgBase64}`);
    } catch (error) {
      console.error(error);
    } finally {
      setUploadDisabled(false);
    }
  };

  const drag = () => {
    document.getElementById('myfile').parentNode.className = 'draging dragBox';
  };

  const drop = () => {
    document.getElementById('myfile').parentNode.className = 'dragBox';
  };

  return (
    <div className="mainContent"> 
      <header>
      </header>
      <main>
        <form onSubmit={(e) => { e.preventDefault(); handleUpload(); }}>
          <div>
            <div>
              <div>
                <p>Instructions:</p>
                <p>1. Drag your file or use the button "Select file"</p>
                <p>2. Press "Upload file"</p>
              </div>

            </div>
            <span class="dragBox" onDragOver={drag} onDrop={drop}>
              Drag and drop file here
              <input type="file" onChange={dragNdrop} name="myfile" id="myfile" />
            </span>
            <div>
              <strong>OR</strong>
              <label htmlFor="myfile">Select file</label>
            </div>
          </div>

          {uploadDisabled && (
            <div>
              <div>
                <div role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          )}

          <div>
            {fileUrl && <img src={fileUrl} alt="Preview" />}
            {fileName && <p>File selected: <b>{fileName}</b></p>}
          </div>

          <input type="submit" value="Upload file" disabled={uploadDisabled} style={{ display: fileName ? 'block' : 'none' }} />
        </form>
      </main>
      <footer>
        <div>
          <div>
            <p>
              If you want to know more about me, please visit my website: <a href="https://henrynavarro.org">henrynavarro.org</a>
            </p>
            <p>If you think this code has been helpful for you, you can invite me a coffee: <a href="https://www.buymeacoffee.com/hdnh2006">https://www.buymeacoffee.com/hdnh2006</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LaunchAppSection;

import React, { useState } from 'react';
import axios from 'axios';
import { InboxOutlined, DownloadOutlined } from '@ant-design/icons';
import { Upload, message, Progress, Image, Button } from 'antd'; // Thêm Button từ antd
import './launchappsection.css'
const { Dragger } = Upload;

function LaunchAppSection() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [uploadDisabled, setUploadDisabled] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleUpload = async (file) => {
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
      message.success(`${file.name} tệp đã được tải lên thành công.`);
    } catch (error) {
      console.error(error);
      message.error(`Tải lên tệp ${file.name} thất bại.`);
    } finally {
      setUploadDisabled(false);
    }
  };

  const uploadProps = {
    name: 'file',
    multiple: false,
    beforeUpload: (file) => {
      setFile(file);
      setFileName(file.name);
      return false; // Ngăn chặn việc tải lên tự động
    },
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
    },
    onDrop(e) {
      console.log('Tệp đã được thả', e.dataTransfer.files);
    },
  };

  return (
    <div className="mainContent">
      <header>
        <h1>App</h1>
      </header>
      <main>
        <div>
          <p>Hướng dẫn:</p>
          <p>1. Kéo tệp của bạn hoặc sử dụng nút "Chọn tệp"</p>
          <p>2. Nhấn "Tải lên tệp"</p>
        </div>
        <Dragger {...uploadProps} className="dragBox">
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Nhấp hoặc kéo tệp vào khu vực này để tải lên</p>
          <p className="ant-upload-hint">
            Hỗ trợ tải lên đơn hoặc nhiều tệp. Nghiêm cấm tải lên dữ liệu của công ty hoặc các tệp bị cấm khác.
          </p>
        </Dragger>
        <div className='container-app'> 
        <div>
          {fileName && <p>Tệp đã chọn: <b>{fileName}</b></p>}
        </div>

        {/* Thay thế nút "Tải lên tệp" bằng nút Ant Design theo mẫu */}
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          size="large" // hoặc medium, small tùy theo size bạn muốn
          onClick={() => handleUpload(file)}
          disabled={uploadDisabled || !file}
          style={{ display: fileName ? 'block' : 'none' }}
        >
          Tải lên tệp
        </Button>
        </div>
        {uploadDisabled && (
          <div className="progressContainer">
            <Progress percent={progress} status="active" />
          </div>
        )}

        <div className="imageContainer">
          {fileUrl && <Image src={fileUrl} alt="Xem trước" width={200} />}
        </div>


      </main>
      <footer>
        <div>Footer</div>
      </footer>
    </div>
  );
}

export default LaunchAppSection;

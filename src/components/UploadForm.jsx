import React, { useState } from 'react';
import axios from 'axios';

export default function UploadForm() {
  const [fileName, setFileName] = useState('');
  const [previewData, setPreviewData] = useState([]);
  const [message, setMessage] = useState('');

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setFileName(file.name);
    setMessage('Uploading...');
    setPreviewData([]);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:8000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setPreviewData(res.data.preview);
      setMessage(`✅ Uploaded: ${res.data.filename}`);
    } catch (error) {
      console.error(error);
      setMessage('❌ Upload failed. Try another file.');
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>📁 Upload Credit Report</h2>

      {/* 👇 Place the input field here */}
      <input type="file" accept=".csv,.json" onChange={handleFileChange} />

      <p>{message}</p>

      {previewData.length > 0 && (
        <div style={{ marginTop: '1rem' }}>
          <h4>Preview (first 5 records)</h4>
          <table border="1" cellPadding="8">
            <thead>
              <tr>
                {Object.keys(previewData[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {previewData.map((row, i) => (
                <tr key={i}>
                  {Object.values(row).map((val, j) => (
                    <td key={j}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

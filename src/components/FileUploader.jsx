import React, { useState } from "react";
import "./FileUploader.css";

const FileUploader = ({ setFiles }) => {
  const [dragActive, setDragActive] = useState(false);
  const [fileCount, setFileCount] = useState(0);

  const handleFileChange = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    if (uploadedFiles.length > 0) {
      setFiles(uploadedFiles);
      setFileCount(uploadedFiles.length);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    if (droppedFiles.length > 0) {
      setFiles(droppedFiles);
      setFileCount(droppedFiles.length);
    }
  };

  return (
    <div>
      <div className="file-uploader">
        <p>2. Suba los CVs usando los componentes de subida de archivos.</p>

        <div
          className={`dropzone ${dragActive ? "active" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="upload-icon">📁</div>
          <p>
            <strong>Arrastre sus archivos aquí o haga clic para subirlos.</strong>
          </p>
        </div>
        <br />
        <input
          type="file"
          multiple
          accept=".pdf,.docx,.doc,.txt"
          onChange={handleFileChange}
        />
        {fileCount > 0 && (
          <p className="file-count">Ha añadido {fileCount} archivo(s).</p>
        )}
      </div>
    </div>
  );
};

export default FileUploader;

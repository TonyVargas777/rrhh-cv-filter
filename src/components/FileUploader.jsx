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
      <p>
        <strong>1.</strong> Suba los CVs usando los componentes de subida de
        archivos.
      </p>
      <div className="file-uploader">
        <div>
          <div
            className={`dropzone ${dragActive ? "active" : ""}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="upload-icon">📁</div>
            <h3>
              <strong>Arrastre sus archivos aquí.</strong>
            </h3>
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
    </div>
  );
};

export default FileUploader;

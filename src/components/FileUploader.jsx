import React, { useState } from "react";
import "./FileUploader.css"; // Asegúrate de incluir un archivo CSS para estilos

const FileUploader = ({ setFiles }) => {
  const [dragActive, setDragActive] = useState(false);
  const [fileCount, setFileCount] = useState(0); // Nuevo estado para el número de archivos

  const handleFileChange = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles(uploadedFiles);
    setFileCount(uploadedFiles.length); // Actualizar el número de archivos
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
    setFiles(droppedFiles);
    setFileCount(droppedFiles.length); // Actualizar el número de archivos
  };

  return (
    <div className="file-uploader">
      <p>2. Suba los CVs usando el componente de subida de archivos.</p>

      {/* Drag-and-drop container */}
      <div
        className={`dropzone ${dragActive ? "active" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="upload-icon">📁</div>
        <p>
          <strong>Drop your files here</strong>
        </p>
        <input
          type="file"
          accept=".pdf,.doc,.docx,.txt"
          multiple
          onChange={handleFileChange}
          className="file-input"
        />
      </div>

      {/* Mostrar el número de archivos cargados */}
      {fileCount > 0 && (
        <p className="file-count">Ha añadido {fileCount} archivo(s).</p>
      )}
    </div>
  );
};

export default FileUploader;

import React from "react";

const FileUploader = ({ setFiles }) => {
  const handleFileChange = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles(uploadedFiles);
  };

  return (
    <div>
      <p>
        2. Sube los archivos CVs usando el componente de subida de archivos.
      </p>
      <input
        type="file"
        multiple
        accept=".*"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUploader;

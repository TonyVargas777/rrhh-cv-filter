import React from "react";

const FileUploader = ({ setFiles }) => {
  const handleFileChange = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles(uploadedFiles);
  };

  return (
    <div>
      <h3>Subir CVs</h3>
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

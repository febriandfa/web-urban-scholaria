import React, { useState } from "react";

const DragDropUploadGeneral = ({ onDrop, uploadedFiles, height }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    onDrop(files);
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    onDrop(files);
  };

  return (
    <div
      className={`w-full ${height ? height : "h-[33rem]"} bg-neutral-200 rounded-2xl flex items-center justify-center ${isDragging ? "border-dashed border-2 border-brand-500" : ""}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      {/* Use uploadedFiles from props */}
      {uploadedFiles.length > 0 ? (
        <div className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.5996 25.6001C25.5996 18.5308 31.3304 12.8 38.3996 12.8H67.7486C71.1434 12.8 74.3991 14.1486 76.7996 16.5491L98.6506 38.4C101.051 40.8005 102.4 44.0562 102.4 47.451V102.4C102.4 109.469 96.6689 115.2 89.5996 115.2H38.3996C31.3304 115.2 25.5996 109.469 25.5996 102.4V25.6001Z"
              fill="#64748B"
            />
          </svg>
          {uploadedFiles.map((file, index) => (
            <p className="text-xs text-neutral-500" key={index}>
              {file.name}
            </p>
          ))}
        </div>
      ) : isDragging ? (
        <div className="flex flex-col justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" fill="none">
            <path
              d="M35.2008 83.2C22.8296 83.2 12.8008 73.1712 12.8008 60.8C12.8008 49.2264 21.5781 39.7029 32.8393 38.523C32.2921 36.4404 32.0008 34.2542 32.0008 32C32.0008 17.8615 43.4623 6.39999 57.6008 6.39999C69.6254 6.39999 79.7136 14.6904 82.4615 25.8672C83.7494 25.691 85.0645 25.6 86.4008 25.6C102.307 25.6 115.201 38.4942 115.201 54.4C115.201 70.3058 102.307 83.2 86.4008 83.2H70.4008V60.251L78.6753 68.5255C81.1747 71.0248 85.2269 71.0248 87.7263 68.5255C90.2256 66.0261 90.2256 61.9739 87.7263 59.4745L68.5263 40.2745C66.0269 37.7751 61.9747 37.7751 59.4753 40.2745L40.2753 59.4745C37.7759 61.9739 37.7759 66.0261 40.2753 68.5255C42.7747 71.0248 46.8269 71.0248 49.3263 68.5255L57.6008 60.251L57.6008 83.2H35.2008Z"
              fill="#64748B"
            />
            <path d="M57.6008 83.2H70.4008L70.4008 115.2C70.4008 118.735 67.5354 121.6 64.0008 121.6C60.4662 121.6 57.6008 118.735 57.6008 115.2L57.6008 83.2Z" fill="#64748B" />
          </svg>
          <p className="text-xs text-neutral-500">Lepaskan untuk upload!</p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" fill="none">
            <path
              d="M35.2008 83.2C22.8296 83.2 12.8008 73.1712 12.8008 60.8C12.8008 49.2264 21.5781 39.7029 32.8393 38.523C32.2921 36.4404 32.0008 34.2542 32.0008 32C32.0008 17.8615 43.4623 6.39999 57.6008 6.39999C69.6254 6.39999 79.7136 14.6904 82.4615 25.8672C83.7494 25.691 85.0645 25.6 86.4008 25.6C102.307 25.6 115.201 38.4942 115.201 54.4C115.201 70.3058 102.307 83.2 86.4008 83.2H70.4008V60.251L78.6753 68.5255C81.1747 71.0248 85.2269 71.0248 87.7263 68.5255C90.2256 66.0261 90.2256 61.9739 87.7263 59.4745L68.5263 40.2745C66.0269 37.7751 61.9747 37.7751 59.4753 40.2745L40.2753 59.4745C37.7759 61.9739 37.7759 66.0261 40.2753 68.5255C42.7747 71.0248 46.8269 71.0248 49.3263 68.5255L57.6008 60.251L57.6008 83.2H35.2008Z"
              fill="#64748B"
            />
            <path d="M57.6008 83.2H70.4008L70.4008 115.2C70.4008 118.735 67.5354 121.6 64.0008 121.6C60.4662 121.6 57.6008 118.735 57.6008 115.2L57.6008 83.2Z" fill="#64748B" />
          </svg>
          <label className="flex items-center cursor-pointer rounded-lg w-fit h-9 px-4 py-2 bg-brand-500 mx-auto" htmlFor="foto">
            <span className="flex items-center text-base font-semibold text-white">Pilih File</span>
            <input className="hidden" id="foto" type="file" onChange={handleFileSelect} />
          </label>
          <p className="text-xs text-neutral-500">Tarik file untuk upload!</p>
        </div>
      )}
    </div>
  );
};

export default DragDropUploadGeneral;

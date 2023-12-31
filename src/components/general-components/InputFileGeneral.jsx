import React, { useState, useEffect } from "react";

const InputFileGeneral = ({ name, label, tipeFile, ukuranFile, file, required, selectedFile, onFileInputChange }) => {
  const [selectedFileName, setSelectedFileName] = useState("Belum Ada File Yang Dipilih");
  const [fileSizeError, setFileSizeError] = useState(false);

  useEffect(() => {
    if (selectedFile) {
      setSelectedFileName(selectedFile.name || "Belum Ada File Yang Dipilih");
    }
  }, [selectedFile]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const maxSizeInBytes = ukuranFile * 1024 * 1024;

    if (selectedFile && selectedFile.size > maxSizeInBytes) {
      setFileSizeError(true);
      setSelectedFileName("Belum Ada File Yang Dipilih");
      e.target.value = null;
      return;
    }

    const fileName = selectedFile?.name || "Belum Ada File Yang Dipilih";
    setSelectedFileName(fileName);
    setFileSizeError(false);
    onFileInputChange(selectedFile);
  };

  return (
    <div className="mb-6">
      <label className="block font-semibold text-sm text-brand-500 capitalize" htmlFor={name}>
        {label}
        {required && <span className={`text-danger-500`}>*</span>}
      </label>
      <label className="text-xs font-normal text-neutral-500 mb-1" htmlFor={name}>
        Format: {tipeFile} (Max {ukuranFile} MB)
      </label>
      <label className="flex items-center cursor-pointer rounded-lg w-full h-9 px-3 border border-neutral-400 bg-white" htmlFor={name}>
        <span className="flex items-center border-r-2 border-neutral-400 pr-16 w-fit h-full text-gray-400 text-sm">Pilih File</span>
        <span className="inline-block text-neutral-400 text-sm text-center mx-auto">{selectedFileName}</span>
        <input className="hidden" id={name} type="file" accept={file} onChange={handleFileChange} required={required} />
      </label>
      {fileSizeError && <p className="py-1 text-center text-sm font-semibold text-danger-500">Ukuran File Melebihi {ukuranFile} MB</p>}
    </div>
  );
};

export default InputFileGeneral;

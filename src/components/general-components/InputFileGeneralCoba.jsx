import React, { useState, useEffect } from "react";

const InputFileGeneralCoba = ({ name, label, tipeFile, ukuranFile, required, selectedFile, onFileInputChange, update, disabled }) => {
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
    // console.log(selectedFile);

    if (selectedFile && selectedFile.size > maxSizeInBytes) {
      setFileSizeError(true);
      setSelectedFileName("Belum Ada File Yang Dipilih");
      e.target.value = null;
      return;
    }

    const fileName = selectedFile?.name || "Belum Ada File Yang Dipilih";
    setSelectedFileName(fileName);
    setFileSizeError(false);
    onFileInputChange({ name, value: selectedFile });
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
      <label className={`flex items-center rounded-lg w-full h-9 px-3 border border-neutral-400 bg-white ${disabled ? "cursor-default" : "cursor-pointer"}`} htmlFor={name}>
        <span className="flex items-center border-r-2 border-neutral-400 pr-4 w-fit h-full text-sm">Pilih File</span>
        <span className="inline-block text-sm text-center mx-auto">{selectedFileName}</span>
        {/* <input className="hidden" id={name} type="file" accept={tipeFile} onChange={handleFileChange} required={required} /> */}
        <input className="hidden" id={name} type="file" accept={tipeFile} onChange={handleFileChange} required={required} disabled={disabled} />
      </label>
      {update && <p className="text-xs font-normal text-neutral-500">File Lama : {update}</p>}
      {fileSizeError && <p className="py-1 text-center text-sm font-semibold text-danger-500">Ukuran File Melebihi {ukuranFile} MB</p>}
    </div>
  );
};

export default InputFileGeneralCoba;

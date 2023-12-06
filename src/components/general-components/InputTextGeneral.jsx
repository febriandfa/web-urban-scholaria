import React from "react";

const InputTextGeneral = ({ name, label, placeholder, value, onChange, required, disabled, type, maxLength, note }) => {
  return (
    <div className="mb-6">
      <label className="block font-semibold text-sm text-brand-500 capitalize" htmlFor={name}>
        {label}
        {required && <span className={`text-danger-500`}>*</span>}
      </label>
      {maxLength ? (
        <label className="text-xs font-normal text-neutral-500 mb-1" htmlFor={name}>
          Batas Karakter: {maxLength}
        </label>
      ) : (
        <label className="mb-1"></label>
      )}
      <input
        className={`w-full px-3 h-9 rounded-lg text-sm border border-neutral-400 ${disabled && "bg-neutral-300 text-neutral-500"}`}
        id={name}
        type={type ? type : "text"}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        required={required}
        disabled={disabled}
        onChange={(e) => onChange({ name, value: e.target.value })}
        // onChange={onChange}
        // onChange={(e) => onChange(e.target.value)}
      />
      {note && <p className="text-xs font-normal text-neutral-500 mb-1">Format penulisan tanpa kode negara, wajib menggunakan Nomor Handphone Aktif/WhatsApp</p>}
      {/* {maxLength ? <p className="text-xs text-neutral-500">Batas Karakter: {maxLength}</p> : <p> </p>} */}
    </div>
  );
};

export default InputTextGeneral;

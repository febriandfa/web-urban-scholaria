import React from "react";

const InputTextAreaGeneral = ({ name, label, placeholder, value, required, disabled, onChange }) => {
  return (
    <div className="mb-6">
      <label className="block mb-1 font-semibold text-sm text-brand-500 capitalize" htmlFor={name}>
        {label}
        {required && <span className={`text-danger-500`}>*</span>}
      </label>
      <textarea
        className={`w-full px-3 py-1.5 h-full rounded-lg text-sm border border-neutral-400 ${disabled && "bg-neutral-300 text-neutral-500"}`}
        id={name}
        rows="10"
        type="text"
        placeholder={placeholder}
        value={value}
        required={required}
        disabled={disabled}
        onChange={(e) => onChange({ name, value: e.target.value })}
      ></textarea>
    </div>
  );
};

export default InputTextAreaGeneral;

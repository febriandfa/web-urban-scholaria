import React from "react";

const InputDateGeneral = ({ name, label, placeholder, value, onChange, required, disabled }) => {
  return (
    <div className="mb-6">
      <label className="block mb-1 font-semibold text-sm text-brand-500 capitalize" htmlFor={name}>
        {label}
        {required && <span className={`text-danger-500`}>*</span>}
      </label>
      <input
        className={`w-full px-3 h-9 rounded-lg text-sm border border-neutral-400 ${disabled && "bg-neutral-300 text-neutral-500"}`}
        id={name}
        type="date"
        placeholder={placeholder}
        value={value}
        required={required}
        disabled={disabled}
        onChange={(e) => onChange({ name, value: e.target.value })}
      />
    </div>
  );
};

export default InputDateGeneral;

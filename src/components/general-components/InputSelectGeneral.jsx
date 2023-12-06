import React from "react";

const InputSelectGeneral = ({ name, label, placeholder, value, required, disabled, option, onChange }) => {
  return (
    <div className="mb-6">
      <label className="block mb-1 font-semibold text-sm text-brand-500 capitalize" htmlFor={name}>
        {label}
        {required && <span className={`text-danger-500`}>*</span>}
      </label>
      <div className="relative">
        <select
          className={`w-full px-3 h-9 rounded-lg text-sm border border-neutral-400 ${disabled ? "bg-neutral-300 text-neutral-500" : "bg-white"}`}
          id={name}
          type="text"
          placeholder={placeholder}
          value={value}
          required={required}
          disabled={disabled}
          onChange={(e) => onChange({ name, value: e.target.value })}
        >
          {option.map((optionItem, index) => (
            <option key={index} value={optionItem.value}>
              {optionItem.text}
            </option>
          ))}
        </select>
        <svg className="absolute w-5 h-5 top-2 right-2.5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default InputSelectGeneral;

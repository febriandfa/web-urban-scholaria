import React from "react";

const LabelGeneral = ({ title, value }) => {
  return (
    <div className="mb-6">
      <label className="block mb-1 font-semibold text-sm text-brand-500 capitalize">{title}</label>
      <p className="w-full flex items-center h-9 text-sm text-neutral-500 capitalize">{value}</p>
    </div>
  );
};

export default LabelGeneral;

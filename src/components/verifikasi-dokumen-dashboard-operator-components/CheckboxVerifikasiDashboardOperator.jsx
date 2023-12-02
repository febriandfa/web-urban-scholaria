import React from "react";

const CheckboxVerifikasiDashboardOperator = ({ onChange, checked }) => {
  return (
    <div className="flex items-center gap-2">
      <input className="w-5 h-5" type="checkbox" name="sesuai" id="sesuai" onChange={onChange} checked={checked} />
      <p className="font-semibold text-brand-500">Sesuai</p>
    </div>
  );
};

export default CheckboxVerifikasiDashboardOperator;

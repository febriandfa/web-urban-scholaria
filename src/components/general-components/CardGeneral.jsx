import React from "react";

const CardGeneral = ({ children, color, customClass }) => {
  return (
    <div className={`p-6 rounded-xl border border-neutral-300 ${color} ${customClass}`}>
      <div>{children}</div>
    </div>
  );
};

export default CardGeneral;

import React from "react";

const TableGeneral = ({ children }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-base border-2 border-brand-100">{children}</table>
    </div>
  );
};

export default TableGeneral;

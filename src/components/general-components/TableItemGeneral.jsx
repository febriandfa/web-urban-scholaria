import React from "react";

const TableItemGeneral = ({ tableItem, index, capitalize, wrap, customColor }) => {
  return (
    <>
      <td key={index} className={`py-4 px-6 text-sm ${capitalize ? "capitalize" : ""} ${wrap ? "" : "whitespace-nowrap"} ${customColor}`}>
        {tableItem}
      </td>
    </>
  );
};

export default TableItemGeneral;

import React from "react";

const TableItemGeneral = ({ tableItem, index, wrap, customColor }) => {
  return (
    <>
      <td key={index} className={`py-4 px-6 ${wrap ? "" : "whitespace-nowrap"} ${customColor}`}>
        {tableItem}
      </td>
    </>
  );
};

export default TableItemGeneral;

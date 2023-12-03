import React from "react";

const TableHeadGeneral = ({ headTitles }) => {
  return (
    <thead className="text-center font-semibold text-brand-500 border-2 border-brand-100 bg-brand-100">
      <tr>
        {headTitles.map((title, index) => (
          <th key={index} scope="col" className="py-4 px-6 text-sm whitespace-nowrap">
            {title}
          </th>
        ))}
        <th scope="col" className="py-4 px-6 text-sm whitespace-nowrap text-center">
          Aksi
        </th>
      </tr>
    </thead>
  );
};

export default TableHeadGeneral;

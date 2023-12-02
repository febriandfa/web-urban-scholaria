import React from "react";

const FilterButtonItemDataPerizinan = ({ filterType, selectedFilters, onClick }) => {
  const isSelected = selectedFilters.includes(filterType);

  return (
    <button className={`border-2 rounded-lg text-xs px-3 py-2 ${isSelected ? "border-brand-500" : "border-neutral-300"}`} onClick={() => onClick(filterType)}>
      {filterType}
    </button>
  );
};

export default FilterButtonItemDataPerizinan;

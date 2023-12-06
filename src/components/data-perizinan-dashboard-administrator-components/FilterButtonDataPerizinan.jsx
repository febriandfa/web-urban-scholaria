import React, { useState } from "react";
import FilterButtonItemDataPerizinan from "./FilterButtonItemDataPerizinan";

const FilterButtonDataPerizinan = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleFilterClick = (filter) => {
    const updatedFilters = selectedFilters.includes(filter) ? selectedFilters.filter((selected) => selected !== filter) : [...selectedFilters, filter];

    setSelectedFilters(updatedFilters);
  };

  const handleClearFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <>
      <button className="flex items-center gap-2 font-semibold text-white bg-brand-500 px-4 py-2 rounded-lg" type="button" onClick={handleDropdown}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M2.5 3.5C2.5 2.94771 2.94772 2.5 3.5 2.5H16.5C17.0523 2.5 17.5 2.94772 17.5 3.5V5.41912C17.5 5.68434 17.3946 5.93869 17.2071 6.12623L11.9596 11.3738C11.772 11.5613 11.6667 11.8157 11.6667 12.0809V14.1667L8.33333 17.5V12.0809C8.33333 11.8157 8.22798 11.5613 8.04044 11.3738L2.79289 6.12623C2.60536 5.93869 2.5 5.68434 2.5 5.41912V3.5Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Filter
      </button>

      {isDropdownOpen ? (
        <div className="absolute top-44 z-10 p-4 bg-white border rounded-lg shadow">
          <h4 className="font-semibold text-sm mb-3">Kategori Perizinan</h4>
          <div className="flex gap-4">
            <FilterButtonItemDataPerizinan filterType="Pembangunan" selectedFilters={selectedFilters} onClick={handleFilterClick} />
            <FilterButtonItemDataPerizinan filterType="Operasional" selectedFilters={selectedFilters} onClick={handleFilterClick} />
            <FilterButtonItemDataPerizinan filterType="Perubahan Operasional" selectedFilters={selectedFilters} onClick={handleFilterClick} />
          </div>
          <h4 className="font-semibold text-sm my-3">Tingkat Sekolah</h4>
          <div className="flex gap-4">
            <FilterButtonItemDataPerizinan filterType="TK" selectedFilters={selectedFilters} onClick={handleFilterClick} />
            <FilterButtonItemDataPerizinan filterType="SD" selectedFilters={selectedFilters} onClick={handleFilterClick} />
            <FilterButtonItemDataPerizinan filterType="SMP" selectedFilters={selectedFilters} onClick={handleFilterClick} />
            <FilterButtonItemDataPerizinan filterType="SMA" selectedFilters={selectedFilters} onClick={handleFilterClick} />
          </div>
          <h4 className="font-semibold text-sm my-3">Tingkat Sekolah</h4>
          <div className="flex gap-4">
            <FilterButtonItemDataPerizinan filterType="Terbaru" selectedFilters={selectedFilters} onClick={handleFilterClick} />
            <FilterButtonItemDataPerizinan filterType="Terlama" selectedFilters={selectedFilters} onClick={handleFilterClick} />
          </div>
          <div className="mt-4 flex gap-4 justify-end">
            <button className="font-semibold text-neutral-500 bg-neutral-100 px-4 py-2 rounded-lg" onClick={handleClearFilters}>
              Bersihkan
            </button>
            <button className="font-semibold text-white bg-brand-500 px-4 py-2 rounded-lg">Terapkan</button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FilterButtonDataPerizinan;

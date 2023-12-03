import React, { useState } from "react";
import surveyorData from "../../utils/DaftarSurveyorData";

const InputNamaFilterDashboardAdministrator = ({ onChange, required }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [dataList, setDataList] = useState([]);

  const surveyorDataList = surveyorData;

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowDropdown(true);

    const filteredData = surveyorDataList.filter((item) => item.nama.toLowerCase().includes(value.toLowerCase()));
    setDataList(filteredData);
  };

  const handleDropdownClick = (selectedItem) => {
    const value = selectedItem.nama + " (" + selectedItem.email + ")";
    setSearchTerm(value);
    setShowDropdown(false);
    onChange(value);
  };

  return (
    <div className="mb-6">
      <label className="block mb-1 font-semibold text-sm text-brand-500 capitalize" htmlFor="filter">
        Surveyor
        <span className={`text-danger-500`}>*</span>
      </label>
      <div className="relative">
        <input
          className="w-full px-3 h-9 rounded-lg text-sm border border-neutral-400"
          id="filter"
          type="text"
          placeholder="Tambahkan Surveyor..."
          required={required}
          value={searchTerm}
          onChange={handleSearch}
          onClick={() => setShowDropdown(true)}
        />
        {showDropdown && searchTerm && (
          <div className="z-10 absolute bg-white rounded-lg shadow border w-fit p-4">
            <ul>
              {dataList.map((item, index) => (
                <li className="flex items-center gap-4 py-1.5" key={index} onClick={() => handleDropdownClick(item)}>
                  <img className="w-6 h-6 rounded-full object-cover object-center" src={item.photo} alt="" />
                  <p className="text-xs">
                    {item.nama} ({item.email})
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputNamaFilterDashboardAdministrator;

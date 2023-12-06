import React, { useState } from "react";
import kategoriPerizinan from "../../utils/DaftarKategoriPerizinanData";
import { Link } from "react-router-dom";

const DropdownNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const kategoriPerizinanData = kategoriPerizinan;

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <ul className="flex items-center">
      <button className="rounded-lg text-center inline-flex items-center" type="button" onClick={handleDropdown}>
        Pengajuan
        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      {isDropdownOpen ? (
        <div className="z-10 absolute top-16 right-[20.5rem] bg-white divide-y divide-gray-100 rounded-lg shadow w-[30rem] border">
          <ul className="py-2 text-gray-700 grid grid-cols-2">
            {kategoriPerizinanData.map((kategoriItem) => (
              <li>
                <Link to={kategoriItem.link} className="px-4 py-2 hover:bg-gray-100 flex justify-start items-center gap-2">
                  <img className="w-12" src={kategoriItem.icon} alt="icon tk" />
                  {kategoriItem.nama}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </ul>
  );
};

export default DropdownNavbar;

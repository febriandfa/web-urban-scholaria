import React, { useEffect, useState } from "react";
// import kategoriPerizinan from "../../utils/DaftarKategoriPerizinanData";
import { Link } from "react-router-dom";
import { iconSD, iconSMA, iconSMP, iconTK } from "../../assets";
import LoadingPopup from "../popup-components/LoadingPopup";

const DropdownNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [kategoriPerizinanSelected, setKategoriPerizinanSelected] = useState("");

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClick = async (kategori_perizinan) => {
    setIsDropdownOpen(false);
    localStorage.setItem("KategoriPerizinan", kategori_perizinan);
  };

  return (
    <div>
      {/* <LoadingPopup loading={loading} /> */}
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
              {/* {kategoriPerizinanData.map((kategoriItem) => ( */}
              <li>
                <Link to={`/informasi-perizinan`} className="px-4 py-2 hover:bg-gray-100 flex justify-start items-center gap-2" onClick={() => handleDropdownClick("TK")}>
                  <img className="w-12" src={iconTK} alt="icon" />
                  Perizinan TK
                </Link>
              </li>
              <li>
                <Link to={`/informasi-perizinan`} className="px-4 py-2 hover:bg-gray-100 flex justify-start items-center gap-2" onClick={() => handleDropdownClick("SD")}>
                  <img className="w-12" src={iconSD} alt="icon" />
                  Perizinan SD
                </Link>
              </li>
              <li>
                <Link to={`/informasi-perizinan`} className="px-4 py-2 hover:bg-gray-100 flex justify-start items-center gap-2" onClick={() => handleDropdownClick("SMP")}>
                  <img className="w-12" src={iconSMP} alt="icon" />
                  Perizinan SMP
                </Link>
              </li>
              <li>
                <Link to={`/informasi-perizinan`} className="px-4 py-2 hover:bg-gray-100 flex justify-start items-center gap-2" onClick={() => handleDropdownClick("SMA")}>
                  <img className="w-12" src={iconSMA} alt="icon" />
                  Perizinan SMA
                </Link>
              </li>
              {/* ))} */}
            </ul>
          </div>
        ) : null}
      </ul>
    </div>
  );
};

export default DropdownNavbar;

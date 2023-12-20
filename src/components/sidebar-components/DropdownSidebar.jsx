import React, { useState } from "react";
import { iconSD, iconSMA, iconSMP, iconTK } from "../../assets";
import { Link, useLocation } from "react-router-dom";

const DropdownSidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClick = async (kategori_perizinan) => {
    localStorage.setItem("KategoriPerizinan", kategori_perizinan);
  };

  const location = useLocation();

  const activeItem = location.pathname === "/informasi-perizinan-utama";

  // const activeItem = location.pathname === "/informasi-perizinan-tk" || location.pathname === "/informasi-perizinan-sd" || location.pathname === "/informasi-perizinan-smp" || location.pathname === "/informasi-perizinan-sma";

  return (
    <li>
      <button className={`flex items-center p-2 ${activeItem ? "text-brand-500" : "text-neutral-800"}`} onClick={handleDropdown}>
        <div className="w-6 h-6">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V9C21 7.89543 20.1046 7 19 7H13L11 5H5C3.89543 5 3 5.89543 3 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="ml-3 text-left">Informasi Perizinan</span>
        <svg className={`w-8 h-8 ${activeItem ? "text-brand-500" : "text-neutral-800"}`} xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.17289 6.68129C5.55446 6.32352 6.1731 6.32352 6.55467 6.68129L9.77204 9.69801L12.9894 6.68129C13.371 6.32352 13.9896 6.32352 14.3712 6.68129C14.7528 7.03906 14.7528 7.61912 14.3712 7.97689L10.4629 11.6414C10.0814 11.9992 9.46272 11.9992 9.08115 11.6414L5.17289 7.97689C4.79133 7.61912 4.79133 7.03906 5.17289 6.68129Z"
            fill="currentColor"
          />
        </svg>
      </button>
      {isDropdownOpen ? (
        <ul className="pl-6 text-sm">
          <Link to="/informasi-perizinan-utama" onClick={() => handleDropdownClick("TK")}>
            <li className={`p-2 flex items-center gap-2 ${location.pathname === "/informasi-perizinan-utama" ? "text-brand-500" : "text-neutral-800"}`}>
              <img className="w-6 h-6" src={iconTK} alt="" />
              Perizinan TK
            </li>
          </Link>
          <Link to="/informasi-perizinan-utama" onClick={() => handleDropdownClick("SD")}>
            <li className={`p-2 flex items-center gap-2 ${location.pathname === "/informasi-perizinan-utama" ? "text-brand-500" : "text-neutral-800"}`}>
              <img className="w-6 h-6" src={iconSD} alt="" />
              Perizinan SD
            </li>
          </Link>
          <Link to="/informasi-perizinan-utama" onClick={() => handleDropdownClick("SMP")}>
            <li className={`p-2 flex items-center gap-2 ${location.pathname === "/informasi-perizinan-utama" ? "text-brand-500" : "text-neutral-800"}`}>
              <img className="w-6 h-6" src={iconSMP} alt="" />
              Perizinan SMP
            </li>
          </Link>
          <Link to="/informasi-perizinan-utama" onClick={() => handleDropdownClick("SMA")}>
            <li className={`p-2 flex items-center gap-2 ${location.pathname === "/informasi-perizinan-utama" ? "text-brand-500" : "text-neutral-800"}`}>
              <img className="w-6 h-6" src={iconSMA} alt="" />
              Perizinan SMA
            </li>
          </Link>
        </ul>
      ) : null}
    </li>
  );
};

export default DropdownSidebar;

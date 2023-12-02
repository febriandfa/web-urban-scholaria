import React from "react";
import { bgHome } from "../../assets";
import { useLocation } from "react-router-dom";

const ProfileBarDashboardAdministrator = ({ onClick }) => {
  const location = useLocation();

  const hideButtonOnDashboard = location.pathname.startsWith("/data-diri");

  return (
    <div className="flex items-center pb-4 border-b-2 border-neutral-300">
      <img className="rounded-full w-16 h-16 object-cover object-center" src={bgHome} alt="" />
      <div className="font-semibold mr-auto ml-8">
        <p className="text-neutral-500 text-sm">Selamat Datang</p>
        <p className="text-lg">Alda Elsa Faradila</p>
      </div>
      {hideButtonOnDashboard && (
        <button className="flex items-center gap-2 w-fit px-4 py-2 bg-brand-500 text-white text-base font-semibold rounded-lg" onClick={onClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M12.6935 4.36019L15.6398 7.30647M13.9435 3.11019C14.7571 2.2966 16.0762 2.2966 16.8898 3.11019C17.7034 3.92379 17.7034 5.24288 16.8898 6.05647L5.41667 17.5296H2.5V14.5537L13.9435 3.11019Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Edit
        </button>
      )}
    </div>
  );
};

export default ProfileBarDashboardAdministrator;

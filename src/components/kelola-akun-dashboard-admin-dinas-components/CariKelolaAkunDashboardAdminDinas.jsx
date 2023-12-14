import React from "react";

const CariKelolaAkunDashboardAdminDinas = () => {
  return (
    <form className="w-full">
      <div className="relative">
        <input className="w-full pl-3 pr-10 h-9 rounded-lg text-sm border border-neutral-400" type="text" placeholder="Cari Pengguna..." />
        <svg className="absolute right-3 top-1.5" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
          <path
            d="M17.9844 17.5L12.9844 12.5M14.651 8.33333C14.651 11.555 12.0394 14.1667 8.81771 14.1667C5.59605 14.1667 2.98438 11.555 2.98438 8.33333C2.98438 5.11167 5.59605 2.5 8.81771 2.5C12.0394 2.5 14.651 5.11167 14.651 8.33333Z"
            stroke="#94A3B8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </form>
  );
};

export default CariKelolaAkunDashboardAdminDinas;

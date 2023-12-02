import React from "react";

const ListButtonFilterDashboardAdministrator = ({ handleFilterClick, activeFilter }) => {
  return (
    <div className="flex gap-6 justify-center my-8">
      <button className={`w-24 text-xs font-semibold px-5 py-2 rounded-2xl ${activeFilter === "Semua" ? "text-white bg-brand-500" : "text-neutral-500 bg-neutral-100 border"}`} onClick={() => handleFilterClick("Semua")}>
        Semua
      </button>
      <button className={`w-24 text-xs font-semibold px-5 py-2 rounded-2xl ${activeFilter === "Hari Ini" ? "text-white bg-brand-500" : "text-neutral-500 bg-neutral-100 border"}`} onClick={() => handleFilterClick("Hari Ini")}>
        Hari Ini
      </button>
      <button className={`w-24 text-xs font-semibold px-5 py-2 rounded-2xl ${activeFilter === "Sebulan" ? "text-white bg-brand-500" : "text-neutral-500 bg-neutral-100 border"}`} onClick={() => handleFilterClick("Sebulan")}>
        Sebulan
      </button>
      <button className={`w-24 text-xs font-semibold px-5 py-2 rounded-2xl ${activeFilter === "3 Bulan" ? "text-white bg-brand-500" : "text-neutral-500 bg-neutral-100 border"}`} onClick={() => handleFilterClick("3 Bulan")}>
        3 Bulan
      </button>
      <button className={`w-24 text-xs font-semibold px-5 py-2 rounded-2xl ${activeFilter === "1 Tahun" ? "text-white bg-brand-500" : "text-neutral-500 bg-neutral-100 border"}`} onClick={() => handleFilterClick("1 Tahun")}>
        1 Tahun
      </button>
    </div>
  );
};

export default ListButtonFilterDashboardAdministrator;

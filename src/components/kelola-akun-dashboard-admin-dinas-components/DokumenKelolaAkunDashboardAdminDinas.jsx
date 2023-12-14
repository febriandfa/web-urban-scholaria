import React from "react";
import LihatFileVerifikasiDashboardAdministrator from "../verifikasi-dashboard-administrator-components/LihatFileVerifikasiDashboardAdministrator";
import CheckboxVerifikasiDashboardAdministrator from "../verifikasi-dashboard-administrator-components/CheckboxVerifikasiDashboardOperator";
import CardGeneral from "../general-components/CardGeneral";

const DokumenKelolaAkunDashboardAdminDinas = ({ namaDokumen, fileDokumen, link, handleCheckboxChange, checklist }) => {
  return (
    <CardGeneral color="bg-neutral-100" customClass="mb-4">
      <div className="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M4 9.33341V22.6667C4 24.1395 5.19391 25.3334 6.66667 25.3334H25.3333C26.8061 25.3334 28 24.1395 28 22.6667V12.0001C28 10.5273 26.8061 9.33341 25.3333 9.33341H17.3333L14.6667 6.66675H6.66667C5.19391 6.66675 4 7.86066 4 9.33341Z"
            stroke="#1E293B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div>
          <p className="font-semibold inline-block mr-4">{namaDokumen}</p>
          <LihatFileVerifikasiDashboardAdministrator link={link} />
          <p className="text-brand-500 text-sm">{fileDokumen}</p>
        </div>
        <div className="ml-auto">
          <CheckboxVerifikasiDashboardAdministrator onChange={handleCheckboxChange} checked={checklist} />
        </div>
      </div>
    </CardGeneral>
  );
};

export default DokumenKelolaAkunDashboardAdminDinas;

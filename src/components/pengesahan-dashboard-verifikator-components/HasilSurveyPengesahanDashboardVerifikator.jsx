import React from "react";
import LabelGeneral from "../general-components/LabelGeneral";
import CardGeneral from "../general-components/CardGeneral";
import CheckboxVerifikasiDashboardAdministrator from "../verifikasi-dashboard-administrator-components/CheckboxVerifikasiDashboardOperator";
import LihatFileVerifikasiDashboardAdministrator from "../verifikasi-dashboard-administrator-components/LihatFileVerifikasiDashboardAdministrator";

const HasilSurveyPengesahanDashboardVerifikator = ({ handleCheckboxChange, checklist }) => {
  return (
    <div>
      <h1 className="text-2xl text-brand-500 font-semibold text-center mb-10 flex items-center gap-2 justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1992 2.53735L12.7992 8.93735V29.4628L19.1992 23.0628V2.53735Z" fill="#191D88" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.93059 5.26873C5.47299 4.81113 4.7848 4.67424 4.18693 4.92189C3.58905 5.16954 3.19922 5.75296 3.19922 6.4001V22.4001C3.19922 22.8244 3.36779 23.2314 3.66785 23.5315L9.59922 29.4628V8.93735L5.93059 5.26873Z"
            fill="#191D88"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.3306 8.46873L22.3992 2.53735V23.0628L26.0678 26.7315C26.5254 27.1891 27.2136 27.326 27.8115 27.0783C28.4094 26.8307 28.7992 26.2472 28.7992 25.6001V9.6001C28.7992 9.17575 28.6306 8.76878 28.3306 8.46873Z"
            fill="#191D88"
          />
        </svg>
        Hasil Survey
      </h1>
      <div className="grid grid-cols-2 mb-7">
        <LabelGeneral title="Nama Tugas" value="Tugas Survey Pembangunan TK Benih Kasih" />
        <LabelGeneral title="Surveyor" value="Regi Muhammar (regimuhammar@gmail.com)" />
        <LabelGeneral title="Tanggal Penugasan" value="13/11/2023" />
        <LabelGeneral title="Tanggal Tenggat" value="16/11/2023" />
      </div>
      <CardGeneral color="bg-neutral-100" customClass="mb-4">
        <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M4 9.33341V22.6667C4 24.1395 5.19391 25.3334 6.66667 25.3334H25.3333C26.8061 25.3334 28 24.1395 28 22.6667V12.0001C28 10.5273 26.8061 9.33341 25.3333 9.33341H17.3333L14.6667 6.66675H6.66667C5.19391 6.66675 4 7.86066 4 9.33341Z"
              stroke="#1E293B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div>
            <p className="font-semibold inline-block mr-4">Dokumen Hasil Survey</p>
            <LihatFileVerifikasiDashboardAdministrator link="#" />
            <p className="text-brand-500 text-sm">Hasil Survey_Regi Muhammar.pdf</p>
          </div>
          <div className="ml-auto">
            <CheckboxVerifikasiDashboardAdministrator onChange={(e) => handleCheckboxChange("dokumen", e.target.checked)} checked={checklist.dokumen} />
          </div>
        </div>
      </CardGeneral>
      <CardGeneral color="bg-neutral-100">
        <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M4 9.33341V22.6667C4 24.1395 5.19391 25.3334 6.66667 25.3334H25.3333C26.8061 25.3334 28 24.1395 28 22.6667V12.0001C28 10.5273 26.8061 9.33341 25.3333 9.33341H17.3333L14.6667 6.66675H6.66667C5.19391 6.66675 4 7.86066 4 9.33341Z"
              stroke="#1E293B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div>
            <p className="font-semibold inline-block mr-4">Foto Hasil Survey (Sudah Ada Geotag)</p>
            <LihatFileVerifikasiDashboardAdministrator link="#" />
            <p className="text-brand-500 text-sm">Foto Hasil Survey_Regi Muhammar.jpg</p>
          </div>
          <div className="ml-auto">
            <CheckboxVerifikasiDashboardAdministrator onChange={(e) => handleCheckboxChange("foto", e.target.checked)} checked={checklist.foto} />
          </div>
        </div>
      </CardGeneral>
    </div>
  );
};

export default HasilSurveyPengesahanDashboardVerifikator;

import React from "react";
import CardGeneral from "../general-components/CardGeneral";

const HasilValidasiKepalaDinasDashboardVerifikator = ({ idSurat }) => {
  return (
    <div className="mb-10">
      <h1 className="text-2xl text-brand-500 font-semibold text-center mb-10 flex items-center gap-2 justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.0264 5.52813C11.0553 5.44602 12.0321 5.04142 12.8177 4.37193C14.651 2.80962 17.3474 2.80962 19.1807 4.37193C19.9663 5.04142 20.9431 5.44602 21.972 5.52813C24.373 5.71973 26.2797 7.62636 26.4713 10.0274C26.5534 11.0563 26.958 12.0331 27.6275 12.8187C29.1898 14.652 29.1898 17.3484 27.6275 19.1817C26.958 19.9673 26.5534 20.9441 26.4713 21.973C26.2797 24.374 24.373 26.2807 21.972 26.4723C20.9431 26.5544 19.9663 26.959 19.1807 27.6285C17.3474 29.1908 14.651 29.1908 12.8177 27.6285C12.0321 26.959 11.0553 26.5544 10.0264 26.4723C7.62539 26.2807 5.71875 24.374 5.52715 21.973C5.44504 20.9441 5.04044 19.9673 4.37096 19.1817C2.80864 17.3484 2.80864 14.652 4.37096 12.8187C5.04044 12.0331 5.44504 11.0563 5.52715 10.0274C5.71875 7.62636 7.62539 5.71973 10.0264 5.52813ZM21.9306 13.9316C22.5554 13.3067 22.5554 12.2937 21.9306 11.6688C21.3057 11.044 20.2927 11.044 19.6678 11.6688L14.3992 16.9375L12.3306 14.8688C11.7058 14.244 10.6927 14.244 10.0678 14.8688C9.44301 15.4937 9.44301 16.5067 10.0678 17.1316L13.2678 20.3316C13.8927 20.9564 14.9058 20.9564 15.5306 20.3316L21.9306 13.9316Z"
            fill="#191D88"
          />
        </svg>
        Penerbitan Perizinan
      </h1>
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
            <p className="font-semibold inline-block mr-4">Surat Perizinan</p>
          </div>
          <a className="font-semibold text-brand_2-500 ml-auto" href={`https://urbanscholaria.my.id/api/surat/` + idSurat + `/cetak-surat`} target="_blank">
            Lihat
          </a>
        </div>
      </CardGeneral>
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
            <p className="font-semibold inline-block mr-4">SK Legalitas Perizinan</p>
          </div>
          <a className="font-semibold text-brand_2-500 ml-auto" href={`https://urbanscholaria.my.id/api/surat/` + idSurat + `/cetak-surat-legalitas`} target="_blank">
            Lihat
          </a>
        </div>
      </CardGeneral>
    </div>
  );
};

export default HasilValidasiKepalaDinasDashboardVerifikator;

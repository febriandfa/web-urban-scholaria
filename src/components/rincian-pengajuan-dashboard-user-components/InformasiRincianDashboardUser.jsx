import React from "react";
import SalinTeks from "../../utils/functions/SalinTeks";

const InformasiRincianDashboardUser = ({ idPengajuan, jenisPerizinan, tanggalPengajuan, namaSekolah, pemohon }) => {
  return (
    <div>
      <div className="flex items-center mb-4">
        <h1 className="text-lg text-brand-500 font-semibold">{jenisPerizinan}</h1>
        <p className="text-sm font-semibold ml-auto">ID Pengajuan: {idPengajuan}</p>
        <button className="text-warn-500 font-semibold ml-4" type="button" onClick={() => SalinTeks(idPengajuan)}>
          Salin
        </button>
      </div>
      <div className="grid grid-cols-2 gap-20">
        <div className="flex flex-col gap-3">
          <div className="flex items-center">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 3C8.17157 3 7.5 3.67157 7.5 4.5V6H6C4.34315 6 3 7.34315 3 9V24C3 25.6569 4.34315 27 6 27H24C25.6569 27 27 25.6569 27 24V9C27 7.34315 25.6569 6 24 6H22.5V4.5C22.5 3.67157 21.8284 3 21 3C20.1716 3 19.5 3.67157 19.5 4.5V6H10.5V4.5C10.5 3.67157 9.82843 3 9 3ZM9 10.5C8.17157 10.5 7.5 11.1716 7.5 12C7.5 12.8284 8.17157 13.5 9 13.5H21C21.8284 13.5 22.5 12.8284 22.5 12C22.5 11.1716 21.8284 10.5 21 10.5H9Z"
                fill="#64748B"
              />
            </svg>
            <p className="text-neutral-500 ml-4">Tanggal Pengajuan</p>
            <p className="text-neutral-500 ml-auto">{tanggalPengajuan}</p>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 6C6 4.34315 7.34315 3 9 3H21C22.6569 3 24 4.34315 24 6V24C24.8284 24 25.5 24.6716 25.5 25.5C25.5 26.3284 24.8284 27 24 27H19C18.4477 27 18 26.5523 18 26V22.5C18 21.6716 17.3284 21 16.5 21H13.5C12.6716 21 12 21.6716 12 22.5V26C12 26.5523 11.5523 27 11 27H6C5.17157 27 4.5 26.3284 4.5 25.5C4.5 24.6716 5.17157 24 6 24V6ZM10.5 7.5H13.5V10.5H10.5V7.5ZM13.5 13.5H10.5V16.5H13.5V13.5ZM16.5 7.5H19.5V10.5H16.5V7.5ZM19.5 13.5H16.5V16.5H19.5V13.5Z"
                fill="#64748B"
              />
            </svg>
            <p className="text-neutral-500 ml-4">Nama Sekolah</p>
            <p className="text-neutral-500 ml-auto">{namaSekolah}</p>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M15 13.5C17.4853 13.5 19.5 11.4853 19.5 9C19.5 6.51472 17.4853 4.5 15 4.5C12.5147 4.5 10.5 6.51472 10.5 9C10.5 11.4853 12.5147 13.5 15 13.5Z" fill="#64748B" />
              <path d="M4.5 27C4.5 21.201 9.20101 16.5 15 16.5C20.799 16.5 25.5 21.201 25.5 27H4.5Z" fill="#64748B" />
            </svg>
            <p className="text-neutral-500 ml-4">Pemohon</p>
            <p className="text-neutral-500 ml-auto">{pemohon}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformasiRincianDashboardUser;

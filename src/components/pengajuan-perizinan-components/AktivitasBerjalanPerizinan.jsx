import React, { useEffect, useState } from "react";
import { iconSD2, iconSMA2, iconSMP2, iconTK2 } from "../../assets";
import CardGeneral from "../general-components/CardGeneral";
import { Link } from "react-router-dom";
import { userService } from "../../services";
import { getIdSuratDiajukan } from "../../services/storage.service";

const AktivitasBerjalanPerizinan = ({ id_surat, id_surat_jenis, kategoriPerizinan, namaPerizinan, tanggalPengajuan, namaSekolah, pemohon, status, hideButton }) => {
  const handleAktivitasClick = async () => {
    try {
      localStorage.setItem("IdSuratDiajukan", id_surat);
      localStorage.setItem("SuratJenisID", id_surat_jenis);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleAktivitasClick();
  }, []);

  let schoolIcon;
  if (kategoriPerizinan === "TK") {
    schoolIcon = iconTK2;
  } else if (kategoriPerizinan === "SD") {
    schoolIcon = iconSD2;
  } else if (kategoriPerizinan === "SMP") {
    schoolIcon = iconSMP2;
  } else if (kategoriPerizinan === "SMA") {
    schoolIcon = iconSMA2;
  }

  let statusColor = "";
  if (status === "Ditolak") {
    statusColor = "bg-danger-500";
  } else if (status === "Pengisian Dokumen" || status === "Verifikasi Operator" || status === "Verifikasi Verifikator") {
    statusColor = "bg-warn-500";
  } else if (status === "Penjadwalan Survey" || status === "Verifikasi Hasil Survey") {
    statusColor = "bg-brand-300";
  } else if (status === "Selesai") {
    statusColor = "bg-done-500";
  }

  return (
    <CardGeneral>
      <Link className="flex gap-5 w-full mx-auto" to="/rincian-pengajuan" onClick={() => handleAktivitasClick(id_surat)}>
        <div className="flex-grow">
          <div className="flex items-center gap-4 border-b-2 border-neutral-300 pb-6 mb-6 pl-5">
            <img className="w-20 h-20" src={schoolIcon} alt="" />
            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-brand-900 font-normal text-sm">Perizinan {kategoriPerizinan}</p>
                <p className="font-semibold text-sm">ID: {id_surat}</p>
              </div>
              {/* <p className="text-brand-900 font-normal text-sm">{jenisPerizinan}</p> */}
              <h5 className="text-brand-500 font-semibold text-base mb-4 capitalize">{namaPerizinan}</h5>
              {/* <h5 className="text-brand-500 font-semibold text-base mb-4 capitalize">Perizinan Pembangunan Sekolah Menengah Atas</h5> */}
              <ul className="flex gap-10">
                <li className="flex items-center gap-4 text-xs font-normal text-neutral-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.5 2.5C6.80964 2.5 6.25 3.05964 6.25 3.75V5H5C3.61929 5 2.5 6.11929 2.5 7.5V20C2.5 21.3807 3.61929 22.5 5 22.5H20C21.3807 22.5 22.5 21.3807 22.5 20V7.5C22.5 6.11929 21.3807 5 20 5H18.75V3.75C18.75 3.05964 18.1904 2.5 17.5 2.5C16.8096 2.5 16.25 3.05964 16.25 3.75V5H8.75V3.75C8.75 3.05964 8.19036 2.5 7.5 2.5ZM7.5 8.75C6.80964 8.75 6.25 9.30964 6.25 10C6.25 10.6904 6.80964 11.25 7.5 11.25H17.5C18.1904 11.25 18.75 10.6904 18.75 10C18.75 9.30964 18.1904 8.75 17.5 8.75H7.5Z"
                      fill="#64748B"
                    />
                  </svg>
                  {tanggalPengajuan}
                </li>
                <li className="flex items-center gap-4 text-xs font-normal text-neutral-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5 5C5 3.61929 6.11929 2.5 7.5 2.5H17.5C18.8807 2.5 20 3.61929 20 5V20C20.6904 20 21.25 20.5596 21.25 21.25C21.25 21.9404 20.6904 22.5 20 22.5H16C15.4477 22.5 15 22.0523 15 21.5V18.75C15 18.0596 14.4404 17.5 13.75 17.5H11.25C10.5596 17.5 10 18.0596 10 18.75V21.5C10 22.0523 9.55228 22.5 9 22.5H5C4.30964 22.5 3.75 21.9404 3.75 21.25C3.75 20.5596 4.30964 20 5 20V5ZM8.75 6.25H11.25V8.75H8.75V6.25ZM11.25 11.25H8.75V13.75H11.25V11.25ZM13.75 6.25H16.25V8.75H13.75V6.25ZM16.25 11.25H13.75V13.75H16.25V11.25Z"
                      fill="#64748B"
                    />
                  </svg>
                  {namaSekolah}
                </li>
                <li className="flex items-center gap-4 text-xs font-normal text-neutral-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M12.5 11.25C14.5711 11.25 16.25 9.57107 16.25 7.5C16.25 5.42893 14.5711 3.75 12.5 3.75C10.4289 3.75 8.75 5.42893 8.75 7.5C8.75 9.57107 10.4289 11.25 12.5 11.25Z" fill="#64748B" />
                    <path d="M3.75 22.5C3.75 17.6675 7.66751 13.75 12.5 13.75C17.3325 13.75 21.25 17.6675 21.25 22.5H3.75Z" fill="#64748B" />
                  </svg>
                  {pemohon}
                </li>
              </ul>
            </div>
          </div>
          <p className={`text-sm font-normal text-white py-1 text-center rounded ${statusColor}`}>{status}</p>
        </div>
        {hideButton ? null : (
          <div className="flex items-end">
            <button className="flex items-center w-10 h-10 bg-brand-500 rounded">
              <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.3607 3.64746C8.51595 3.64746 7.02051 5.13528 7.02051 6.97059V26.9094C7.02051 28.7447 8.51595 30.2325 10.3607 30.2325H23.7214C25.5661 30.2325 27.0615 28.7447 27.0615 26.9094V12.6435C27.0615 11.7622 26.7096 10.9169 26.0832 10.2937L20.3812 4.62078C19.7548 3.99758 18.9052 3.64746 18.0193 3.64746H10.3607ZM18.7111 13.6168C18.7111 12.6992 17.9634 11.9553 17.041 11.9553C16.1187 11.9553 15.3709 12.6992 15.3709 13.6168V19.5749L13.2117 17.4266C12.5595 16.7778 11.502 16.7778 10.8498 17.4266C10.1976 18.0755 10.1976 19.1276 10.8498 19.7764L15.8601 24.7611C16.5123 25.41 17.5697 25.41 18.222 24.7611L23.2322 19.7764C23.8844 19.1276 23.8844 18.0755 23.2322 17.4266C22.58 16.7778 21.5226 16.7778 20.8703 17.4266L18.7111 19.5749V13.6168Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        )}
      </Link>
    </CardGeneral>
  );
};

export default AktivitasBerjalanPerizinan;

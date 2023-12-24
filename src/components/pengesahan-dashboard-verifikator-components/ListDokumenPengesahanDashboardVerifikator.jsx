import React from "react";
import TableGeneral from "../general-components/TableGeneral";
import TableHeadGeneral from "../general-components/TableHeadGeneral";
import TableBodyGeneral from "../general-components/TableBodyGeneral";
import TableRowGeneral from "../general-components/TableRowGeneral";
import TableItemGeneral from "../general-components/TableItemGeneral";
import { dokumenPengajuan } from "../../utils/DaftarDokumenPengajuanData";
import LihatFileVerifikasiDashboardAdministrator from "../verifikasi-dashboard-administrator-components/LihatFileVerifikasiDashboardAdministrator";

const ListDokumenPengesahanDashboardVerifikator = ({ dokumenPengajuan, dokumenTerpenuhi, jumlahDokumen }) => {
  const headDokumenPengesahan = ["Berkas Persyaratan", "File"];
  // const itemDokumenPengesahan = dokumenPengajuan;

  return (
    <div>
      <h1 className="text-2xl text-brand-500 font-semibold text-center flex items-center gap-2 justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M9.33333 15.9998C9.33333 14.5271 10.5272 13.3332 12 13.3332H25.3333C26.8061 13.3332 28 14.5271 28 15.9998V22.6665C28 24.1393 26.8061 25.3332 25.3333 25.3332H6.66667C8.13943 25.3332 9.33333 24.1393 9.33333 22.6665V15.9998Z"
            fill="#191D88"
          />
          <path
            d="M6.66667 25.3332C5.19391 25.3332 4 24.1393 4 22.6665V9.33317C4 7.86041 5.19391 6.6665 6.66667 6.6665H12L14.6667 9.33317H20C21.4728 9.33317 22.6667 10.5271 22.6667 11.9998V13.3332M6.66667 25.3332H25.3333C26.8061 25.3332 28 24.1393 28 22.6665V15.9998C28 14.5271 26.8061 13.3332 25.3333 13.3332H12C10.5272 13.3332 9.33333 14.5271 9.33333 15.9998V22.6665C9.33333 24.1393 8.13943 25.3332 6.66667 25.3332Z"
            stroke="#0F172A"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        Dokumen Persyaratan
      </h1>
      <p className="text-brand-500 font-semibold text-center mb-10">
        {dokumenTerpenuhi}/{jumlahDokumen}
      </p>
      <div className="mb-16">
        <TableGeneral>
          <TableHeadGeneral headTitles={headDokumenPengesahan} />
          <TableBodyGeneral>
            {dokumenPengajuan?.map((item, index) => (
              <TableRowGeneral key={index}>
                <TableItemGeneral tableItem={item?.surat_syarat?.nama} capitalize wrap />
                <TableItemGeneral tableItem={item?.dokumen_upload?.replace(/^.*?\/dokumen-upload\//, "")} customColor="text-brand-500" capitalize wrap />
                <TableItemGeneral tableItem={<LihatFileVerifikasiDashboardAdministrator link={item?.dokumen_upload} />} />
              </TableRowGeneral>
            ))}
          </TableBodyGeneral>
        </TableGeneral>
      </div>
    </div>
  );
};

export default ListDokumenPengesahanDashboardVerifikator;

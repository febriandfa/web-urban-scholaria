import React from "react";
import LinkBackGeneral from "../general-components/LinkBackGeneral";

const HeaderRincianDashboardUser = ({ status }) => {
  let statusColor = "";
  if (status === "Ditolak") {
    statusColor = "bg-danger-500";
  } else if (status === "Pengisian Dokumen" || status === "Verifikasi Operator" || status === "Verifikasi Verifikator") {
    statusColor = "bg-warn-500";
  } else if (status === "Penjadwalan Survey" || status === "Verifikasi Hasil Survey") {
    statusColor = "bg-brand-300";
  } else if (status === "Pengeluaran Surat") {
    statusColor = "bg-brand-500";
  } else if (status === "Selesai") {
    statusColor = "bg-done-500";
  }

  return (
    <div className="flex justify-between">
      <LinkBackGeneral />
      <div className="flex items-center gap-4">
        <p className="text-base font-semibold">Status</p>
        <p className={`block w-80 text-sm font-normal text-white py-1 text-center rounded ${statusColor}`}>{status}</p>
      </div>
    </div>
  );
};

export default HeaderRincianDashboardUser;

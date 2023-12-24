import React from "react";

const StatusPengajuanDashboardAdministrator = ({ status }) => {
  let statusColor = "";
  if (status === "Ditolak") {
    statusColor = "bg-danger-500";
  } else if (status === "Pengisian Dokumen" || status === "Verifikasi Operator" || status === "Verifikasi Verifikator") {
    statusColor = "bg-warn-500";
  } else if (status === "Penjadwalan Survey" || status === "Verifikasi Hasil Survey") {
    statusColor = "bg-brand-300";
  } else if (status === "Pengeluaran Surat") {
    statusColor = "bg-brand-500";
  } else if (status === "Diterima") {
    statusColor = "bg-done-500";
  }

  return (
    <div className="flex items-center gap-4 mt-3 mb-7 justify-center">
      <p className="text-base font-semibold">Status</p>
      <p className={`block w-80 text-sm font-normal text-white py-1 text-center rounded ${statusColor}`}>{status}</p>
    </div>
  );
};

export default StatusPengajuanDashboardAdministrator;

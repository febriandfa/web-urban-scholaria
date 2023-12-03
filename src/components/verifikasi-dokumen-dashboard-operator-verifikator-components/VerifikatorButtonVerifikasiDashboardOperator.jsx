import React from "react";
import Swal from "sweetalert2";
import { alertNextVerifikator } from "../../assets";

const VerifikatorButtonVerifikasiDashboardOperator = ({ verified }) => {
  const triggerAlertAccept = () => {
    Swal.fire({
      imageUrl: alertNextVerifikator,
      imageHeight: 131,
      imageWidth: 131,
      title: "DILANJUTKAN KE VERIFIKATOR",
      text: "Permohonan berhasil dilanjutkan untuk diverifikasi oleh verifikator",
      confirmButtonText: "Lanjut",
    });
  };

  const triggerAlertDecline = () => {
    Swal.fire({
      imageUrl: alertNextVerifikator,
      imageHeight: 131,
      imageWidth: 131,
      title: "PENOLAKAN TERKIRIM",
      text: "Penolakan permohonan telah dikembalikan ke pemohon",
      confirmButtonText: "Lanjut",
    });
  };

  return (
    <div>
      <button className={`py-2 px-4 bg-danger-500 w-full rounded-lg text-base font-semibold text-white mb-3`} type="submit" onClick={triggerAlertDecline}>
        Tolak Pengajuan Permohonan
      </button>
      <button className={`py-2 px-4 w-full rounded-lg text-base font-semibold ${verified ? "text-white bg-brand-500" : "text-neutral-500 bg-neutral-100"}`} disabled={!verified} type="submit" onClick={triggerAlertAccept}>
        Lanjut Ke Verifikator
      </button>
    </div>
  );
};

export default VerifikatorButtonVerifikasiDashboardOperator;

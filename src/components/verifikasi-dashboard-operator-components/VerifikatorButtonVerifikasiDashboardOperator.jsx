import React from "react";
import Swal from "sweetalert2";
import { alertNextVerifikator } from "../../assets";
import { userService } from "../../services";
import { useNavigate } from "react-router-dom";

const VerifikatorButtonVerifikasiDashboardOperator = ({ verified, idSurat }) => {
  const navigate = useNavigate();
  const handleAccVerifikasiOperator = async () => {
    try {
      const response = await userService.accVerifikasiOperator(idSurat);
      console.log("Hasil ACC Operator", response);
      triggerAlertAccept();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeclineVerifikasiOperator = async () => {
    try {
      const response = await userService.declineVerifikasiOperator(idSurat);
      console.log("Hasil DECLINE Operator", response);
      triggerAlertDecline();
    } catch (error) {
      console.error(error);
    }
  };

  const triggerAlertAccept = () => {
    Swal.fire({
      imageUrl: alertNextVerifikator,
      imageHeight: 131,
      imageWidth: 131,
      title: "DILANJUTKAN KE VERIFIKATOR",
      text: "Permohonan berhasil dilanjutkan untuk diverifikasi oleh verifikator",
      confirmButtonText: "Lanjut",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/verifikasi-dokumen-operator");
      }
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
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/verifikasi-dokumen-operator");
      }
    });
  };

  return (
    <div>
      <button className={`py-2 px-4 bg-danger-500 w-full rounded-lg text-base font-semibold text-white mb-3`} type="submit" onClick={() => handleDeclineVerifikasiOperator(idSurat)}>
        Tolak Pengajuan Permohonan
      </button>
      <button
        className={`py-2 px-4 w-full rounded-lg text-base font-semibold ${verified ? "text-white bg-brand-500" : "text-neutral-500 bg-neutral-100"}`}
        disabled={!verified}
        type="submit"
        onClick={() => handleAccVerifikasiOperator(idSurat)}
      >
        Lanjut Ke Verifikator
      </button>
    </div>
  );
};

export default VerifikatorButtonVerifikasiDashboardOperator;

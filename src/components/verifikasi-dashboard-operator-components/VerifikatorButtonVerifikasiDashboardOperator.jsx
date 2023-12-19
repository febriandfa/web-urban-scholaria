import React, { useState } from "react";
import Swal from "sweetalert2";
import { alertNextVerifikator } from "../../assets";
import { userService } from "../../services";
import { useNavigate } from "react-router-dom";
import LoadingPopup from "../popup-components/LoadingPopup";
import Popup from "reactjs-popup";
import InputTolakVerifikasiDokumenOperatorPopup from "../popup-components/InputTolakVerifikasiDokumenOperatorPopup";

const VerifikatorButtonVerifikasiDashboardOperator = ({ verified, idSurat }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleAccVerifikasiOperator = async () => {
    try {
      setLoading(true);
      const response = await userService.accVerifikasiOperator(idSurat);
      console.log("Hasil ACC Operator", response);
      setLoading(false);
      triggerAlertAccept();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleDeclineVerifikasiOperator = async () => {
    try {
      setLoading(true);
      const response = await userService.declineVerifikasiOperator(idSurat);
      console.log("Hasil DECLINE Operator", response);
      setLoading(false);
      triggerAlertDecline();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const triggerAlertAccept = () => {
    Swal.fire({
      // imageUrl: alertNextVerifikator,
      // imageHeight: 131,
      // imageWidth: 131,
      icon: "success",
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
      // imageUrl: alertNextVerifikator,
      // imageHeight: 131,
      // imageWidth: 131,
      icon: "error",
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
      <LoadingPopup loading={loading} />
      <Popup
        trigger={
          <button className={`py-2 px-4 bg-danger-500 w-full rounded-lg text-base font-semibold text-white mb-3`} type="button">
            Tolak Pengajuan Permohonan
          </button>
        }
        modal
        nested
        overlayStyle={{
          background: "rgba(128, 128, 128, 0.7)",
          backdropFilter: "blur(5px)",
        }}
      >
        {(close) => <InputTolakVerifikasiDokumenOperatorPopup close={close} />}
      </Popup>
      {/* <button className={`py-2 px-4 bg-danger-500 w-full rounded-lg text-base font-semibold text-white mb-3`} type="submit" onClick={() => handleDeclineVerifikasiOperator(idSurat)}>
        Tolak Pengajuan Permohonan
      </button> */}
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

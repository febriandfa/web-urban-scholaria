import React, { useState } from "react";
import LoadingPopup from "../popup-components/LoadingPopup";
import Swal from "sweetalert2";
import { userService } from "../../services";
import { getToken } from "../../services/storage.service";
import { useNavigate } from "react-router-dom";

const TerbitkanPerizinanButtonDashboardVerifikator = ({ idSurat }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const verifikatorToken = getToken();

  const handleAccValidasiDokumen = async () => {
    try {
      setLoading(true);
      const response = await userService.accHasilKepalaDinasVerifikator(idSurat, verifikatorToken);
      console.log("Surat Selesai", response);
      setLoading(false);
      triggerAlert();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const triggerAlert = () => {
    Swal.fire({
      icon: "success",
      title: "PERIZINAN TERKIRIM KE PEMOHON!",
      text: "Pengajuan Permohonan Perizinan Selesai dan Perizinan berhasil dikirimkan ke Pemohon",
      confirmButtonText: "Lanjut",
    }).then(() => {
      navigate("/pengesahan-perizinan-verifikator");
      close();
    });
  };

  return (
    <>
      <LoadingPopup loading={loading} />
      <button className={`py-2 px-4 w-full rounded-lg text-base font-semibold text-white bg-brand-500`} onClick={() => handleAccValidasiDokumen()}>
        Keluarkan Perizinan
      </button>
    </>
  );
};

export default TerbitkanPerizinanButtonDashboardVerifikator;

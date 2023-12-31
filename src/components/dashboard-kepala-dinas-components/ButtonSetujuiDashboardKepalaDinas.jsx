import React, { useState } from "react";
import Swal from "sweetalert2";
import LoadingPopup from "../popup-components/LoadingPopup";
import { userService } from "../../services";
import { getToken } from "../../services/storage.service";
import { useNavigate } from "react-router-dom";

const ButtonSetujuiDashboardKepalaDinas = ({ idSurat }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const kepalaDinasToken = getToken();

  const handleAccValidasiDokumen = async () => {
    try {
      setLoading(true);
      const response = await userService.accValidasiDokumen(idSurat, kepalaDinasToken);
      console.log("Kepala Dinas ACC", response);
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
      title: "PERIZINAN TELAH TERBIT",
      text: "Selamat Surat Perizinan telah terbit",
      confirmButtonText: "Lanjut",
    }).then(() => {
      navigate("/validasi-dokumen-kepala");
      close();
    });
  };

  return (
    <>
      <LoadingPopup loading={loading} />
      <button className={`py-2 px-4 w-full rounded-lg text-base font-semibold text-white bg-brand-500`} onClick={() => handleAccValidasiDokumen()}>
        Terbitkan Perizinan
      </button>
    </>
  );
  {
    /* </Link> */
  }
};

export default ButtonSetujuiDashboardKepalaDinas;

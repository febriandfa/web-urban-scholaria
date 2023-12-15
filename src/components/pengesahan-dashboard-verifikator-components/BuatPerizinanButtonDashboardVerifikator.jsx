import React, { useState } from "react";
import Swal from "sweetalert2";
import { alertNextVerifikator } from "../../assets";
import { Link } from "react-router-dom";
import { userService } from "../../services";
import Popup from "reactjs-popup";
import InputTolakHasilSurveyPopup from "../popup-components/InputTolakHasilSurveyPopup";

const BuatPerizinanButtonDashboardVerifikator = ({ verified, idSurat }) => {
  // const [formData, setFormData] = useState({
  //   alasan_ditolak: "",
  // });

  // const handleDeclineVerifikasiHasilSurvey = async () => {
  //   let form = new FormData();
  //   form.append("alasan_ditolak", formData.alasan_ditolak);
  //   try {
  //     const response = await userService.declineVerifikasiHasilSurveyVerifikator(idSurat, form);
  //     console.log("Tertolak Hasil Survey", response);
  //     triggerAlertDecline();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const handleInputChange = ({ name, value }) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleOnClick = () => {
    localStorage.setItem("IdSuratDiajukan", idSurat);
  };

  // const triggerAlertDecline = () => {
  //   Swal.fire({
  //     imageUrl: alertNextVerifikator,
  //     imageHeight: 131,
  //     imageWidth: 131,
  //     title: "PENOLAKAN TERKIRIM",
  //     text: "Penolakan permohonan telah dikembalikan ke pemohon",
  //     confirmButtonText: "Lanjut",
  //   });
  // };

  return (
    <div>
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
        {(close) => <InputTolakHasilSurveyPopup close={close} link="/pengesahan-perizinan-verifikator" />}
      </Popup>
      <Link to="/terbitkan-perizinan-verifikator" onClick={() => handleOnClick()}>
        <button className={`py-2 px-4 w-full rounded-lg text-base font-semibold ${verified ? "text-white bg-brand-500" : "text-neutral-500 bg-neutral-100"}`} disabled={!verified}>
          Buat Perizinan
        </button>
      </Link>
    </div>
  );
};

export default BuatPerizinanButtonDashboardVerifikator;

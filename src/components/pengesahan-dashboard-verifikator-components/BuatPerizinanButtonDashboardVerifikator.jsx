import React, { useState } from "react";
import Swal from "sweetalert2";
import { alertNextVerifikator } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { userService } from "../../services";
import Popup from "reactjs-popup";
import InputTolakHasilSurveyPopup from "../popup-components/InputTolakHasilSurveyPopup";
import { getIdSuratDiajukan, getToken } from "../../services/storage.service";
import LoadingPopup from "../popup-components/LoadingPopup";

const BuatPerizinanButtonDashboardVerifikator = ({ verified, idSurat }) => {
  // const idSurat = getIdSuratDiajukan();
  const verifikatorToken = getToken();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAccVerifikasiHasilSurvey = async () => {
    try {
      setLoading(true);
      const response = await userService.accVerifikasiHasilSurveyVerifikator(idSurat, verifikatorToken);
      console.log("Hasil Survey ACC", response);
      setLoading(false);
      triggerAlert();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const triggerAlert = () => {
    // e.preventDefault();
    Swal.fire({
      // imageUrl: alertPenerbitan,
      // imageHeight: 131,
      // imageWidth: 131,
      icon: "success",
      title: "PERIZINAN TELAH TERBIT",
      text: "Selamat Surat Perizinan telah terbit dan terkirim ke pemohon",
      confirmButtonText: "Lanjut",
    }).then(() => {
      navigate("/pengesahan-perizinan-verifikator");
      close();
    });
  };

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

  // const handleOnClick = () => {
  //   localStorage.setItem("IdSuratDiajukan", idSurat);
  // };

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
        {(close) => <InputTolakHasilSurveyPopup close={close} />}
      </Popup>
      {/* <Link to="/terbitkan-perizinan-verifikator" onClick={() => handleAccVerifikasiHasilSurvey()}> */}
      <button className={`py-2 px-4 w-full rounded-lg text-base font-semibold ${verified ? "text-white bg-brand-500" : "text-neutral-500 bg-neutral-100"}`} disabled={!verified} onClick={() => handleAccVerifikasiHasilSurvey()}>
        Buat Perizinan
      </button>
      {/* </Link> */}
    </div>
  );
};

export default BuatPerizinanButtonDashboardVerifikator;

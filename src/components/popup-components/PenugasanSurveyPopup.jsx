import React, { useState } from "react";
import Swal from "sweetalert2";
import { alertNextSurveyor } from "../../assets";
import InputDateGeneral from "../general-components/InputDateGeneral";
import InputTextAreaGeneral from "../general-components/InputTextAreaGeneral";
import InputTextGeneral from "../general-components/InputTextGeneral";
import DragDropUploadGeneral from "../general-components/DragDropUploadGenera;";
import InputNamaFilterDashboardAdministrator from "../dashboard-administrator-components/InputNamaFilterDashboardAdministrator";
import { userService } from "../../services";
import { useNavigate } from "react-router-dom";
import LoadingPopup from "./LoadingPopup";

const PenugasanSurveyPopup = ({ close, idSurat }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleAccVerifikasiVerifikator = async () => {
    try {
      const response = await userService.accVerifikasiVerifikator(idSurat);
      console.log("Sudah ACC Next Jadwal Survey", response);
    } catch (error) {
      console.error(error);
    }
  };

  const [formData, setFormData] = useState({
    user_id: "",
    jadwal_survey: "",
  });

  const handlePenugasanSurvey = async () => {
    let form = new FormData();
    form.append("user_id", formData.user_id);
    form.append("jadwal_survey", formData.jadwal_survey);
    try {
      setLoading(true);
      handleAccVerifikasiVerifikator();
      const response = await userService.postJadwalSurvey(idSurat, form);
      console.log("Penugasan Survey Done", response);
      setLoading(false);
      triggerAlert();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleInputChange = ({ name, value }) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const triggerAlert = () => {
    // e.preventDefault();
    Swal.fire({
      imageUrl: alertNextSurveyor,
      imageHeight: 131,
      imageWidth: 131,
      title: "TUGAS BERHASIL TERKIRIM",
      text: "Tugas sudah terkirim ke surveyor, pantau hasil survey di menu pengesahan",
      confirmButtonText: "Lanjut",
    }).then(() => {
      navigate("/verifikasi-dokumen-verifikator");
      close();
    });
  };

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleDrop = (files) => {
    setUploadedFiles(files);
    // console.log(files);
  };

  return (
    <div className="p-4 w-[99%] rounded-xl bg-white">
      <LoadingPopup loading={loading} />
      <div className="h-[30rem] overflow-y-auto p-2">
        <h1 className="text-2xl font-semibold text-center text-brand-500">Penugasan Survey</h1>
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 mt-2 mb-4" />
        <form action="">
          <div className="grid grid-cols-2 gap-8">
            <div>
              {/* <InputTextGeneral name="nama-tugas" label="Nama Tugas" placeholder="Beri nama tugas survey..." /> */}
              {/* <InputNamaFilterDashboardAdministrator /> */}
              <InputTextGeneral name="user_id" label="ID Surveyor" placeholder="Beri nama tugas survey..." value={formData.user_id} onChange={handleInputChange} />
              {/* <InputTextAreaGeneral name="deskripsi" id="deskripsi" label="Deskripsi Tugas" placeholder="Jelaskan detail tugas..." /> */}
              <InputDateGeneral name="jadwal_survey" label="Tanggal Penugasan" value={formData.jadwal_survey} onChange={handleInputChange} required />
              {/* <InputDateGeneral name="tanggal-tenggat" label="Tanggal Tenggat" /> */}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-center">Upload Surat Tugas</h2>
              <a className="text-xs text-brand-500 text-center block mb-2" href="#">
                Unduh Template Surat Tugas
              </a>
              <DragDropUploadGeneral onDrop={handleDrop} uploadedFiles={uploadedFiles} />
            </div>
          </div>
          <button className="py-2 px-4 bg-brand-500 w-full rounded-lg text-base font-semibold text-white" type="button" onClick={() => handlePenugasanSurvey()}>
            Kirim Penugasan
          </button>
        </form>
      </div>
    </div>
  );
};

export default PenugasanSurveyPopup;

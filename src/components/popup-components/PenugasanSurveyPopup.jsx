import React, { useEffect, useState } from "react";
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
import InputSelectGeneral from "../general-components/InputSelectGeneral";

const PenugasanSurveyPopup = ({ close, idSurat }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [surveyor, setSurveyor] = useState([]);
  const [idSurveyor, setIdSurveyor] = useState();

  const handleAccVerifikasiVerifikator = async () => {
    try {
      setLoading(true);
      const response = await userService.accVerifikasiVerifikator(idSurat);
      console.log("Sudah ACC Next Jadwal Survey", response);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const [formData, setFormData] = useState({
    user_id: "",
    nama_survey: "",
    deskripsi_survey: "",
    jadwal_survey: "",
    tenggat_survey: "",
    dokumen_surat_tugas: null,
  });

  const handlePenugasanSurvey = async () => {
    let form = new FormData();
    form.append("user_id", formData.user_id);
    form.append("nama_survey", formData.nama_survey);
    form.append("deskripsi_survey", formData.deskripsi_survey);
    form.append("jadwal_survey", formData.jadwal_survey);
    form.append("tenggat_survey", formData.tenggat_survey);
    form.append("dokumen_surat_tugas", formData.dokumen_surat_tugas);
    console.log("user_id", formData);
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

  const handleChange = (e) => {
    const selectedUserId = e.target.value;
    setFormData({ ...formData, user_id: selectedUserId });
  };

  const getUserSurveyorData = async () => {
    try {
      setLoading(true);
      const response = await userService.getUserSurveyor();
      console.log("Surveyornya", response);
      setSurveyor(response?.data?.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserSurveyorData();
    console.log("Set Surveyor Hasilnya", surveyor);
  }, []);

  const triggerAlert = () => {
    // e.preventDefault();
    Swal.fire({
      // imageUrl: alertNextSurveyor,
      // imageHeight: 131,
      // imageWidth: 131,
      icon: "success",
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
    setFormData((prevData) => ({
      ...prevData,
      dokumen_surat_tugas: files[0],
    }));
  };

  const onChange = (selectedUserId) => {
    console.log("Selected User ID:", selectedUserId);
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
              <InputTextGeneral name="nama_survey" label="Nama Tugas" placeholder="Beri nama tugas survey..." value={formData.nama_survey} onChange={handleInputChange} />
              {/* <InputNamaFilterDashboardAdministrator /> */}
              {/* <InputTextGeneral name="user_id" label="ID Surveyor" placeholder="Beri nama tugas survey..." value={formData.user_id} onChange={handleInputChange} /> */}
              {/* <InputSelectGeneral name="user_id" label="Surveyor" placeholder="Pilih Surveyor..." value={formData.user_id} onChange={handleInputChange} option={surveyor} required /> */}
              <div className="mb-6">
                <label className="block mb-1 font-semibold text-sm text-brand-500 capitalize" htmlFor="user_id">
                  Surveyor
                  <span className="text-danger-500">*</span>
                </label>
                <div className="relative">
                  <select
                    className={`w-full px-3 h-9 rounded-lg text-sm border border-neutral-400 capitalize bg-white`}
                    id="user_id"
                    type="text"
                    placeholder="Pilih Surveyor..."
                    value={formData.user_id}
                    required
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="">Pilih Surveyor</option>
                    {surveyor?.map((surveyorItem, index) => (
                      <option className="capitalize" key={index} value={surveyorItem?.id}>
                        {surveyorItem?.nama_lengkap}
                      </option>
                    ))}
                  </select>
                  <svg className="absolute w-5 h-5 top-2 right-2.5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
              <InputTextAreaGeneral name="deskripsi_survey" id="deskripsi_survey" label="Deskripsi Tugas" placeholder="Jelaskan detail tugas..." value={formData.deskripsi_survey} onChange={handleInputChange} />
              <InputDateGeneral name="jadwal_survey" label="Tanggal Penugasan" value={formData.jadwal_survey} onChange={handleInputChange} required />
              <InputDateGeneral name="tenggat_survey" label="Tanggal Tenggat" value={formData.tenggat_survey} onChange={handleInputChange} />
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

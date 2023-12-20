import React, { useEffect, useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import LinkBackGeneral from "../../components/general-components/LinkBackGeneral";
import InputTextGeneral from "../../components/general-components/InputTextGeneral";
import InputTextAreaGeneral from "../../components/general-components/InputTextAreaGeneral";
import InputFileGeneralCoba from "../../components/general-components/InputFileGeneralCoba";
import { userService } from "../../services";
import { Link, useNavigate } from "react-router-dom";
import { getKategoriPerizinan, getSuratJenisID } from "../../services/storage.service";
import LoadingPopup from "../../components/popup-components/LoadingPopup";
import Swal from "sweetalert2";

const EditPerizinanAdminUtama = () => {
  const idSuratJenis = getSuratJenisID();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isUpdateAlur, setIsUpdateAlur] = useState(false);
  const [isUpdateSLA, setIsUpdateSLA] = useState(false);
  const [syaratLength, setSyaratLength] = useState();
  const [formData, setFormData] = useState({
    nama: "",
    deskripsi: "",
    gambar_alur_permohonan: null,
    gambar_service_level_aggreement: null,
    _method: "",
  });

  const handleFormUpdate = async () => {
    let form = new FormData();
    form.append("nama", formData.nama);
    form.append("deskripsi", formData.deskripsi);
    if (isUpdateAlur) {
      form.append("gambar_alur_permohonan", formData.gambar_alur_permohonan);
    }
    if (isUpdateSLA) {
      form.append("gambar_service_level_aggreement", formData.gambar_service_level_aggreement);
    }
    form.append("_method", "PATCH");
    // console.log(formData);
    try {
      setLoading(true);
      const response = await userService.updatePerizinanBaru(idSuratJenis, form);
      setIsUpdateAlur(false);
      setIsUpdateSLA(false);
      //   localStorage.setItem("SuratJenisID", response?.data?.data?.id);
      console.log("Perizinan Baru Berhasil Diupdate", response);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setIsUpdateAlur(false);
      setIsUpdateSLA(false);
      setLoading(false);
    }
  };

  const getPerizinanData = async () => {
    try {
      setLoading(true);
      const response = await userService.getSuratJenisDetailByID(idSuratJenis);
      console.log("Hasil Get Jenis By ID", response);
      setFormData({
        nama: response?.data?.data?.nama,
        deskripsi: response?.data?.data?.deskripsi,
        gambar_alur_permohonan: response?.data?.data?.gambar_alur_permohonan,
        gambar_service_level_aggreement: response?.data?.data?.gambar_service_level_aggreement,
      });
      setSyaratLength(response?.data?.data?.surat_syarats?.length);
      console.log("Hasil Length", response?.data?.data?.surat_syarats?.length);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleDeletePerizinan = async () => {
    try {
      const response = await userService.deletePerizinanBaru(idSuratJenis);
      console.log("Berhasil Hapus", response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPerizinanData();
  }, []);

  const handleInputChange = ({ name, value }) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const triggerAlert = () => {
    Swal.fire({
      title: "YAKIN MENGHAPUS PERIZINAN?",
      text: "Apakah anda yakin menghapus perizinan?",
      icon: "question",
      showDenyButton: true,
      confirmButtonText: "Ya",
      confirmButtonColor: "#1F8428",
      denyButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeletePerizinan();
        navigate("/informasi-perizinan-utama");
      } else if (result.isDenied) {
        close;
      }
    });
  };

  const kategoriPerizinan = getKategoriPerizinan();

  return (
    <MainPageLayout>
      <LoadingPopup loading={loading} />
      <div className="h-40 w-full bg-[url('./assets/images/background-pengajuan-header.png')] bg-cover bg-center rounded-lg mb-10 relative">
        <div className="absolute top-3 left-2">
          <LinkBackGeneral white />
        </div>
        <h1 className="font-semibold text-3xl text-white text-center flex flex-col justify-center items-center h-full">
          Edit {formData.nama} {kategoriPerizinan}
        </h1>
      </div>
      <form className="w-4/5 mx-auto">
        <InputTextGeneral name="nama" label="Nama Perizinan" placeholder="Masukkan Nama Perizinan..." value={formData.nama} onChange={handleInputChange} required />
        <InputTextAreaGeneral name="deskripsi" label="Deskripsi Perizinan" placeholder="Masukkan Deskripsi Perizinan..." value={formData.deskripsi} onChange={handleInputChange} required />
        <div className="mb-6">
          <label className="block font-semibold text-sm text-brand-500 capitalize" htmlFor="gambar_alur_permohonan">
            Alur Permohonan
            <span className={`text-danger-500`}>*</span>
          </label>
          <label className="text-xs font-normal text-neutral-500 mb-1" htmlFor="gambar_alur_permohonan">
            Format: .png, .jpg, .jpeg (Max 5 MB)
          </label>
          <label className="flex items-center cursor-pointer rounded-lg w-full h-9 px-3 border border-neutral-400 bg-white" htmlFor="gambar_alur_permohonan">
            <span className="flex items-center border-r-2 border-neutral-400 pr-4 w-fit h-full text-sm">Pilih File</span>
            <span className="inline-block text-sm text-center mx-auto">
              {formData.gambar_alur_permohonan instanceof File
                ? formData.gambar_alur_permohonan.name
                : formData.gambar_alur_permohonan
                ? formData.gambar_alur_permohonan.replace(/^.*?\/gambar-alur-permohonan\//, "")
                : "Belum Ada File Yang Dipilih"}
            </span>
            <input
              className="hidden"
              id="gambar_alur_permohonan"
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={(e) => {
                handleInputChange({ name: "gambar_alur_permohonan", value: e.target.files[0] }), setIsUpdateAlur(true);
              }}
              required
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block font-semibold text-sm text-brand-500 capitalize" htmlFor="gambar_service_level_aggreement">
            Alur Permohonan
            <span className={`text-danger-500`}>*</span>
          </label>
          <label className="text-xs font-normal text-neutral-500 mb-1" htmlFor="gambar_service_level_aggreement">
            Format: .png, .jpg, .jpeg (Max 5 MB)
          </label>
          <label className="flex items-center cursor-pointer rounded-lg w-full h-9 px-3 border border-neutral-400 bg-white" htmlFor="gambar_service_level_aggreement">
            <span className="flex items-center border-r-2 border-neutral-400 pr-4 w-fit h-full text-sm">Pilih File</span>
            <span className="inline-block text-sm text-center mx-auto">
              {formData.gambar_service_level_aggreement instanceof File
                ? formData.gambar_service_level_aggreement.name
                : formData.gambar_service_level_aggreement
                ? formData.gambar_service_level_aggreement.replace(/^.*?\/gambar-service-level-aggreement\//, "")
                : "Belum Ada File Yang Dipilih"}
            </span>
            <input
              className="hidden"
              id="gambar_service_level_aggreement"
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={(e) => {
                handleInputChange({ name: "gambar_service_level_aggreement", value: e.target.files[0] }), setIsUpdateSLA(true);
              }}
              required
            />
          </label>
        </div>
        <Link className={`block text-center py-2 px-4 mt-16 w-full rounded-lg text-base font-semibold text-white bg-brand-500`} to="/tambah-syarat-utama" onClick={() => handleFormUpdate()}>
          Edit Persyaratan
        </Link>
        <button
          className={`block text-center py-2 px-4 mt-4 w-full rounded-lg text-base font-semibold ${syaratLength === 0 ? "text-white bg-danger-500" : "bg-neutral-200 text-neutral-400"}`}
          type="button"
          onClick={triggerAlert}
          disabled={syaratLength !== 0}
        >
          Hapus Perizinan
        </button>
      </form>
    </MainPageLayout>
  );
};

export default EditPerizinanAdminUtama;

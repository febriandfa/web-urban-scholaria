import React, { useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import LinkBackGeneral from "../../components/general-components/LinkBackGeneral";
import InputTextGeneral from "../../components/general-components/InputTextGeneral";
import InputTextAreaGeneral from "../../components/general-components/InputTextAreaGeneral";
import InputFileGeneral from "../../components/general-components/InputFileGeneral";
import InputFileGeneralCoba from "../../components/general-components/InputFileGeneralCoba";
import { userService } from "../../services";
import { Link } from "react-router-dom";

const TambahPerizinanAdminUtama = () => {
  const [formData, setFormData] = useState({
    nama: "",
    deskripsi: "",
    gambar_alur_permohonan: null,
    gambar_service_level_aggreement: null,
  });

  const handleFormSubmit = async () => {
    let form = new FormData();
    form.append("nama", formData.nama);
    form.append("deskripsi", formData.deskripsi);
    form.append("gambar_alur_permohonan", formData.gambar_alur_permohonan);
    form.append("gambar_service_level_aggreement", formData.gambar_service_level_aggreement);
    try {
      const response = await userService.postPerizinanBaru(form);
      localStorage.setItem("SuratJenisID", response?.data?.data?.id);
      console.log("Perizinan Baru Berhasil Ditambahkan", response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = ({ name, value }) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <MainPageLayout>
      <div className="h-40 w-full bg-[url('./assets/images/background-pengajuan-header.png')] bg-cover bg-center rounded-lg mb-10 relative">
        <div className="absolute top-3 left-2">
          <LinkBackGeneral white />
        </div>
        <h1 className="font-semibold text-3xl text-white text-center flex flex-col justify-center items-center h-full">Tambah Perizinan</h1>
      </div>
      <form className="w-4/5 mx-auto">
        <InputTextGeneral name="nama" label="Nama Perizinan" placeholder="Masukkan Nama Perizinan..." value={formData.nama} onChange={handleInputChange} required />
        <InputTextAreaGeneral name="deskripsi" label="Deskripsi Perizinan" placeholder="Masukkan Deskripsi Perizinan..." value={formData.deskripsi} onChange={handleInputChange} required />
        <InputFileGeneralCoba name="gambar_alur_permohonan" label="Alur Perizinan" tipeFile=".png, .jpg, .jpeg" ukuranFile={5} selectedFile={formData.gambar_alur_permohonan} onFileInputChange={handleInputChange} required />
        <InputFileGeneralCoba
          name="gambar_service_level_aggreement"
          label="Service Level Agreement"
          tipeFile=".png, .jpg, .jpeg"
          ukuranFile={5}
          selectedFile={formData.gambar_service_level_aggreement}
          onFileInputChange={handleInputChange}
          required
        />
        <Link className={`block text-center py-2 px-4 mt-16 w-full rounded-lg text-base font-semibold text-white bg-brand-500`} to="/tambah-syarat-utama" onClick={() => handleFormSubmit()}>
          Tambah Persyaratan
        </Link>
      </form>
    </MainPageLayout>
  );
};

export default TambahPerizinanAdminUtama;

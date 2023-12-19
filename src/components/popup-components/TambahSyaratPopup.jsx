import React, { useState } from "react";
import InputTextGeneral from "../general-components/InputTextGeneral";
import { userService } from "../../services";
import { getSuratJenisID } from "../../services/storage.service";
import Swal from "sweetalert2";

const TambahSyaratPopup = ({ idSuratJenis, close }) => {
  //   const getIdSuratJenis = getSuratJenisID();
  const [formData, setFormData] = useState({
    surat_jenis_id: idSuratJenis,
    nama: "",
  });

  const handleTambahSyarat = async () => {
    let form = new FormData();
    form.append("surat_jenis_id", formData.surat_jenis_id);
    form.append("nama", formData.nama);
    try {
      const response = await userService.postSyaratPerizinanBaru(form);
      console.log("Syarat Tertambah Lurr", response);
      triggerAlert();
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

  const triggerAlert = () => {
    Swal.fire({
      icon: "success",
      title: "BERHASIL DITAMBAHKAN",
      text: "Syarat perizinan berhasil ditambahkan.",
      confirmButtonText: "Lanjut",
    }).then(() => {
      close();
      window.location.reload();
    });
  };

  return (
    <div className="p-4 bg-white rounded-xl w-[40rem]">
      <h1 className="text-2xl font-semibold text-center text-brand-500">Tambah Persyaratan</h1>
      <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
      <InputTextGeneral name="nama" label="Nama Persyaratan" placeholder="Masukkan Nama Persyaratan..." value={formData.nama} onChange={handleInputChange} required />
      <button className={`py-2 px-4 w-full rounded-lg text-base font-semibold text-white bg-brand-500`} onClick={() => handleTambahSyarat()}>
        Tambah
      </button>
    </div>
  );
};

export default TambahSyaratPopup;

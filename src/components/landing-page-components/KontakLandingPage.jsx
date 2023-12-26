import React, { useState } from "react";
import InformasiKontakLandingPage from "./InformasiKontakLandingPage";
import InputTextGeneral from "../general-components/InputTextGeneral";
import TitleLandingPage from "./TitleLandingPage";
import InputTextAreaGeneral from "../general-components/InputTextAreaGeneral";
import { userService } from "../../services";
import LoadingPopup from "../popup-components/LoadingPopup";
import Swal from "sweetalert2";

const KontakLandingPage = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    email: "",
    pesan: "",
  });

  const handleKontakSubmit = async () => {
    try {
      setLoading(true);
      const response = await userService.postKontak(formData);
      console.log("Send Kontak", response);
      triggerAlert();
      setLoading(false);
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
    Swal.fire({
      icon: "success",
      title: "EMAIL TERKIRIM",
      text: "Terima kasih telah menghubungi kami",
      confirmButtonText: "Lanjut",
    }).then(() => {
      close();
    });
  };

  return (
    <section className="py-20 min-h-screen px-20">
      <LoadingPopup loading={loading} />
      <TitleLandingPage subtitle="Urban Scholaria" title="Kontak" align="text-center" />
      <div className="grid grid-cols-2 gap-32">
        <div>
          <h2 className="text-3xl font-semibold">Hubungi Kami</h2>
          <p className="w-1/2 mb-12 text-neutral-800">Kami disini untuk Anda! Adakah yang bisa kami bantu?</p>
          <form>
            <InputTextGeneral name="nama_lengkap" label="Nama" placeholder="Masukkan Nama..." value={formData.nama_lengkap} onChange={handleInputChange} />
            <InputTextGeneral name="email" label="Email" placeholder="Masukkan Email..." value={formData.email} onChange={handleInputChange} />
            <InputTextAreaGeneral name="pesan" label="Pesan" placeholder="Masukan Pesan..." value={formData.pesan} onChange={handleInputChange} />
            <button className="py-2 px-4 bg-brand-500 w-full rounded-lg text-base font-semibold text-white" type="button" onClick={() => handleKontakSubmit()}>
              Kirim
            </button>
          </form>
        </div>
        <InformasiKontakLandingPage />
      </div>
    </section>
  );
};

export default KontakLandingPage;

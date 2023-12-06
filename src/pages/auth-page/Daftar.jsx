import React, { useState } from "react";
import axios from "axios";
import { bgAuth } from "../../assets";
import AuthPageLayout from "../../layouts/AuthPageLayout";
import InputTextGeneral from "../../components/general-components/InputTextGeneral";
import InputPasswordAuthPage from "../../components/auth-page-components/InputPasswordAuthPage";
import { Link } from "react-router-dom";

const Daftar = () => {
  const [formData, setFormData] = useState({
    nama: "",
    nik: "",
    email: "",
    kataSandi: "",
    konfirmasiKataSandi: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://urbanscholaria.my.id/api/register", formData);
      console.log("Successful response:", response.data);
      // Lakukan sesuatu dengan respons yang diterima, misalnya, tampilkan pesan sukses atau navigasi ke halaman lain
    } catch (error) {
      console.error("Error:", error);
      // Tangani kesalahan dengan menampilkan pesan kesalahan kepada pengguna atau melakukan tindakan lain yang sesuai
    }
  };

  const handleInputChange = ({ name, value }) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  return (
    <AuthPageLayout>
      <div className="grid grid-cols-2 w-full h-full pt-10">
        <div>
          <img className="w-1/2 h-full pt-20 object-cover fixed top-0 inset-x-0" src={bgAuth} alt="" />
        </div>
        <section className="w-full h-full">
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-semibold text-5xl text-brand-500 text-center w-4/5 mb-8">Mari Bergabung di Urban Scholaria!</h2>
            <form className="w-[28rem]" action="#" method="post" onSubmit={handleFormSubmit}>
              <InputTextGeneral name="nama" label="Nama" placeholder="Masukkan Nama..." value={formData.nama} onChange={handleInputChange} required />
              <InputTextGeneral name="nik" label="NIK (Nomor Induk Kependudukan)" placeholder="Masukkan NIK..." value={formData.nik} onChange={handleInputChange} required />
              <InputTextGeneral name="email" label="email" placeholder="Masukkan Email..." value={formData.email} onChange={handleInputChange} required />
              <InputTextGeneral name="kataSandi" label="Kata Sandi" placeholder="Masukkan Kata Sandi..." value={formData.kataSandi} onChange={handleInputChange} required />
              <InputTextGeneral name="konfirmasiKataSandi" label="Konfirmasi Kata Sandi" placeholder="Masukkan Kata Sandi Lagi..." value={formData.konfirmasiKataSandi} onChange={handleInputChange} required />

              {/* <InputPasswordAuthPage name="kata-sandi" label="Kata Sandi" placeholder="Masukkan Kata Sandi..." value={formData.kataSandi} onChange={handleInputChange} required /> */}
              {/* <InputPasswordAuthPage name="konfirmasi-kata-sandi" label="Konfirmasi Kata Sandi" placeholder="Masukkan Kata Sandi Lagi..." value={formData.konfirmasiKataSandi} onChange={handleInputChange} required /> */}
              <Link to="/masuk">
                <button className="py-2 px-4 bg-brand-500 w-full rounded-lg text-base font-semibold text-white" type="submit">
                  Daftar Sekarang
                </button>
              </Link>
              <p className="inline-block mt-1 font-semibold text-xs">Sudah memiliki akun? </p>
              <button className="inline-block mb-9 font-semibold text-xs text-brand-500" type="submit">
                Masuk
              </button>
              <p className="text-danger-500 font-semibold text-sm text-center">Kata Sandi Tidak Sama</p>
              <div>
                <p className="mt-3 text-xs font-normal text-neutral-600">
                  Dengan mendaftarkan akun Urban Scholaria, saya menyetujui{" "}
                  <a className="text-brand-500 font-semibold" href="#">
                    Syarat & Ketentuan
                  </a>{" "}
                  serta{" "}
                  <a className="text-brand-500 font-semibold" href="#">
                    Kebijakan Privasi
                  </a>{" "}
                  yang berlaku.
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </AuthPageLayout>
  );
};

export default Daftar;

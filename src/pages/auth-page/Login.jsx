import React, { useState, useEffect } from "react";
import AuthPageLayout from "../../layouts/AuthPageLayout";
import { bgAuth } from "../../assets";
import { Link, Navigate, useNavigate } from "react-router-dom";
import InputTextGeneral from "../../components/general-components/InputTextGeneral";
import InputPasswordAuthPage from "../../components/auth-page-components/InputPasswordAuthPage";
import axios from "axios";
import { userService } from "../../services";

const Login = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userService.postLogin(formData);
      localStorage.setItem("TOKEN", response.data.access_token);
      localStorage.setItem("UserDetail", response?.data?.data.role.nama);
      console.log("Login berhasil:", response.data.data);
      if (response?.data?.data.role.nama === "Pemohon") {
        navigate("/dashboard");
      } else {
        navigate("/dashboard-administrator");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleInputChange = ({ name, value }) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <AuthPageLayout>
      <div className="grid grid-cols-2 w-full h-full pt-10">
        <div>
          <img className="w-1/2 h-full pt-20 object-cover fixed top-0 inset-x-0" src={bgAuth} alt="" />
        </div>
        <section className="h-full w-full">
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-semibold text-5xl text-brand-500 text-center w-4/5 mb-20">Segera Kembali ke Urban Scolaria!</h2>
            <form className="w-[28rem]" onSubmit={handleFormSubmit}>
              <InputTextGeneral name="email" label="Email" placeholder="Masukkan Email..." value={formData.email} onChange={handleInputChange} required />
              <InputPasswordAuthPage name="password" label="Kata Sandi" placeholder="Masukkan Kata Sandi..." value={formData.password} onChange={handleInputChange} required />
              <Link to="/lupa-password" className="block mb-6 font-semibold text-xs text-brand-500 text-right">
                Lupa Kata Sandi?
              </Link>
              <button className="py-2 px-4 bg-brand-500 w-full rounded-lg text-base font-semibold text-white" type="submit">
                Masuk
              </button>
              {/* {role === "pemohon" ? (
                <Link to="/dashboard">
                  <button className="py-2 px-4 bg-brand-500 w-full rounded-lg text-base font-semibold text-white" type="submit">
                    Masuk
                  </button>
                </Link>
              ) : (
                <Link to="/dashboard-administrator">
                  <button className="py-2 px-4 bg-brand-500 w-full rounded-lg text-base font-semibold text-white" type="submit">
                    Masuk
                  </button>
                </Link>
              )} */}
              <p className="inline-block mt-1 font-semibold text-xs">Belum memiliki akun? </p>
              <Link to="/daftar" type="submit" className="inline-block mb-9 font-semibold text-xs text-brand-500">
                Daftar Sekarang
              </Link>
              <p className="text-danger-500 font-semibold text-sm text-center">Kata Sandi Salah</p>
              <div>
                <p className="mt-3 text-xs font-normal text-neutral-600">
                  Dengan masuk Urban Scholaria, saya menyetujui{" "}
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

export default Login;

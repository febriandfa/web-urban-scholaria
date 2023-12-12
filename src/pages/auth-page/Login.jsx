import React, { useEffect, useState } from "react";
import AuthPageLayout from "../../layouts/AuthPageLayout";
import { bgAuth } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import InputTextGeneral from "../../components/general-components/InputTextGeneral";
import InputPasswordAuthPage from "../../components/auth-page-components/InputPasswordAuthPage";
import { userService } from "../../services";
import LoadingPopup from "../../components/popup-components/LoadingPopup";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [akunError, setAkunError] = useState(false);
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await userService.postLogin(formData);
      localStorage.setItem("TOKEN", response.data.access_token);
      localStorage.setItem("UserDetail", response?.data?.data.role.nama);
      console.log("Login berhasil:", response.data.data);
      setLoading(false);
      if (response?.data?.data.role.nama === "Pemohon") {
        navigate("/dashboard");
      } else {
        navigate("/dashboard-administrator");
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoading(false);
      setAkunError(true);
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
      <LoadingPopup loading={loading} />
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
              <p className="inline-block mt-1 font-semibold text-xs">Belum memiliki akun? </p>
              <Link to="/daftar" type="submit" className="inline-block font-semibold text-xs text-brand-500">
                Daftar Sekarang
              </Link>
              {akunError && <p className="text-danger-500 font-semibold text-base text-center my-4">Akun Tidak Terdaftar</p>}
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

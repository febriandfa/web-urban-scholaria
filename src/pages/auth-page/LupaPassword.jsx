import React, { useState } from "react";
import AuthPageLayout from "../../layouts/AuthPageLayout";
import { bgAuth, iconForgetPass } from "../../assets";
import InputTextGeneral from "../../components/general-components/InputTextGeneral";
import { userService } from "../../services";
import LoadingPopup from "../../components/popup-components/LoadingPopup";
import { useNavigate } from "react-router-dom";
import LinkBackGeneral from "../../components/general-components/LinkBackGeneral";
import Swal from "sweetalert2";

const LupaPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleSendOtp = async () => {
    try {
      setLoading(true);
      const response = await userService.postSendOTP(formData);
      console.log("Send OTP", response);
      setLoading(false);
      // navigate("/verifikasi-otp");
      localStorage.setItem("EmailForOTP", formData.email);
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

  const isEmailEmpty = formData.email.trim() === "";

  const triggerAlert = () => {
    Swal.fire({
      icon: "success",
      title: "KODE OTP TELAH TERKIRIM",
      text: "Silahkan periksa email anda untuk melihat kode OTP.",
      confirmButtonText: "Lanjut",
    }).then(() => {
      navigate("/verifikasi-otp");
      close();
    });
  };

  return (
    <AuthPageLayout>
      <LoadingPopup loading={loading} />
      <div className="grid grid-cols-2 w-full h-full pt-10">
        <div>
          <img className="w-1/2 h-full pt-20 object-cover fixed top-0 inset-x-0" src={bgAuth} alt="" />
        </div>
        <section className="w-full h-full">
          <div className="flex justify-end mb-6">
            <LinkBackGeneral />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="w-44 h-44 mb-20" src={iconForgetPass} alt="icon lupa password" />
            <p className="inline-block w-[28rem] mb-16 text-xs text-neutral-600">
              Hai Scholars, Silahkan masukkan email yang kamu gunakan saat mendaftar. Link reset kata sandi akan dikirimkan melalui Email. <br />
              <br />
              Jangan bagikan Link kamu kepada siapapun!
            </p>
            <form className="w-[28rem]">
              <InputTextGeneral name="email" label="Email" placeholder="Masukkan Emailnya..." value={formData.email} onChange={handleInputChange} />
              <button className={`py-2 px-4 w-full rounded-lg text-base font-semibold ${isEmailEmpty ? "bg-neutral-200 text-neutral-400" : "text-white bg-brand-500"}`} type="button" disabled={isEmailEmpty} onClick={() => handleSendOtp()}>
                Kirim Link Reset
              </button>
            </form>
          </div>
        </section>
      </div>
    </AuthPageLayout>
  );
};

export default LupaPassword;

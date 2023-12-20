import React, { useState } from "react";
import AuthPageLayout from "../../layouts/AuthPageLayout";
import { bgAuth, iconResetPass } from "../../assets";
import InputPasswordAuthPage from "../../components/auth-page-components/InputPasswordAuthPage";
import { userService } from "../../services";
import LoadingPopup from "../../components/popup-components/LoadingPopup";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    password_confirmation: "",
  });

  const handleSubmitNewPassword = async () => {
    try {
      setLoading(true);
      const response = await userService.postResetPassword(formData);
      console.log("New Password", response);
      setPasswordError(false);
      setLoading(false);
      // navigate("/masuk");
      triggerAlert();
    } catch (error) {
      console.error(error);
      setPasswordError(true);
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
      title: "PASSWORD BERHASIL DI RESET",
      text: "Silahkan masuk kembali dengan password baru.",
      confirmButtonText: "Lanjut",
    }).then(() => {
      navigate("/masuk");
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
        <section>
          <div className="flex flex-col items-center justify-center">
            <img className="w-44 h-44 mb-20" src={iconResetPass} alt="icon lupa password" />
            <p className="inline-block w-[28rem] mb-16 text-xs text-neutral-600">Hai Scholars, Silahkan masukkan kata sandi baru untuk akunmu. Jaga kerahasiaan password dan jangan bagikan kepada siapapun.</p>
            <form className="w-[28rem]">
              <InputPasswordAuthPage name="password" label="Kata Sandi" placeholder="Masukkan Kata Sandi..." value={formData.password} onChange={handleInputChange} required />
              <InputPasswordAuthPage name="password_confirmation" label="Konfirmasi Kata Sandi" placeholder="Masukkan Kata Sandi Lagi..." value={formData.password_confirmation} onChange={handleInputChange} required />
              <button className="py-2 px-4 bg-brand-500 w-full rounded-lg text-base font-semibold text-white" type="button" onClick={() => handleSubmitNewPassword()}>
                Ubah Kata Sandi
              </button>
              {passwordError && <p className="text-danger-500 font-semibold text-sm text-center mt-9">Kata Sandi Tidak Cocok</p>}
            </form>
          </div>
        </section>
      </div>
    </AuthPageLayout>
  );
};

export default ResetPassword;

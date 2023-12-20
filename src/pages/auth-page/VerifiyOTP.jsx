import React, { useState } from "react";
import AuthPageLayout from "../../layouts/AuthPageLayout";
import LoadingPopup from "../../components/popup-components/LoadingPopup";
import { bgAuth, bgOtp } from "../../assets";
import LinkBackGeneral from "../../components/general-components/LinkBackGeneral";
import InputTextGeneral from "../../components/general-components/InputTextGeneral";
import { userService } from "../../services";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const VerifiyOTP = () => {
  const emailOtp = localStorage.getItem("EmailForOTP");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [otpError, setOtpError] = useState(false);
  const [formData, setFormData] = useState({
    otp: "",
  });

  const handleVerifyOtp = async () => {
    try {
      setLoading(true);
      const response = await userService.postVerifyOTP(formData);
      console.log("Verifikasi OTP", response);
      setOtpError(false);
      setLoading(false);
      // navigate("/reset-password");
      triggerAlert();
    } catch (error) {
      console.error(error);
      setOtpError(true);
      setLoading(false);
    }
  };

  const handleSendOTPAgain = async () => {
    try {
      setLoading(true);
      const response = await userService.getSendOTPAgain();
      console.log("Hasil OTP Lagi", response);
      setLoading(false);
      triggerAlertResend();
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
      title: "VERIFIKASI OTP BERHASIL",
      confirmButtonText: "Lanjut",
    }).then(() => {
      navigate("/reset-password");
      close();
    });
  };

  const triggerAlertResend = () => {
    Swal.fire({
      icon: "success",
      title: "KODE OTP BERHASIL DIKIRIM ULANG",
      text: "Silahkan periksa email anda untuk melihat kode OTP.",
      confirmButtonText: "Lanjut",
    }).then(() => {
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
            <img className="w-48 mb-12" src={bgOtp} alt="" />
            <h1 className="text-brand-500 font-semibold text-center text-4xl mb-10">Verifikasi Kode OTP</h1>
            <p className="text-xs inline-block w-[28rem] mb-10">
              Hai Scholars, Silahkan masukkan kode OTP yang telah kami kirimkan di email <span className="text-brand-500 font-semibold">{emailOtp}</span>
            </p>
            <InputTextGeneral name="otp" placeholder="Masukkan Kode OTP..." value={formData.otp} onChange={handleInputChange} />
            <button className={`py-2 px-4 mt-6 w-[80%] rounded-lg text-base font-semibold text-white bg-brand-500`} type="button" onClick={() => handleVerifyOtp()}>
              Verifikasi Kode
            </button>
            <div className="flex items-end gap-1">
              <p className="inline-block mt-1 font-semibold text-xs">Tidak menerima Kode? </p>
              <button type="submit" className="inline-block font-semibold text-xs text-brand-500" onClick={() => handleSendOTPAgain()}>
                Kirim Ulang Kode OTP
              </button>
            </div>
            {otpError && <p className="text-danger-500 font-semibold text-base text-center my-4">Kode OTP Tidak Valid</p>}
          </div>
        </section>
      </div>
    </AuthPageLayout>
  );
};

export default VerifiyOTP;

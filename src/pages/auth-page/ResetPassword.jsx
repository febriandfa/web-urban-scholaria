import React from "react";
import AuthPageLayout from "../../layouts/AuthPageLayout";
import { bgAuth, iconResetPass } from "../../assets";
import InputPasswordAuthPage from "../../components/auth-page-components/InputPasswordAuthPage";

const ResetPassword = () => {
  return (
    <AuthPageLayout>
      <div className="grid grid-cols-2 w-full h-full pt-10">
        <div>
          <img className="w-1/2 h-full pt-20 object-cover fixed top-0 inset-x-0" src={bgAuth} alt="" />
        </div>
        <section>
          <div className="flex flex-col items-center justify-center">
            <img className="w-44 h-44 mb-20" src={iconResetPass} alt="icon lupa password" />
            <p className="inline-block w-[28rem] mb-16 text-xs text-neutral-600">Hai Scholars, Silahkan masukkan kata sandi baru untuk akunmu. Jaga kerahasiaan password dan jangan bagikan kepada siapapun.</p>
            <form className="w-[28rem]" action="#" method="post">
              <InputPasswordAuthPage name="password" label="Kata Sandi" placeholder="Masukkan Kata Sandi..." required />
              <InputPasswordAuthPage name="password_confirm" label="Konfirmasi Kata Sandi" placeholder="Masukkan Kata Sandi Lagi..." required />
              <button className="py-2 px-4 bg-brand-500 w-full rounded-lg text-base font-semibold text-white" type="button">
                Ubah Kata Sandi
              </button>
              <p className="text-danger-500 font-semibold text-sm text-center mt-9">Kata Sandi Tidak Cocok</p>
            </form>
          </div>
        </section>
      </div>
    </AuthPageLayout>
  );
};

export default ResetPassword;

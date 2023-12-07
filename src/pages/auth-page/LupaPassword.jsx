import React from "react";
import AuthPageLayout from "../../layouts/AuthPageLayout";
import { bgAuth, iconForgetPass } from "../../assets";

const LupaPassword = () => {
  return (
    <AuthPageLayout>
      <div className="grid grid-cols-2 w-full h-full pt-10">
        <div>
          <img className="w-1/2 h-full pt-20 object-cover fixed top-0 inset-x-0" src={bgAuth} alt="" />
        </div>
        <section className="w-full h-full">
          <div className="flex flex-col items-center justify-center">
            <img className="w-44 h-44 mb-20" src={iconForgetPass} alt="icon lupa password" />
            <p className="inline-block w-[28rem] mb-16 text-xs text-neutral-600">
              Hai Scholars, Silahkan masukkan email yang kamu gunakan saat mendaftar. Link reset kata sandi akan dikirimkan melalui Email. <br />
              <br />
              Jangan bagikan Link kamu kepada siapapun!
            </p>
            <form className="w-[28rem]" action="#" method="post">
              <div className="mb-10">
                <label className="block mb-1 font-semibold text-sm text-brand-500" for="email">
                  Email
                </label>
                <input className="w-full px-3 h-9 rounded-lg text-sm border border-neutral-400" id="email" type="email" placeholder="Masukkan Alamat Email..." />
              </div>
              <button className="py-2 px-4 bg-brand-500 w-full rounded-lg text-base font-semibold text-white" type="button">
                Kirim Link Reset
              </button>
              <p className="text-danger-500 font-semibold text-sm text-center mt-9">Email Tidak Terdaftar</p>
            </form>
          </div>
        </section>
      </div>
    </AuthPageLayout>
  );
};

export default LupaPassword;

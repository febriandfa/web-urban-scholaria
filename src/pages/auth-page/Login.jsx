import React from "react";
import AuthPageLayout from "../../layouts/AuthPageLayout";
import { bgAuth } from "../../assets";
import { Link } from "react-router-dom";
import InputTextGeneral from "../../components/general-components/InputTextGeneral";
import InputPasswordAuthPage from "../../components/auth-page-components/InputPasswordAuthPage";

const Login = () => {
  return (
    <AuthPageLayout>
      <div className="grid grid-cols-2 w-full h-full pt-10">
        <div>
          <img className="w-1/2 h-full pt-20 object-cover fixed top-0 inset-x-0" src={bgAuth} alt="" />
        </div>
        <section className="h-full w-full">
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-semibold text-5xl text-brand-500 text-center w-4/5 mb-20">Segera Kembali ke Urban Scolaria!</h2>
            <form className="w-[28rem]" action="#" method="post">
              <InputTextGeneral name="email-nik" label="Email atau NIK" placeholder="Masukkan Email atau NIK..." required />
              <InputPasswordAuthPage name="kata-sandi" label="Kata Sandi" placeholder="Masukkan Kata Sandi..." required />
              <Link to="/lupa-password" className="block mb-6 font-semibold text-xs text-brand-500 text-right">
                Lupa Kata Sandi?
              </Link>
              <Link to="/dashboard">
                <button className="py-2 px-4 bg-brand-500 w-full rounded-lg text-base font-semibold text-white" type="submit">
                  Masuk
                </button>
              </Link>
              <p className="inline-block mt-1 font-semibold text-xs">Belum memiliki akun? </p>
              <Link to="/daftar" className="inline-block mb-9 font-semibold text-xs text-brand-500">
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

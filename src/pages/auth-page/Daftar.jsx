import React, { useState } from "react";
import { bgAuth } from "../../assets";
import AuthPageLayout from "../../layouts/AuthPageLayout";
import InputTextGeneral from "../../components/general-components/InputTextGeneral";
import InputPasswordAuthPage from "../../components/auth-page-components/InputPasswordAuthPage";
import { Link } from "react-router-dom";

const Daftar = () => {
  return (
    <AuthPageLayout>
      <div className="grid grid-cols-2 w-full h-full pt-10">
        <div>
          <img className="w-1/2 h-full pt-20 object-cover fixed top-0 inset-x-0" src={bgAuth} alt="" />
        </div>
        <section className="w-full h-full">
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-semibold text-5xl text-brand-500 text-center w-4/5 mb-8">Mari Bergabung di Urban Scholaria!</h2>
            <form className="w-[28rem]" action="#" method="post">
              <InputTextGeneral name="nama" label="Nama" placeholder="Masukkan Nama..." required />
              <InputTextGeneral name="nik" label="NIK (Nomor Induk Kependudukan)" placeholder="Masukkan NIK..." required />
              <InputTextGeneral name="email" label="email" placeholder="Masukkan Email..." required />
              <InputPasswordAuthPage name="kata-sandi" label="Kata Sandi" placeholder="Masukkan Kata Sandi..." required />
              <InputPasswordAuthPage name="konfirmasi-kata-sandi" label="Konfirmasi Kata Sandi" placeholder="Masukkan Kata Sandi Lagi..." required />
              <Link to="/masuk">
                <button className="py-2 px-4 bg-brand-500 w-full rounded-lg text-base font-semibold text-white" type="submit">
                  Daftar Sekarang
                </button>
              </Link>
              <p className="inline-block mt-1 font-semibold text-xs">Sudah memiliki akun? </p>
              <Link to="/masuk" className="inline-block mb-9 font-semibold text-xs text-brand-500">
                Masuk
              </Link>
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

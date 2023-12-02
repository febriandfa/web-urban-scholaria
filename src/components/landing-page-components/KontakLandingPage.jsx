import React from "react";
import InformasiKontakLandingPage from "./InformasiKontakLandingPage";
import InputTextGeneral from "../general-components/InputTextGeneral";
import TitleLandingPage from "./TitleLandingPage";
import InputTextAreaGeneral from "../general-components/InputTextAreaGeneral";

const KontakLandingPage = () => {
  return (
    <section className="py-20 min-h-screen px-20">
      <TitleLandingPage subtitle="Urban Scholaria" title="Kontak" align="text-center" />
      <div className="grid grid-cols-2 gap-32">
        <div>
          <h2 className="text-3xl font-semibold">Hubungi Kami</h2>
          <p className="w-1/2 mb-12 text-neutral-800">Kami disini untuk Anda! Adakah yang bisa kami bantu?</p>
          <form action="post" method="post">
            <InputTextGeneral name="nama" label="Nama" placeholder="Masukkan Nama..." />
            <InputTextGeneral name="email" label="Email" placeholder="Masukkan Email..." />
            <InputTextAreaGeneral name="pesan" label="Pesan" placeholder="Masukan Pesan..." />
            <button className="py-2 px-4 bg-brand-500 w-full rounded-lg text-base font-semibold text-white" type="submit">
              Kirim
            </button>
          </form>
        </div>
        <InformasiKontakLandingPage />
      </div>
    </section>
  );
};

export default KontakLandingPage;

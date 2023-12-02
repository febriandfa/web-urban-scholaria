import React from "react";
import { bgConfirmed } from "../../assets";
import LandingPageLayout from "../../layouts/LandingPageLayout";

const KonfirmasiPerizinan = () => {
  return (
    <LandingPageLayout>
      <section className="py-20 px-20">
        <div className="pt-10">
          <img className="w-[29rem] mx-auto mb-20" src={bgConfirmed} alt="" />
          <h1 className="text-brand-500 font-semibold text-lg w-[30%] text-center mx-auto mb-10">Terima Kasih! Permohonan mu sudah kami terima.</h1>
          <p className="text-neutral-600 font-normal text-sm w-[30%] text-center mx-auto mb-20">
            Pengajuan permohonan pengajuan perizinan telah kami terima dan akan melewati tahapan perizinan. Kamu bisa melihat permohonan mu di menu riwayat dan bisa melacak tiap tahapan perizinan dengan ID Dokumen.
          </p>
          <div className="flex gap-20 mx-auto w-fit">
            <a className="flex items-center gap-2 w-fit px-20 py-2 bg-brand-200 text-white text-base font-semibold rounded-lg" href="/riwayat">
              Riwayat
            </a>
            <a className="flex items-center gap-2 w-fit px-20 py-2 bg-brand-500 text-white text-base font-semibold rounded-lg" href="/">
              Selesai
            </a>
          </div>
        </div>
      </section>
    </LandingPageLayout>
  );
};

export default KonfirmasiPerizinan;

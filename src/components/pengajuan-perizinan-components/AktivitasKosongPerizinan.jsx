import React from "react";
import { imgKosong } from "../../assets";
import CardGeneral from "../general-components/CardGeneral";

const AktivitasKosongPerizinan = () => {
  return (
    <CardGeneral>
      <img className="w-32 h-32 mx-auto" src={imgKosong} alt="" />
      <h1 className="text-center font-semibold text-lg">Data Tidak Ditemukan</h1>
      <p className="text-center font-semibold text-sm text-neutral-500">Belum ada aktivitas yang sedang berjalan...</p>
    </CardGeneral>
  );
};

export default AktivitasKosongPerizinan;

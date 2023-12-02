import React from "react";
import { bgFeedback } from "../../assets";
import Swal from "sweetalert2";
import MainPageLayout from "../../layouts/MainPageLayout";
import InputTextAreaGeneral from "../../components/general-components/InputTextAreaGeneral";
import InputTextGeneral from "../../components/general-components/InputTextGeneral";
import LinkBackGeneral from "../../components/general-components/LinkBackGeneral";

const FeedbackUser = () => {
  const triggerAlert = (e) => {
    e.preventDefault();
    Swal.fire({
      imageUrl: bgFeedback,
      imageHeight: 131,
      imageWidth: 131,
      title: "TERIMA KASIH TELAH MENGIRIMKAN FEEDBACK",
      confirmButtonText: "Lanjut",
    });
  };

  return (
    <MainPageLayout>
      <LinkBackGeneral link="/riwayat" />
      <h1 className="capitalize text-lg font-semibold mt-10 text-center text-brand-900">Beri tahu kami feedbackmu</h1>
      <p className="text-neutral-500 text-sm text-center">Ceritakan saran dan feedbackmu disini</p>
      <img className="w-40 h-40 mx-auto my-5" src={bgFeedback} alt="" />
      <form className="w-3/5 mx-auto">
        <InputTextGeneral name="nama" label="Nama" value="Alda Elsa Faradilla" disabled />
        <InputTextGeneral name="email" label="Alamat Email" value="febriandaffa123@gmail.com" disabled />
        <InputTextGeneral name="nohp" label="No. Handphone" value="+6289666802021" disabled />
        <InputTextAreaGeneral name="feedback" id="feedback" label="Isi Feedback" placeholder="Tuliskan Feedbackmu..." />
        <button className="flex items-center justify-center gap-3 py-2 px-4 bg-brand-500 w-full rounded-lg text-base font-semibold text-white" type="submit" onClick={triggerAlert}>
          Bukti Pengajuan Permohonan
        </button>
      </form>
    </MainPageLayout>
  );
};

export default FeedbackUser;

import React from "react";
import Swal from "sweetalert2";
import { alertPenolakan } from "../../assets";
import InputTextGeneral from "../general-components/InputTextGeneral";
import InputTextAreaGeneral from "../general-components/InputTextAreaGeneral";
import InputFileGeneral from "../general-components/InputFileGeneral";

const InputPenolakanPopup = ({ close }) => {
  const triggerAlert = () => {
    Swal.fire({
      imageUrl: alertPenolakan,
      imageHeight: 131,
      imageWidth: 131,
      title: "PENOLAKAN TELAH DIKIRIM",
      text: "Penolakan permohonan telah terkirim ke pemohon beserta komentarnya.",
      confirmButtonText: "Lanjut",
    }).then(() => {
      close();
    });
  };

  return (
    <div className="p-4 bg-white rounded-xl w-full">
      <div className="h-[30rem] overflow-y-auto p-2">
        <h1 className="text-2xl font-semibold text-center text-danger-500">Tolak Pengajuan Permohonan</h1>
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 mt-2 mb-4" />
        <InputTextGeneral name="subject" label="Subject Penolakan" placeholder="Beri alasan penolakan..." required />
        <InputTextAreaGeneral name="deskripsi" id="deskripsi" label="Deskripsi Penolakan" placeholder="Jelaskan alasan penolakan" required />
        <InputFileGeneral name="lampiran-tolak" label="Lampiran" />
        <button className="py-2 px-4 bg-brand-500 w-full rounded-lg text-base font-semibold text-white" type="submit" onClick={triggerAlert}>
          Tolak Pengajuan
        </button>
      </div>
    </div>
  );
};

export default InputPenolakanPopup;

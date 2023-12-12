import React, { useState } from "react";
import Swal from "sweetalert2";
import { alertPenolakan } from "../../assets";
import InputTextGeneral from "../general-components/InputTextGeneral";
import InputTextAreaGeneral from "../general-components/InputTextAreaGeneral";
import InputFileGeneral from "../general-components/InputFileGeneral";
import { useNavigate } from "react-router-dom";
import { userService } from "../../services";
import { getIdSuratDiajukan } from "../../services/storage.service";

const InputPenolakanPopup = ({ close }) => {
  const navigate = useNavigate();
  const idSurat = getIdSuratDiajukan();
  const [formData, setFormData] = useState({
    alasan_dikembalikan: "",
  });

  const handleDeclineSubmit = async () => {
    let form = new FormData();
    form.append("alasan_dikembalikan", formData.alasan_dikembalikan);
    try {
      const response = await userService.declineVerifikasiVerifikator(idSurat, form);
      console.log("Decline Success", response);
      triggerAlert();
    } catch (error) {
      console.error(error);
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
      imageUrl: alertPenolakan,
      imageHeight: 131,
      imageWidth: 131,
      title: "PENOLAKAN TELAH DIKIRIM",
      text: "Penolakan permohonan telah terkirim ke pemohon beserta komentarnya.",
      confirmButtonText: "Lanjut",
    }).then(() => {
      navigate("/verifikasi-dokumen-verifikator");
      close();
    });
  };

  return (
    <div className="p-4 bg-white rounded-xl w-full">
      <form className="h-[30rem] overflow-y-auto p-2">
        <h1 className="text-2xl font-semibold text-center text-danger-500">Tolak Pengajuan Permohonan</h1>
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 mt-2 mb-4" />
        {/* <InputTextGeneral name="subject" label="Subject Penolakan" placeholder="Beri alasan penolakan..." required /> */}
        <InputTextAreaGeneral name="alasan_dikembalikan" id="alasan_dikembalikan" label="Deskripsi Penolakan" placeholder="Jelaskan alasan penolakan..." value={formData.alasan_dikembalikan} onChange={handleInputChange} required />
        {/* <InputFileGeneral name="lampiran-tolak" label="Lampiran" /> */}
        <button className="py-2 px-4 bg-brand-500 w-full rounded-lg text-base font-semibold text-white" type="button" onClick={() => handleDeclineSubmit()}>
          Tolak Pengajuan
        </button>
      </form>
    </div>
  );
};

export default InputPenolakanPopup;

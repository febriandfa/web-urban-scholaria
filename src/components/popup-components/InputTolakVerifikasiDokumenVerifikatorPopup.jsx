import React, { useState } from "react";
import Swal from "sweetalert2";
import { alertPenolakan } from "../../assets";
import InputTextGeneral from "../general-components/InputTextGeneral";
import InputTextAreaGeneral from "../general-components/InputTextAreaGeneral";
import InputFileGeneral from "../general-components/InputFileGeneral";
import { useNavigate } from "react-router-dom";
import { userService } from "../../services";
import { getIdSuratDiajukan } from "../../services/storage.service";
import LoadingPopup from "./LoadingPopup";

const InputTolakVerifikasiDokumenVerifikatorPopup = ({ close }) => {
  const navigate = useNavigate();
  const idSurat = getIdSuratDiajukan();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    alasan_ditolak: "",
  });

  const handleDeclineSubmit = async () => {
    let form = new FormData();
    form.append("alasan_ditolak", formData.alasan_ditolak);
    try {
      setLoading(true);
      const response = await userService.declineVerifikasiVerifikator(idSurat, form);
      console.log("Decline Success", response);
      setLoading(false);
      triggerAlert();
    } catch (error) {
      console.error(error);
      setLoading(false);
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
      // imageUrl: alertPenolakan,
      // imageHeight: 131,
      // imageWidth: 131,
      icon: "error",
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
      <LoadingPopup loading={loading} />
      <form className="h-fit overflow-y-auto p-2 w-96">
        <h1 className="text-2xl font-semibold text-center text-danger-500">Tolak Pengajuan Permohonan</h1>
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 mt-2 mb-4" />
        {/* <InputTextGeneral name="subject" label="Subject Penolakan" placeholder="Beri alasan penolakan..." /> */}
        <InputTextAreaGeneral name="alasan_ditolak" id="alasan_ditolak" label="Deskripsi Penolakan" placeholder="Jelaskan alasan penolakan..." value={formData.alasan_ditolak} onChange={handleInputChange} required />
        {/* <InputFileGeneral name="lampiran-tolak" label="Lampiran" /> */}
        <button className="py-2 px-4 bg-danger-500 w-full rounded-lg text-base font-semibold text-white" type="button" onClick={() => handleDeclineSubmit()}>
          Tolak Pengajuan
        </button>
      </form>
    </div>
  );
};

export default InputTolakVerifikasiDokumenVerifikatorPopup;

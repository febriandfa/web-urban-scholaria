import React, { useEffect, useState } from "react";
import { bgFeedback } from "../../assets";
import Swal from "sweetalert2";
import MainPageLayout from "../../layouts/MainPageLayout";
import InputTextAreaGeneral from "../../components/general-components/InputTextAreaGeneral";
import InputTextGeneral from "../../components/general-components/InputTextGeneral";
import LinkBackGeneral from "../../components/general-components/LinkBackGeneral";
import { getIdSuratDiajukan } from "../../services/storage.service";
import { userService } from "../../services";
import { useNavigate } from "react-router-dom";

const FeedbackUser = () => {
  const idSurat = getIdSuratDiajukan();
  const navigate = useNavigate();
  const [profile, setProfile] = useState();
  const [formData, setFormData] = useState({
    surat_id: idSurat,
    isi: "",
  });

  const handleFeedbackSubmit = async () => {
    let form = new FormData();
    form.append("surat_id", formData.surat_id);
    form.append("isi", formData.isi);
    try {
      const response = await userService.postFeedback(form);
      console.log("Feedback Success", response);
      triggerAlert();
    } catch (error) {
      console.error(error);
    }
  };

  const getProfileData = async () => {
    try {
      const response = await userService.getProfile();
      console.log("Hasil get profil:", response);
      setProfile(response?.data?.data);
    } catch (error) {
      console.error("Update Error", error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  const handleInputChange = ({ name, value }) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const triggerAlert = () => {
    // e.preventDefault();
    Swal.fire({
      imageUrl: bgFeedback,
      imageHeight: 131,
      imageWidth: 131,
      title: "TERIMA KASIH TELAH MENGIRIMKAN FEEDBACK",
      confirmButtonText: "Lanjut",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/riwayat");
      }
    });
  };

  return (
    <MainPageLayout>
      <LinkBackGeneral link="/riwayat" />
      <h1 className="capitalize text-lg font-semibold mt-10 text-center text-brand-900">Beri tahu kami feedbackmu</h1>
      <p className="text-neutral-500 text-sm text-center">Ceritakan saran dan feedbackmu disini</p>
      <img className="w-40 h-40 mx-auto my-5" src={bgFeedback} alt="" />
      <form className="w-3/5 mx-auto">
        <InputTextGeneral name="surat_id" label="ID Surat" value={formData.surat_id} disabled />
        <InputTextGeneral name="nama_lengkap" label="Nama" value={profile?.nama_lengkap} disabled />
        <InputTextGeneral name="email" label="Alamat Email" value={profile?.email} disabled />
        <InputTextGeneral name="no_telp" label="No. Handphone" value={profile?.no_telp} disabled />
        <InputTextAreaGeneral name="isi" id="isi" label="Isi Feedback" placeholder="Tuliskan Feedbackmu..." value={formData.isi} onChange={handleInputChange} />
        <button className="flex items-center justify-center gap-3 py-2 px-4 bg-brand-500 w-full rounded-lg text-base font-semibold text-white" type="button" onClick={() => handleFeedbackSubmit()}>
          Kirim Feedback
        </button>
      </form>
    </MainPageLayout>
  );
};

export default FeedbackUser;

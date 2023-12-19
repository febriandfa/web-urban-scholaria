import React, { useEffect, useState } from "react";
import CardGeneral from "../../../components/general-components/CardGeneral";
import InputTextGeneral from "../../../components/general-components/InputTextGeneral";
import PerizinanPageLayout from "../../../layouts/PerizinanPageLayout";
import TitlePerizinan from "../../../components/pengajuan-perizinan-components/TitlePerizinan";
import { userService } from "../../../services";
import { getIdSuratDiajukan, getKategoriPerizinan, getSuratJenisID } from "../../../services/storage.service";
import MapPerizinan from "../../../components/pengajuan-perizinan-components/MapPerizinan";
import LoadingPopup from "../../../components/popup-components/LoadingPopup";
import { useNavigate } from "react-router-dom";
import LinkBackGeneral from "../../../components/general-components/LinkBackGeneral";

const FormPerizinanHeader = ({ title, subtitle }) => {
  return <TitlePerizinan subtitle={`AJUKAN PERIZINAN ${subtitle}`} title={`${title} ${subtitle}`} />;
};

const FormPerizinanBody = ({ title, loading, kategoriPerizinan, idSuratJenis }) => {
  const navigate = useNavigate();
  // INISIASI FORM PENGAJUAN START
  const [formData, setFormData] = useState({
    kategori: kategoriPerizinan,
    surat_jenis_id: idSuratJenis,
    nama: "",
    alamat_lokasi: "",
    longitude: "",
    latitude: "",
    // dokumen_upload: null,
  });
  // INISIASI FORM PENGAJUAN END

  // HANDLE POST TEXT FORM START
  const handleTextFormSubmit = async () => {
    let form = new FormData();
    form.append("kategori", formData.kategori);
    form.append("surat_jenis_id", formData.surat_jenis_id);
    form.append("nama", formData.nama);
    form.append("alamat_lokasi", formData.alamat_lokasi);
    form.append("longitude", formData.longitude);
    form.append("latitude", formData.latitude);
    try {
      const response = await userService.postPengajuan(form);
      console.log("Successful ajukan:", response);
      localStorage.setItem("IdSuratDiajukan", response?.data?.data?.id);
      navigate("/pengajuan-perizinan-upload-dokumen");
    } catch (error) {
      console.error("Ada yg error", error);
    }
  };
  // HANDLE POST TEXT FORM END

  // HANDLE INPUT TEXT CHANGE START
  const handleInputChange = ({ name, value }) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // HANDLE INPUT TEXT CHANGE END

  // HANDLE INPUT LOCATION CHANGE START
  const handleLocationChange = ({ latitude, longitude }) => {
    setFormData((prevData) => ({
      ...prevData,
      longitude,
      latitude,
    }));
  };
  // HANDLE INPUT LOCATION CHANGE END

  const allFieldsFilled = () => {
    for (const key in formData) {
      if (formData[key] === null || formData[key] === "") {
        return false;
      }
    }
    return true;
  };

  let namaJenisSurat;
  if (formData.surat_jenis_id === "1") {
    namaJenisSurat = "Pengajuan Perizinan Pembangunan";
  } else if (formData.surat_jenis_id === "2") {
    namaJenisSurat = "Pengajuan Perizinan Operasional";
  } else if (formData.surat_jenis_id === "3") {
    namaJenisSurat = "Pengajuan Perizinan Perubahan Operasional";
  }

  return (
    <div>
      <LoadingPopup loading={loading} />
      <div className="mb-6">
        <LinkBackGeneral />
      </div>
      <h1 className="text-brand-500 font-semibold text-xl text-center mb-5">
        {title} {kategoriPerizinan}
      </h1>
      <form className="w-4/5 mx-auto" action="#" method="post">
        <CardGeneral customClass="w-full mb-7" color="bg-brand-50">
          <InputTextGeneral name="kategori" label="Kategori" value={formData.kategori} onChange={handleInputChange} required disabled />
          <InputTextGeneral name="surat_jenis_id" label="ID Surat Jenis" value={namaJenisSurat} onChange={handleInputChange} required disabled />
          <InputTextGeneral name="nama" label="Nama" placeholder="Masukkan Nama Sekolah..." value={formData.nama} onChange={handleInputChange} required />
          <InputTextGeneral name="alamat_lokasi" label="Alamat" placeholder="Masukkan Alamat..." value={formData.alamat_lokasi} onChange={handleInputChange} required />
          <MapPerizinan onLocationChange={handleLocationChange} />
          <InputTextGeneral name="longitude" label="Longitude" placeholder="Masukkan Longitude..." value={formData.longitude} onChange={handleInputChange} required />
          <InputTextGeneral name="latitude" label="Latitude" placeholder="Masukkan Latitude..." value={formData.latitude} onChange={handleInputChange} required />
        </CardGeneral>
        <button
          type="button"
          onClick={() => handleTextFormSubmit()}
          className={`py-2 px-4 text-center w-full rounded-lg text-base font-semibold  block ${!allFieldsFilled() ? "bg-neutral-200 text-neutral-400" : "bg-brand-200 text-neutral-800"}`}
          disabled={!allFieldsFilled()}
        >
          Selanjutnya
        </button>
      </form>
    </div>
  );
};

const FormTextPengajuanOperasional = () => {
  const [loading, setLoading] = useState(true);
  const [jenisPerizinan, setJenisPerizinan] = useState([]);

  const jenisSuratID = getSuratJenisID();
  const kategoriPerizinan = getKategoriPerizinan();
  const idSuratPengajuan = getIdSuratDiajukan();
  let subtitle;
  if (kategoriPerizinan === "TK") {
    subtitle = "Taman Kanak-Kanak";
  } else if (kategoriPerizinan === "SD") {
    subtitle = "Sekolah Dasar";
  } else if (kategoriPerizinan === "SMP") {
    subtitle = "Sekolah Menengah Pertama";
  } else if (kategoriPerizinan === "SMA") {
    subtitle = "Sekolah Menengah Akhir";
  }

  // GET JENIS PERIZINAN START
  const jenisPerizinanData = async (surat_jenis_id) => {
    try {
      const response = await userService.getSuratJenisDetailByID(surat_jenis_id);
      console.log("Hasil Get Detail Jenis Surat:", response);
      setJenisPerizinan(response?.data?.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    jenisPerizinanData(jenisSuratID);
  }, []);
  // GET JENIS PERIZINAN END

  return (
    <PerizinanPageLayout
      childrenHeader={<FormPerizinanHeader title={jenisPerizinan.nama} subtitle={subtitle} />}
      childrenBody={<FormPerizinanBody title={jenisPerizinan.nama} loading={loading} kategoriPerizinan={kategoriPerizinan} idSuratJenis={jenisSuratID} />}
    />
  );
};

export default FormTextPengajuanOperasional;

import React, { useEffect, useState } from "react";
import InputFileGeneral from "../../../components/general-components/InputFileGeneral";
import CardGeneral from "../../../components/general-components/CardGeneral";
import InputTextGeneral from "../../../components/general-components/InputTextGeneral";
import PerizinanPageLayout from "../../../layouts/PerizinanPageLayout";
import TitlePerizinan from "../../../components/pengajuan-perizinan-components/TitlePerizinan";
import KetentuanPerizinan from "../../../components/pengajuan-perizinan-components/KetentuanPerizinan";
import { Link } from "react-router-dom";
import { userService } from "../../../services";
import { getIdSuratDiajukan, getKategoriPerizinan, getSuratJenisID } from "../../../services/storage.service";
import MapPerizinan from "../../../components/pengajuan-perizinan-components/MapPerizinan";
import LoadingPopup from "../../../components/popup-components/LoadingPopup";
import InputFileGeneralCoba from "../../../components/general-components/InputFileGeneralCoba";

// const jenisSuratID = getSuratJenisID();
// const kategoriPerizinan = getKategoriPerizinan();
// const idSuratPengajuan = getIdSuratDiajukan();
// let subtitle;
// if (kategoriPerizinan === "TK") {
//   subtitle = "Taman Kanak-Kanak";
// } else if (kategoriPerizinan === "SD") {
//   subtitle = "Sekolah Dasar";
// } else if (kategoriPerizinan === "SMP") {
//   subtitle = "Sekolah Menengah Pertama";
// } else if (kategoriPerizinan === "SMA") {
//   subtitle = "Sekolah Menengah Akhir";
// }

const FormPerizinanHeader = ({ title, subtitle }) => {
  return <TitlePerizinan subtitle={`AJUKAN PERIZINAN ${subtitle}`} title={`${title} ${subtitle}`} />;
};

const FormPerizinanBody = ({ title, loading, kategoriPerizinan, id_surat_pengajuan, id_jenis_surat }) => {
  const [showInputSection, setShowInputSection] = useState(true);
  const [showKetentuanSection, setShowKetentuanSection] = useState(false);
  const [showFileInputSection, setShowFileInputSection] = useState(false);

  // INISIASI FORM PENGAJUAN START
  const [idSyaratDokumen, setIdSyaratDokumen] = useState([]);
  const [syaratSurat, setSyaratSurat] = useState([]);
  const [formData, setFormData] = useState({
    kategori: kategoriPerizinan,
    nama: "",
    alamat_lokasi: "",
    longitude: "",
    latitude: "",
    dokumen_upload: null,
  });
  // INISIASI FORM PENGAJUAN END

  // HANDLE POST TEXT FORM START
  const handleTextFormSubmit = async () => {
    let form = new FormData();
    form.append("kategori", formData.kategori);
    form.append("nama", formData.nama);
    form.append("alamat_lokasi", formData.alamat_lokasi);
    form.append("longitude", formData.longitude);
    form.append("latitude", formData.latitude);
    // form.append("dokumen_upload", formData.dokumen_upload);
    try {
      const response = await userService.postPengajuan(form);
      console.log("Successful ajukan:", response);
      localStorage.setItem("IdSuratDiajukan", response?.data?.data?.id);
      setShowFileInputSection(!showFileInputSection);
    } catch (error) {
      console.error("Ada yg error", error);
    }
  };
  // HANDLE POST TEXT FORM END

  // HANDLE INPUT TEXT CHANGE START
  const handleInputChange = ({ name, value, file }) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      // dokumen_upload: file,
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

  // GET SYARAT BERDASARKAN JENIS START
  const syaratPerizinanData = async (surat_jenis_id) => {
    try {
      const response = await userService.getSyaratBySuratJenisID(surat_jenis_id);
      setSyaratSurat(response?.data?.data);
      console.log("Syarat Response:", response);
      console.log(
        "Syarat ID:",
        response?.data?.data?.map((item) => item.id)
      );
      const idSyarat = response?.data?.data?.map((item) => item.id) || [];
      setIdSyaratDokumen(idSyarat);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    syaratPerizinanData(id_jenis_surat);
  }, []);
  // GET SYARAT BERDASARKAN JENIS END

  // HANDLE UPLOAD FORM SUBMIT START
  const handleUploadFormSubmit = async (surat_syarat_id, dokumen_upload) => {
    let form = new FormData();
    form.append("dokumen_upload", dokumen_upload);
    try {
      const response = await userService.postSuratUpload(id_surat_pengajuan, id_jenis_surat, surat_syarat_id, form);
      // console.log(response);
    } catch (error) {
      console.error("Upload Form Error: ", error);
    }
    console.log({ surat_syarat_id, dokumen_upload });
  };
  // HANDLE UPLOAD FORM SUBMIT END

  const toggleKetentuanSection = (e) => {
    e.preventDefault();
    setShowKetentuanSection(!showKetentuanSection);
    setShowFileInputSection(!setShowFileInputSection);
  };

  const toggleInputSection = (e) => {
    e.preventDefault();
    setShowInputSection(!showInputSection);
  };

  return (
    <div>
      <LoadingPopup loading={loading} />
      <h1 className="text-brand-500 font-semibold text-xl text-center mb-5">
        {title} {kategoriPerizinan}
      </h1>
      <form className="w-4/5 mx-auto" action="#" method="post">
        <CardGeneral customClass="w-full mb-7" color="bg-brand-50">
          {!showFileInputSection ? (
            <>
              <InputTextGeneral name="kategori" label="Kategori" value={formData.kategori} onChange={handleInputChange} required disabled />
              <InputTextGeneral name="nama" label="Nama" placeholder="Masukkan Nama Sekolah..." value={formData.nama} onChange={handleInputChange} required />
              <InputTextGeneral name="alamat_lokasi" label="Alamat" placeholder="Masukkan Alamat..." value={formData.alamat_lokasi} onChange={handleInputChange} required />
              <MapPerizinan onLocationChange={handleLocationChange} />
              <InputTextGeneral name="longitude" label="Longitude" placeholder="Masukkan Longitude..." value={formData.longitude} onChange={handleInputChange} required />
              <InputTextGeneral name="latitude" label="Latitude" placeholder="Masukkan Latitude..." value={formData.latitude} onChange={handleInputChange} required />
            </>
          ) : (
            <>
              {syaratSurat.map((item, index) => (
                <InputFileGeneralCoba key={index} name={formData.dokumen_upload} label={item.nama} ukuranFile={5} selectedFile={formData.dokumen_upload} onFileInputChange={(e) => handleUploadFormSubmit(item.id, e.value)} required />
              ))}
            </>
          )}
          {showKetentuanSection && <KetentuanPerizinan />}
        </CardGeneral>
        {!showFileInputSection ? (
          <button
            type="button"
            onClick={() => handleTextFormSubmit()}
            className={`py-2 px-4 text-center cursor-pointer bg-brand-200 w-full rounded-lg text-base font-semibold text-neutral-800 block ${showInputSection ? "block" : "hidden"}`}
          >
            Selanjutnya
          </button>
        ) : (
          <button type="button" onClick={toggleKetentuanSection} className={`py-2 px-4 text-center cursor-pointer bg-brand-200 w-full rounded-lg text-base font-semibold text-neutral-800 block ${showInputSection ? "block" : "hidden"}`}>
            Selanjutnya
          </button>
        )}
        <div className={`${!showInputSection ? "block" : "hidden"}`}>
          <button onClick={toggleInputSection} className="block text-center py-2 px-4 mb-4 bg-brand-200 w-full rounded-lg text-base font-semibold text-neutral-800 cursor-pointer">
            Kembali
          </button>
          <Link to="/konfirmasi-pengajuan-perizinan">
            <button className="py-2 px-4 bg-brand-500 w-full rounded-lg text-base font-semibold text-white">Ajukan Perizinan</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

const FormPengajuanOperasional = () => {
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
      childrenBody={<FormPerizinanBody title={jenisPerizinan.nama} loading={loading} kategoriPerizinan={kategoriPerizinan} id_surat_pengajuan={idSuratPengajuan} id_jenis_surat={jenisSuratID} />}
    />
  );
};

export default FormPengajuanOperasional;

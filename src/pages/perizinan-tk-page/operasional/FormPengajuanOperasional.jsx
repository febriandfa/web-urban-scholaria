import React, { useEffect, useState } from "react";
import InputFileGeneral from "../../../components/general-components/InputFileGeneral";
import CardGeneral from "../../../components/general-components/CardGeneral";
import InputTextGeneral from "../../../components/general-components/InputTextGeneral";
import PerizinanPageLayout from "../../../layouts/PerizinanPageLayout";
import TitlePerizinan from "../../../components/pengajuan-perizinan-components/TitlePerizinan";
import KetentuanPerizinan from "../../../components/pengajuan-perizinan-components/KetentuanPerizinan";
import { Link } from "react-router-dom";
import { userService } from "../../../services";
import { getKategoriPerizinan, getSuratJenisID } from "../../../services/storage.service";
import MapPerizinan from "../../../components/pengajuan-perizinan-components/MapPerizinan";
import LoadingPopup from "../../../components/popup-components/LoadingPopup";

const kategoriPerizinan = getKategoriPerizinan();
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

const FormPerizinanHeader = ({ title }) => {
  return <TitlePerizinan subtitle={`AJUKAN PERIZINAN ${subtitle}`} title={`${title} ${subtitle}`} />;
};

const FormPerizinanBody = ({ title, loading }) => {
  const [showInputSection, setShowInputSection] = useState(true);
  const [formData, setFormData] = useState({
    kategori: kategoriPerizinan,
    nama: "",
    alamat_lokasi: "",
    longitude: "",
    latitude: "",
  });

  const handleTextFormSubmit = async () => {
    let form = new FormData();
    form.append("kategori", formData.kategori);
    form.append("nama", formData.nama);
    form.append("alamat_lokasi", formData.alamat_lokasi);
    form.append("longitude", formData.longitude);
    form.append("latitude", formData.latitude);
    try {
      const response = userService.postPengajuan(form);
      console.log("Successful ajukan:", response);
    } catch (error) {
      console.error("Ada yg error", error);
    }
  };

  const handleInputChange = ({ name, value }) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLocationChange = ({ latitude, longitude }) => {
    setFormData((prevData) => ({
      ...prevData,
      longitude,
      latitude,
    }));
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
          <InputTextGeneral name="kategori" label="Kategori" value={formData.kategori} onChange={handleInputChange} required disabled />
          <InputTextGeneral name="nama" label="Nama" placeholder="Masukkan Nama Sekolah..." value={formData.nama} onChange={handleInputChange} required />
          <InputTextGeneral name="alamat_lokasi" label="Alamat" placeholder="Masukkan Alamat..." value={formData.alamat_lokasi} onChange={handleInputChange} required />
          <MapPerizinan onLocationChange={handleLocationChange} />
          <InputTextGeneral name="longitude" label="Longitude" placeholder="Masukkan Longitude..." value={formData.longitude} onChange={handleInputChange} required />
          <InputTextGeneral name="latitude" label="Latitude" placeholder="Masukkan Latitude..." value={formData.latitude} onChange={handleInputChange} required />

          {/* {showInputSection ? (
            <>
              <InputTextGeneral name="nama-sekolah" label="Nama Sekolah" placeholder="Masukkan Nama Sekolah..." value={inputValue["nama-sekolah"]} onChange={(e) => onInputChange("nama-sekolah", e.target.value)} required />
              <InputTextGeneral name="alamat-sekolah" label="Alamat Sekolah" placeholder="Masukkan Alamat Sekolah..." value={inputValue["alamat-sekolah"]} onChange={(e) => onInputChange("alamat-sekolah", e.target.value)} required />
              <InputFileGeneral
                name="ktp-surat-domisili"
                label="KTP/Surat Keterangan Domisili Penanggung Jawab"
                tipeFile="PDF"
                ukuranFile={5}
                file=".pdf"
                selectedFile={selectedFiles["ktp-surat-domisili"]}
                onFileInputChange={(file) => onFileInputChange("ktp-surat-domisili", file)}
                required
              />
              <InputFileGeneral
                name="bpjs-ketenagakerjaan"
                label="BPJS Ketenagakerjaan"
                tipeFile="PDF"
                ukuranFile={5}
                file=".pdf"
                selectedFile={selectedFiles["bpjs-ketenagakerjaan"]}
                onFileInputChange={(file) => onFileInputChange("bpjs-ketenagakerjaan", file)}
                required
              />
              <InputFileGeneral
                name="bpjs-kesehatan"
                label="BPJS Kesehatan"
                tipeFile="PDF"
                ukuranFile={5}
                file=".pdf"
                selectedFile={selectedFiles["bpjs-kesehatan"]}
                onFileInputChange={(file) => onFileInputChange("bpjs-kesehatan", file)}
                required
              />
              <InputFileGeneral
                name="susunan-pengurus"
                label="Susunan Pengurus dan Rincian Tugas"
                tipeFile="PDF"
                ukuranFile={5}
                file=".pdf"
                selectedFile={selectedFiles["susunan-pengurus"]}
                onFileInputChange={(file) => onFileInputChange("susunan-pengurus", file)}
                required
              />
              <InputFileGeneral
                name="hasil-penilaian"
                label="Hasil Penilaian Kelayakan"
                tipeFile="PDF"
                ukuranFile={5}
                file=".pdf"
                selectedFile={selectedFiles["hasil-penilaian"]}
                onFileInputChange={(file) => onFileInputChange("hasil-penilaian", file)}
                required
              />
              <InputFileGeneral
                name="izin-rt-rw"
                label="Surat Keterangan Izin dari RT/RW atau Setempat"
                tipeFile="PDF"
                ukuranFile={5}
                file=".pdf"
                selectedFile={selectedFiles["izin-rt-rw"]}
                onFileInputChange={(file) => onFileInputChange("izin-rt-rw", file)}
                required
              />
              <InputFileGeneral
                name="perkiraan-pembiayaan"
                label="Data Mengenai Perkiraan Pembiayaan Untuk Kelangsungan Pendidikan"
                tipeFile="PDF"
                ukuranFile={5}
                file=".pdf"
                selectedFile={selectedFiles["perkiraan-pembiayaan"]}
                onFileInputChange={(file) => onFileInputChange("perkiraan-pembiayaan", file)}
                required
              />
              <InputFileGeneral
                name="program-kerja"
                label="Program Kerja"
                tipeFile="PDF"
                ukuranFile={5}
                file=".pdf"
                selectedFile={selectedFiles["program-kerja"]}
                onFileInputChange={(file) => onFileInputChange("program-kerja", file)}
                required
              />
              <InputFileGeneral
                name="rencana-pengembangan"
                label="Profil Rencana Pengembangan (Dalam 5 Tahun)"
                tipeFile="PDF"
                ukuranFile={5}
                file=".pdf"
                selectedFile={selectedFiles["rencana-pengembangan"]}
                onFileInputChange={(file) => onFileInputChange("rencana-pengembangan", file)}
                required
              />
            </>
          ) : (
            <KetentuanPerizinan />
          )} */}
        </CardGeneral>
        <button type="button" onClick={() => handleTextFormSubmit()} className={`py-2 px-4 text-center cursor-pointer bg-brand-200 w-full rounded-lg text-base font-semibold text-neutral-800 block ${showInputSection ? "block" : "hidden"}`}>
          Selanjutnya
        </button>
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
  const jenisSuratID = getSuratJenisID();
  const [loading, setLoading] = useState(true);
  const [jenisPerizinan, setJenisPerizinan] = useState([]);

  const jenisPerizinanData = async (surat_jenis_id) => {
    try {
      // setLoading(true);
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
  // const [inputValue, setInputValue] = useState({
  //   "nama-sekolah": "",
  //   "alamat-sekolah": "",
  // });

  // const [selectedFiles, setSelectedFiles] = useState({
  //   "ktp-surat-domisili": null,
  //   "bpjs-ketenagakerjaan": null,
  //   "bpjs-kesehatan": null,
  //   "susunan-pengurus": null,
  //   "hasil-penilaian": null,
  //   "izin-rt-rw": null,
  //   "perkiraan-pembiayaan": null,
  //   "program-kerja": null,
  //   "rencana-pengembangan": null,
  // });

  // const handleInputChange = (name, value) => {
  //   setInputValue({
  //     ...inputValue,
  //     [name]: value,
  //   });
  // };

  // const handleFileInputChange = (name, file) => {
  //   setSelectedFiles({
  //     ...selectedFiles,
  //     [name]: file,
  //   });
  // };

  return <PerizinanPageLayout childrenHeader={<FormPerizinanHeader title={jenisPerizinan.nama} />} childrenBody={<FormPerizinanBody title={jenisPerizinan.nama} loading={loading} />} />;
};

export default FormPengajuanOperasional;

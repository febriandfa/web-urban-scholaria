import React, { useEffect, useState } from "react";
import CardGeneral from "../../../components/general-components/CardGeneral";
import PerizinanPageLayout from "../../../layouts/PerizinanPageLayout";
import TitlePerizinan from "../../../components/pengajuan-perizinan-components/TitlePerizinan";
import KetentuanPerizinan from "../../../components/pengajuan-perizinan-components/KetentuanPerizinan";
import { userService } from "../../../services";
import { getIdSuratDiajukan, getKategoriPerizinan, getSuratJenisID } from "../../../services/storage.service";
import LoadingPopup from "../../../components/popup-components/LoadingPopup";
import InputFileGeneralCoba from "../../../components/general-components/InputFileGeneralCoba";
import { useNavigate } from "react-router-dom";

const FormPerizinanHeader = ({ title, subtitle }) => {
  return <TitlePerizinan subtitle={`AJUKAN PERIZINAN ${subtitle}`} title={`${title} ${subtitle}`} />;
};

const FormPerizinanBody = ({ title, loading, kategoriPerizinan, id_surat_pengajuan, id_jenis_surat }) => {
  const navigate = useNavigate();
  const [showKetentuanSection, setShowKetentuanSection] = useState(false);
  // INISIASI FORM PENGAJUAN START
  const [syaratSurat, setSyaratSurat] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    dokumen_upload: null,
  });
  // INISIASI FORM PENGAJUAN END

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

  // HANDLE SUBMIT FORM START
  const handleSubmitPengajuan = async () => {
    try {
      const response = await userService.patchSuratDiajukan(id_surat_pengajuan);
      console.log("Surat Diajukan", response);
      navigate("/konfirmasi-pengajuan-perizinan");
    } catch (error) {
      console.error(error);
    }
  };
  // HANDLE SUBMIT FORM END

  const toggleKetentuanSection = (e) => {
    e.preventDefault();
    setShowKetentuanSection(!showKetentuanSection);
    setIsChecked(false);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <LoadingPopup loading={loading} />
      {showKetentuanSection && (
        <button className="text-brand-500 font-semibold flex items-center gap-1.5 mb-6" onClick={toggleKetentuanSection}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.2484 6.35147C15.7171 6.8201 15.7171 7.5799 15.2484 8.04853L11.297 12L15.2484 15.9515C15.7171 16.4201 15.7171 17.1799 15.2484 17.6485C14.7798 18.1172 14.02 18.1172 13.5514 17.6485L8.75137 12.8485C8.28275 12.3799 8.28275 11.6201 8.75137 11.1515L13.5514 6.35147C14.02 5.88284 14.7798 5.88284 15.2484 6.35147Z"
              fill="currentColor"
            />
          </svg>
          Kembali
        </button>
      )}
      <h1 className="text-brand-500 font-semibold text-xl text-center mb-5">
        {title} {kategoriPerizinan}
      </h1>
      <form className="w-4/5 mx-auto" action="#" method="post">
        <CardGeneral customClass="w-full mb-7" color="bg-brand-50">
          {!showKetentuanSection ? (
            <>
              {syaratSurat.map((item, index) => (
                <InputFileGeneralCoba
                  key={index}
                  name={formData.dokumen_upload}
                  label={item.nama}
                  tipeFile=".pdf"
                  ukuranFile={5}
                  selectedFile={formData.dokumen_upload}
                  onFileInputChange={(e) => handleUploadFormSubmit(item.id, e.value)}
                  required
                />
              ))}
            </>
          ) : (
            <>
              <KetentuanPerizinan />
              <div className="flex items-center gap-4 h-fit">
                <input className="w-5 h-5" type="checkbox" name="setuju" id="setuju" checked={isChecked} onChange={handleCheckboxChange} />
                <label htmlFor="setuju">Saya telah telah bersedia mengikuti persyaratan yang ada pada formulir komitmen perizinan ini.</label>
              </div>
            </>
          )}
        </CardGeneral>
        {!showKetentuanSection ? (
          <button type="button" onClick={toggleKetentuanSection} className={`py-2 px-4 text-center bg-brand-200 w-full rounded-lg text-base font-semibold text-neutral-800 block`}>
            Selanjutnya
          </button>
        ) : (
          <button
            type="button"
            onClick={() => handleSubmitPengajuan()}
            className={`py-2 px-4 text-center w-full rounded-lg text-base font-semibold block ${!isChecked ? "bg-neutral-200 text-neutral-400" : "bg-brand-500 text-white"}`}
            disabled={!isChecked}
          >
            Ajukan Perizinan
          </button>
        )}
      </form>
    </div>
  );
};

const FormUploadPengajuanOperasional = () => {
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

export default FormUploadPengajuanOperasional;

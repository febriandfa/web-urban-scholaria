import React, { useState } from "react";
import DragDropUploadGeneral from "../general-components/DragDropUploadGenera;";
import { userService } from "../../services";
import { alertNextSurveyor } from "../../assets";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UnggahSuratHasilSurveyPopup = ({ close }) => {
  // const navigate = useNavigate();
  const IDSurvey = localStorage.getItem("SurveyID");

  const [formData, setFormData] = useState({
    dokumen_survey: null,
    foto_survey: null,
  });

  const handleHasilSurveySubmit = async () => {
    let form = new FormData();
    form.append("dokumen_survey", formData.dokumen_survey);
    form.append("foto_survey", formData.foto_survey);
    try {
      const response = await userService.postHasilSurvey(IDSurvey, form);
      console.log("Unggah Hasil Survey Done", response);
      triggerAlert();
    } catch (error) {
      console.error(error);
    }
  };

  const triggerAlert = () => {
    // e.preventDefault();
    Swal.fire({
      // imageUrl: alertNextSurveyor,
      // imageHeight: 131,
      // imageWidth: 131,
      icon: "success",
      // title: "TUGAS SURVEY BERHASIL DISELESAIKAN",
      // text: "Terima kasih telah menyelesaikan tugas survey.",
      title: "UPLOAD HASIL SURVEY BERHASIL",
      text: "Upload telah berhasil lanjutkan tahap berikutnya",
      confirmButtonText: "Lanjut",
    }).then(() => {
      close();
      window.location.reload();
    });
  };

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleDrop = (files) => {
    setUploadedFiles(files);
    setFormData((prevData) => ({
      ...prevData,
      dokumen_survey: files[0],
    }));
  };

  const [uploadedFilesFoto, setUploadedFilesFoto] = useState([]);

  const handleDropFoto = (files) => {
    setUploadedFilesFoto(files);
    setFormData((prevData) => ({
      ...prevData,
      foto_survey: files[0],
    }));
  };

  return (
    <div className="bg-white p-10 rounded-3xl w-[60rem] h-fit">
      {/* <div className="h-[30rem]"> */}
      <h1 className="text-brand-500 font-semibold text-center text-2xl">Hasil Survey</h1>
      <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-4" />
      <div className="grid grid-cols-2 gap-x-10">
        <div>
          <h4 className="font-semibold text-lg text-center">Upload Surat Hasil Survey</h4>
          <p className="text-neutral-500 text-xs text-center mb-3">.pdf</p>
          <DragDropUploadGeneral height="h-[18rem]" onDrop={handleDrop} uploadedFiles={uploadedFiles} />
        </div>
        <div>
          <h4 className="font-semibold text-lg text-center">Upload Foto Hasil Survey</h4>
          <p className="text-neutral-500 text-xs text-center mb-3">.png, .jpg, .jpeg</p>
          <DragDropUploadGeneral height="h-[18rem]" onDrop={handleDropFoto} uploadedFiles={uploadedFilesFoto} />
        </div>
      </div>
      <button className="mt-6 py-2 px-4 bg-brand-500 w-full rounded-lg text-base font-semibold text-white" type="button" onClick={() => handleHasilSurveySubmit()}>
        Simpan
      </button>
      {/* </div> */}
    </div>
  );
};

export default UnggahSuratHasilSurveyPopup;

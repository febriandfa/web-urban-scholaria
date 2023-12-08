import React, { useState } from "react";
import Swal from "sweetalert2";
import { alertNextSurveyor } from "../../assets";
import InputDateGeneral from "../general-components/InputDateGeneral";
import InputTextAreaGeneral from "../general-components/InputTextAreaGeneral";
import InputTextGeneral from "../general-components/InputTextGeneral";
import DragDropUploadGeneral from "../general-components/DragDropUploadGenera;";
import InputNamaFilterDashboardAdministrator from "../dashboard-administrator-components/InputNamaFilterDashboardAdministrator";

const PenugasanSurveyPopup = ({ close }) => {
  const triggerAlert = (e) => {
    e.preventDefault();
    Swal.fire({
      imageUrl: alertNextSurveyor,
      imageHeight: 131,
      imageWidth: 131,
      title: "TUGAS BERHASIL TERKIRIM",
      text: "Tugas sudah terkirim ke surveyor, pantau hasil survey di menu pengesahan",
      confirmButtonText: "Lanjut",
    }).then(() => {
      close();
    });
  };

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleDrop = (files) => {
    setUploadedFiles(files);
    // console.log(files);
  };

  return (
    <div className="p-4 w-[99%] rounded-xl bg-white">
      <div className="h-[30rem] overflow-y-auto p-2">
        <h1 className="text-2xl font-semibold text-center text-brand-500">Penugasan Survey</h1>
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 mt-2 mb-4" />
        <form action="">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <InputTextGeneral name="nama-tugas" label="Nama Tugas" placeholder="Beri nama tugas survey..." required />
              <InputNamaFilterDashboardAdministrator required />
              <InputTextAreaGeneral name="deskripsi" id="deskripsi" label="Deskripsi Tugas" placeholder="Jelaskan detail tugas..." required />
              <InputDateGeneral name="tanggal-tugas" label="Tanggal Penugasan" required />
              <InputDateGeneral name="tanggal-tenggat" label="Tanggal Tenggat" required />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-center">Upload Surat Tugas</h2>
              <a className="text-xs text-brand-500 text-center block mb-2" href="#">
                Unduh Template Surat Tugas
              </a>
              <DragDropUploadGeneral onDrop={handleDrop} uploadedFiles={uploadedFiles} />
            </div>
          </div>
          <button className="py-2 px-4 bg-brand-500 w-full rounded-lg text-base font-semibold text-white" type="submit" onClick={triggerAlert}>
            Kirim Penugasan
          </button>
        </form>
      </div>
    </div>
  );
};

export default PenugasanSurveyPopup;

import React, { useState, useEffect } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import DragDropUploadGeneral from "../../components/general-components/DragDropUploadGenera;";
import Swal from "sweetalert2";
import { alertPenerbitan } from "../../assets";

const TerbitkanPerizinanVerifikator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleDrop = (files) => {
    setUploadedFiles(files);
    // console.log(files);
  };

  const triggerAlert = (e) => {
    e.preventDefault();
    Swal.fire({
      imageUrl: alertPenerbitan,
      imageHeight: 131,
      imageWidth: 131,
      title: "PERIZINAN TELAH TERBIT",
      text: "Selamat Surat Perizinan telah terbit dan terkirim ke pemohon",
      confirmButtonText: "Lanjut",
    });
  };

  return (
    <MainPageLayout>
      <div className="h-40 w-full bg-[url('./assets/images/background-pengajuan-header.png')] bg-cover bg-center rounded-lg mb-4">
        <h1 className="font-semibold text-4xl text-white text-center flex flex-col justify-center items-center h-full">TERBITKAN PERIZINAN</h1>
      </div>
      <h2 className="text-lg font-semibold text-center">Upload Surat Perizinan</h2>
      <a className="text-xs text-brand-500 text-center block mb-2" href="#">
        Unduh Template Surat Perizinan Pembangunan TK
      </a>
      <div className="w-4/5 mx-auto mb-8">
        <DragDropUploadGeneral onDrop={handleDrop} uploadedFiles={uploadedFiles} />
      </div>
      <button className="py-2 px-4 bg-brand-500 w-full rounded-lg text-base font-semibold text-white" type="submit" onClick={triggerAlert}>
        Terbitkan Perizinan
      </button>
    </MainPageLayout>
  );
};

export default TerbitkanPerizinanVerifikator;

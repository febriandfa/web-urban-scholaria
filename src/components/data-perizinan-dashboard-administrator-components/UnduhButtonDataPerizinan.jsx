import FileSaver from "file-saver";
import JSZip from "jszip";
import React from "react";

const UnduhButtonDataPerizinan = ({ idSurat, fileName }) => {
  // const handleDownload = () => {
  //   fetch(`https://urbanscholaria.my.id/api/surat/` + idSurat + `/cetak-kwitansi`)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.blob();
  //     })
  //     .then((blob) => {
  //       const href = window.URL.createObjectURL(new Blob([blob]));
  //       const link = document.createElement("a");
  //       link.href = href;
  //       link.setAttribute("download", fileName);
  //       document.body.appendChild(link);
  //       link.click();
  //       document.body.removeChild(link);
  //     })
  //     .catch((error) => {
  //       console.error("There has been a problem with your fetch operation:", error);
  //     });
  // };

  const handleDownload = async () => {
    const urls = [
      `https://urbanscholaria.my.id/api/surat/` + idSurat + `/cetak-kwitansi`,
      `https://urbanscholaria.my.id/api/surat/` + idSurat + `/cetak-surat`,
      `https://urbanscholaria.my.id/api/surat/` + idSurat + `/cetak-surat-legalitas`,
    ];

    const zip = new JSZip();
    const promises = urls.map(async (url, index) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to download file ${index + 1}`);
        }
        const blob = await response.blob();

        let fileName;
        switch (index) {
          case 0:
            fileName = "Dokumen Bukti Pengajuan.pdf";
            break;
          case 1:
            fileName = "Dokumen Perizinan.pdf";
            break;
          case 2:
            fileName = "Dokumen Legalitas.pdf";
            break;
          default:
            fileName = `Dokumen_${index + 1}.pdf`;
        }

        zip.file(fileName, blob);
      } catch (error) {
        console.error(error);
      }
    });

    Promise.all(promises)
      .then(() => {
        zip.generateAsync({ type: "blob" }).then((content) => {
          FileSaver.saveAs(content, `Dokumen_${idSurat}.zip`);
        });
      })
      .catch((error) => {
        console.error("Error downloading files:", error);
      });
  };

  return (
    <button className="font-semibold text-brand-500 flex items-center gap-2" onClick={handleDownload}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 16L4 17C4 18.6569 5.34315 20 7 20L17 20C18.6569 20 20 18.6569 20 17L20 16M16 12L12 16M12 16L8 12M12 16L12 4" stroke="#191D88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Unduh
    </button>
  );
};

export default UnduhButtonDataPerizinan;

import React, { useEffect, useState } from "react";
import TitlePerizinan from "../../../components/pengajuan-perizinan-components/TitlePerizinan";
import PerizinanPageLayout from "../../../layouts/PerizinanPageLayout";
import DeskripsiPerizinan from "../../../components/pengajuan-perizinan-components/DeskripsiPerizinan";
import InformasiTambahan from "../../../components/pengajuan-perizinan-components/InformasiTambahan";
import LinkButtonGeneral from "../../../components/general-components/LinkButtonGeneral";
import syaratPeangajuanOperasionalTK from "../../../utils/SyaratPengajuanPerizinanTKData";
import { userService } from "../../../services";
import LoadingPopup from "../../../components/popup-components/LoadingPopup";
import { getKategoriPerizinan, getSuratJenisID, getToken } from "../../../services/storage.service";
import LinkBackGeneral from "../../../components/general-components/LinkBackGeneral";

const InformasiPerizinanHeader = ({ title, kategori }) => {
  return <TitlePerizinan subtitle={`INFORMASI PERIZINAN ${kategori}`} title={`${title} ${kategori}`} />;
};

const InformasiPerizinanBody = ({ loading, linkAlur, linkSyarat, kategori, namaPerizinan }) => {
  const syaratPengajuanOperasionalTKData = syaratPeangajuanOperasionalTK;
  const isLoggedIn = getToken() !== null;
  const isRolePemohon = localStorage.getItem("UserDetail");

  return (
    <>
      <LoadingPopup loading={loading} />
      <div className="mb-4">
        <LinkBackGeneral link="/informasi-perizinan" />
      </div>
      <div className="grid grid-cols-5 gap-20">
        <div className="col-span-3">
          <DeskripsiPerizinan
            desc={`Urban Scholaria merangkul ${namaPerizinan} untuk jenjang ${kategori} dengan fokus pada menciptakan lingkungan belajar yang terstruktur, aman, dan mendukung pertumbuhan optimal anak-anak. Dengan formulir pengajuan yang terintegrasi dan panduan yang jelas, aplikasi ini mempermudah proses administratif untuk memastikan fasilitas ${kategori} sesuai dengan standar peraturan pendidikan.`}
            legal="Semua keabsahan perizinan melalui platform Urban Scholaria telah resmi disetujui dan mendapat pengakuan oleh pemerintah setempat."
            syarat={syaratPengajuanOperasionalTKData}
            catatan="Mohon diingat bahwa setiap permohonan harus memastikan kepatuhan dengan regulasi terkini dan aktif berkomunikasi dengan instansi terkait. Keharusan untuk memberikan informasi yang akurat sangat penting, karena kelalaian dapat mengakibatkan penolakan permohonan. Perlu dicatat bahwa URBAN SCHOLARIA tidak memiliki kewenangan untuk mengubah keputusan pemerintah. Oleh karena itu, pemohon diharapkan mengikuti proses perizinan dengan cermat."
          />
        </div>
        <div className="col-span-2">
          <InformasiTambahan linkAlur={linkAlur} linkSyarat={linkSyarat} />
          {isLoggedIn && isRolePemohon === "Pemohon" && (
            <div className="mx-auto w-fit mt-14">
              {/* <LinkButtonGeneral text="Ajukan Perizinan" link="/form-pengajuan-operasional-tk" /> */}
              <LinkButtonGeneral text="Ajukan Perizinan" link="/pengajuan-perizinan" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const PerizinanOperasional = () => {
  const jenisSuratID = getSuratJenisID();
  const [loading, setLoading] = useState(true);
  const [jenisPerizinan, setJenisPerizinan] = useState([]);

  const jenisPerizinanData = async (surat_jenis_id) => {
    try {
      setLoading(true);
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

  const kategoriPerizinan = getKategoriPerizinan();
  let kategori;
  if (kategoriPerizinan === "TK") {
    kategori = "Taman Kanak-Kanak";
  } else if (kategoriPerizinan === "SD") {
    kategori = "Sekolah Dasar";
  } else if (kategoriPerizinan === "SMP") {
    kategori = "Sekolah Menengah Pertama";
  } else if (kategoriPerizinan === "SMA") {
    kategori = "Sekolah Menengah Akhir";
  }

  return (
    <PerizinanPageLayout
      childrenHeader={<InformasiPerizinanHeader title={jenisPerizinan.nama} kategori={kategori} />}
      childrenBody={<InformasiPerizinanBody loading={loading} linkAlur={jenisSuratID} linkSyarat={jenisSuratID} kategori={kategori} namaPerizinan={jenisPerizinan?.nama} />}
    />
  );
};

export default PerizinanOperasional;

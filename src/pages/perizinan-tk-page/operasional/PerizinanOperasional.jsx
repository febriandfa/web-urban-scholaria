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

const InformasiPerizinanHeader = ({ title }) => {
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

  return <TitlePerizinan subtitle={`INFORMASI PERIZINAN ${subtitle}`} title={`${title} ${subtitle}`} />;
};

const InformasiPerizinanBody = ({ loading, link }) => {
  const syaratPengajuanOperasionalTKData = syaratPeangajuanOperasionalTK;
  const isLoggedIn = getToken() !== null;

  return (
    <>
      <LoadingPopup loading={loading} />
      <div className="grid grid-cols-5 gap-20">
        <div className="col-span-3">
          <DeskripsiPerizinan
            desc="Urban Scholaria merangkul pengajuan perizinan bangunan Taman Kanak-Kanak dengan fokus pada menciptakan lingkungan belajar yang terstruktur, aman, dan mendukung pertumbuhan optimal anak-anak. Dengan formulir pengajuan yang terintegrasi dan panduan yang jelas, aplikasi ini mempermudah proses administratif untuk memastikan fasilitas TK sesuai dengan standar peraturan pendidikan."
            legal="Semua keabsahan perizinan melalui platform Urban Scholaria telah resmi disetujui dan mendapat pengakuan oleh pemerintah setempat. "
            syarat={syaratPengajuanOperasionalTKData}
            catatan="Mohon diingat bahwa setiap permohonan harus memastikan kepatuhan dengan regulasi terkini dan aktif berkomunikasi dengan instansi terkait. Keharusan untuk memberikan informasi yang akurat sangat penting, karena kelalaian dapat mengakibatkan penolakan permohonan. Perlu dicatat bahwa URBAN SCHOLARIA tidak memiliki kewenangan untuk mengubah keputusan pemerintah. Oleh karena itu, pemohon diharapkan mengikuti proses perizinan dengan cermat."
          />
        </div>
        <div className="col-span-2">
          <InformasiTambahan alur="Administrasi - Verifikasi - Survey Lokasi" linkSyarat={link} jumlah="15" />
          {isLoggedIn && (
            <div className="mx-auto w-fit mt-14">
              <LinkButtonGeneral text="Ajukan Perizinan" link="/form-pengajuan-operasional-tk" />
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

  return <PerizinanPageLayout childrenHeader={<InformasiPerizinanHeader title={jenisPerizinan.nama} />} childrenBody={<InformasiPerizinanBody loading={loading} link={jenisSuratID} />} />;
};

export default PerizinanOperasional;

import React from "react";
import TitlePerizinan from "../../../components/pengajuan-perizinan-components/TitlePerizinan";
import PerizinanPageLayout from "../../../layouts/PerizinanPageLayout";
import DeskripsiPerizinan from "../../../components/pengajuan-perizinan-components/DeskripsiPerizinan";
import InformasiTambahan from "../../../components/pengajuan-perizinan-components/InformasiTambahan";
import syaratPeangajuanOperasionalTK from "../../../utils/SyaratPengajuanPerizinanTKData";
import LinkButtonGeneral from "../../../components/general-components/LinkButtonGeneral";

const InformasiPerizinanHeader = () => {
  return <TitlePerizinan subtitle="INFORMASI PERIZINAN TAMAN KANAK-KANAK" title="Perizinan Operasional Taman Kanak-Kanak" />;
};

const InformasiPerizinanBody = () => {
  const syaratPengajuanOperasionalTKData = syaratPeangajuanOperasionalTK;

  return (
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
        <InformasiTambahan alur="Administrasi - Verifikasi - Survey Lokasi" durasi="14" jumlah="13" />
        <div className="mx-auto w-fit mt-14">
          <LinkButtonGeneral text="Ajukan Perizinan" link="/form-pengajuan-operasional-tk" />
        </div>
      </div>
    </div>
  );
};

const PerizinanOperasional = () => {
  return <PerizinanPageLayout childrenHeader={<InformasiPerizinanHeader />} childrenBody={<InformasiPerizinanBody />} />;
};

export default PerizinanOperasional;

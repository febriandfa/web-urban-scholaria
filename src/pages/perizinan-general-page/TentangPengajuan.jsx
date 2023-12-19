import React, { useEffect, useState } from "react";
import { bgInfoIzin } from "../../assets";
import PerizinanPageLayout from "../../layouts/PerizinanPageLayout";
import TitlePerizinan from "../../components/pengajuan-perizinan-components/TitlePerizinan";
import CardGeneral from "../../components/general-components/CardGeneral";
import { userService } from "../../services";
import LinkBackGeneral from "../../components/general-components/LinkBackGeneral";

const TentangPerizinanHeader = () => {
  return <TitlePerizinan subtitle="INFORMASI AJUKAN PERIZINAN" title="Nikmati Kemudahan Perizinan Sekolah Secara Digital" />;
};

const TentangPerizinanBody = () => {
  const [jenisPerizinan, setJenisPerizinan] = useState([]);

  const jenisPerizinanData = async () => {
    try {
      const response = await userService.getSuratJenis();
      console.log("Hasil Get Jenis Surat:", response);
      setJenisPerizinan(response?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    jenisPerizinanData();
  }, []);

  return (
    <div className="">
      <LinkBackGeneral />
      <img className="w-[35rem] mx-auto mb-20" src={bgInfoIzin} alt="" />
      <p className="mb-12">
        Pengajuan Perizinan : proses yang dapat dilakukan oleh individu, bisnis, lembaga atau yang lainnya untuk mendapatkan izin dari pihak yang berwenang, seperti pemerintah atau lembaga regulasi. Pengajuan perizinan ini dapat digunakan
        untuk berbagai hal seperti, izin operasional usaha bisnis, izin pembangunan lembaga, serta izin lainnya guna melaksanakan kegiatan atau proyek tertentu. Izin ini diperlukan untuk pegangan dalam melaksanakan kegiatan atau proyek
        tertentu, serta memastikan bahwa kegiatan tersebut telah memenuhi standar serta peraturan yang berlaku. Proses pengajuan ini terdapat beberapa proses seperti, pengumpulan dokumen, pengisian formulir aplikasi, penilaian dokumen,
        serta persetujuan dari pihak yang berwenang.
        <br />
        <br />
        Dokumen perizinan ini dapat digunakan sebagai pegangan dalam melaksanakan sebuah kegiatan atau proyek tertentu. Manfaat yang didapat dari dokumen perizinan ini adalah sebagai berikut :
        <br />
        <br />
        <ol className="list-decimal pl-10">
          <li>Dokumen perizinan memberikan legalitas resmi untuk menjalankan aktivitas atau proyek tertentu, hal ini menyangkut izin beroperasi yang sah.</li>
          <li>Dokumen perizinan dapat membantu memberikan perlindungan mengenai Keselamatan, lingkungan, serta kesehatan yang ketat.</li>
          <li>Dengan dokumen perizinan yang valid membantu lembaga membangun kepercayaan masyarakat, dan menunjukkan bahwa lembaga tersebut telah melewati survey dan persetujuan dari pihak yang berwenang.</li>
          <li>Dokumen juga dapat membantu memberikan perlindungan mengenai kepentingan publik dengan memastikan bahwa lembaga tersebut telah dinilai secara teliti dan mematuhi regulasi yang berlaku.</li>
        </ol>
      </p>
      <h1 className="text-lg font-semibold mb-4">Informasi Perizinan</h1>
      <div className="flex gap-16">
        <CardGeneral customClass="w-72">
          <div className="flex items-center gap-7">
            <svg className="bg-brand-500 rounded" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 8C8 5.79086 9.79086 4 12 4H21.1716C22.2324 4 23.2499 4.42143 24 5.17157L30.8284 12C31.5786 12.7501 32 13.7676 32 14.8284V32C32 34.2091 30.2091 36 28 36H12C9.79086 36 8 34.2091 8 32V8ZM12 20C12 18.8954 12.8954 18 14 18H26C27.1046 18 28 18.8954 28 20C28 21.1046 27.1046 22 26 22H14C12.8954 22 12 21.1046 12 20ZM14 26C12.8954 26 12 26.8954 12 28C12 29.1046 12.8954 30 14 30H26C27.1046 30 28 29.1046 28 28C28 26.8954 27.1046 26 26 26H14Z"
                fill="white"
              />
            </svg>
            <div>
              <h1 className="font-semibold">{jenisPerizinan.length}</h1>
              <p className="font-sm text-neutral-500">Perizinan</p>
            </div>
          </div>
        </CardGeneral>
        <CardGeneral customClass="w-72">
          <div className="flex items-center gap-7">
            <svg className="bg-brand-500 rounded" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 8C8 5.79086 9.79086 4 12 4H28C30.2091 4 32 5.79086 32 8V32C33.1046 32 34 32.8954 34 34C34 35.1046 33.1046 36 32 36H25C24.4477 36 24 35.5523 24 35V30C24 28.8954 23.1046 28 22 28H18C16.8954 28 16 28.8954 16 30V35C16 35.5523 15.5523 36 15 36H8C6.89543 36 6 35.1046 6 34C6 32.8954 6.89543 32 8 32V8ZM14 10H18V14H14V10ZM18 18H14V22H18V18ZM22 10H26V14H22V10ZM26 18H22V22H26V18Z"
                fill="white"
              />
            </svg>
            <div>
              <h1 className="font-semibold">4</h1>
              <p className="font-sm text-neutral-500">Kategori Sekolah</p>
            </div>
          </div>
        </CardGeneral>
      </div>
    </div>
  );
};

const TentangPengajuan = () => {
  return <PerizinanPageLayout childrenHeader={<TentangPerizinanHeader />} childrenBody={<TentangPerizinanBody />} />;
};

export default TentangPengajuan;

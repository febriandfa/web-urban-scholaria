import React, { useEffect, useState } from "react";
import PerizinanPageLayout from "../../../layouts/PerizinanPageLayout";
import TitlePerizinan from "../../../components/pengajuan-perizinan-components/TitlePerizinan";
import LoadingPopup from "../../../components/popup-components/LoadingPopup";
import { userService } from "../../../services";
import { getKategoriPerizinan, getSuratJenisID } from "../../../services/storage.service";
import { bgInfoIzin } from "../../../assets";
import LinkBackGeneral from "../../../components/general-components/LinkBackGeneral";

const PersyaratanPerizinanHeader = () => {
  return <TitlePerizinan title="PERSYARATAN PERIZINAN" />;
};

const PersyaratanPerizinanBody = ({ loading, title, syarat, idJenis }) => {
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

  return (
    <div>
      <div className="mb-4">
        <LinkBackGeneral />
      </div>
      <LoadingPopup loading={loading} />
      <h1 className="text-xl font-semibold text-center text-brand-500 mb-8">
        {title} {subtitle}
      </h1>
      <div className="grid grid-cols-2 w-[90%] mx-auto gap-16">
        <div>
          <h4 className="text-lg font-semibold mb-2">Persyaratan :</h4>
          <ol className="list-decimal pl-8">
            {syarat.map((syaratItem) => (
              <li className="text-base text-neutral-500 capitalize">{syaratItem.nama}</li>
            ))}
          </ol>
        </div>
        <img className="self-center" src={bgInfoIzin} alt="" />
      </div>
    </div>
  );
};

const PersyaratanOperasional = () => {
  const jenisSuratID = getSuratJenisID();
  const [loading, setLoading] = useState(true);
  const [syaratSurat, setSyaratSurat] = useState([]);
  const [jenisPerizinan, setJenisPerizinan] = useState([]);

  // const suratJenisID = getSuratJenisID();

  const syaratPerizinanData = async (surat_jenis_id) => {
    try {
      const response = await userService.getSyaratBySuratJenisID(surat_jenis_id);
      setSyaratSurat(response?.data?.data);
      setLoading(false);
      console.log("Syarat Response:", response);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const jenisPerizinanData = async (surat_jenis_id) => {
    try {
      setLoading(true);
      const response = await userService.getSuratJenisDetailByID(surat_jenis_id);
      console.log("Hasil Get Detail Jenis Surat:", response);
      setJenisPerizinan(response?.data?.data);
      //   setLoading(false);
    } catch (error) {
      console.error(error);
      //   setLoading(false);
    }
  };

  useEffect(() => {
    syaratPerizinanData(jenisSuratID);
    jenisPerizinanData(jenisSuratID);
    console.log("state", syaratSurat);
  }, []);

  return <PerizinanPageLayout childrenHeader={<PersyaratanPerizinanHeader />} childrenBody={<PersyaratanPerizinanBody loading={loading} title={jenisPerizinan.nama} syarat={syaratSurat} idJenis={jenisSuratID} />} />;
};

export default PersyaratanOperasional;

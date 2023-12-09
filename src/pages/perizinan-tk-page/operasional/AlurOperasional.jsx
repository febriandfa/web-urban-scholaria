import React, { useEffect, useState } from "react";
import TitlePerizinan from "../../../components/pengajuan-perizinan-components/TitlePerizinan";
import PerizinanPageLayout from "../../../layouts/PerizinanPageLayout";
import { getKategoriPerizinan, getSuratJenisID } from "../../../services/storage.service";
import LinkBackGeneral from "../../../components/general-components/LinkBackGeneral";
import { bgHome } from "../../../assets";
import { userService } from "../../../services";

const AlurPerizinanHeader = () => {
  return <TitlePerizinan title="ALUR PERIZINAN" />;
};

const AlurPerizinanBody = ({ title, idJenis }) => {
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
    <div className="">
      <div className="mb-4">
        <LinkBackGeneral link={`/pengajuan-perizinan/${idJenis}`} />
      </div>
      <h1 className="text-xl font-semibold text-center text-brand-500 mb-8">
        {title} {subtitle}
      </h1>
      <img src={bgHome} alt="" />
    </div>
  );
};

const AlurOperasional = () => {
  const jenisSuratID = getSuratJenisID();
  const [jenisPerizinan, setJenisPerizinan] = useState([]);

  const suratJenisID = getSuratJenisID();

  const jenisPerizinanData = async (surat_jenis_id) => {
    try {
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
    jenisPerizinanData(jenisSuratID);
  }, []);

  return <PerizinanPageLayout childrenHeader={<AlurPerizinanHeader />} childrenBody={<AlurPerizinanBody title={jenisPerizinan.nama} idJenis={suratJenisID} />} />;
};

export default AlurOperasional;

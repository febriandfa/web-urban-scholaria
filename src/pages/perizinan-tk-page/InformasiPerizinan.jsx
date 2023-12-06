import React, { useEffect, useState } from "react";
import HeaderPerizinan from "../../components/pengajuan-perizinan-components/HeaderPerizinan";
import { iconSD2, iconSMA2, iconSMP2, iconTK2, iconTKIzin } from "../../assets";
import PerizinanPageLayout from "../../layouts/PerizinanPageLayout";
import KategoriPerizinan from "../../components/pengajuan-perizinan-components/KategoriPerizinan";
import kategoriTK from "../../utils/DaftarKategoriTKData";
import { userService } from "../../services";
import LoadingPopup from "../../components/popup-components/LoadingPopup";
import LinkBackGeneral from "../../components/general-components/LinkBackGeneral";
import { getKategoriPerizinan } from "../../services/storage.service";

const InformasiPerizinanHeader = () => {
  const kategoriPerizinan = getKategoriPerizinan();
  let img, title;
  if (kategoriPerizinan === "TK") {
    img = iconTK2;
    title = "Taman Kanak-Kanak";
  } else if (kategoriPerizinan === "SD") {
    img = iconSD2;
    title = "Sekolah Dasar";
  } else if (kategoriPerizinan === "SMP") {
    img = iconSMP2;
    title = "Sekolah Menengah Pertama";
  } else if (kategoriPerizinan === "SMA") {
    img = iconSMA2;
    title = "Sekolah Menengah Akhir";
  }
  return <HeaderPerizinan img={img} title={title} link="/tentang-pengajuan-perizinan" />;
};

const InformasiPerizinanBody = () => {
  const [loading, setLoading] = useState(true);
  const [jenisPerizinan, setJenisPerizinan] = useState([]);
  const [panjangSyarat, setPanjangSyarat] = useState({});

  const jenisPerizinanData = async () => {
    try {
      const response = await userService.getSuratJenis();
      console.log("Hasil Get Jenis Surat:", response);
      setJenisPerizinan(response?.data?.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const panjangSyaratSuratData = async (id) => {
    try {
      const response = await userService.getSyaratBySuratJenisID(id);
      setPanjangSyarat((prevData) => ({
        ...prevData,
        [id]: response?.data?.data?.length || 0,
      }));
      console.log("Syarat Surat", response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    jenisPerizinanData();
  }, []);

  useEffect(() => {
    jenisPerizinan.forEach((jenis) => {
      panjangSyaratSuratData(jenis.id);
    });
  }, [jenisPerizinan]);

  return (
    <div>
      <LoadingPopup loading={loading} />
      <LinkBackGeneral link="/" />
      <p className="font-normal text-lg mb-5 w-[85%] mx-auto mt-5">
        Ditemukan <span className="text-brand-500">{jenisPerizinan.length} Kategori Perizinan</span>
      </p>
      <div className="flex flex-col gap-12 w-[85%] mx-auto">
        {jenisPerizinan.map((jenis, index) => (
          <KategoriPerizinan key={index} img={iconTKIzin} title={jenis.nama} syarat={panjangSyarat[jenis.id]} durasi="14" link={jenis.id} />
        ))}
      </div>
    </div>
  );
};

const InformasiPerizinan = () => {
  return <PerizinanPageLayout childrenHeader={<InformasiPerizinanHeader />} childrenBody={<InformasiPerizinanBody />} />;
};

export default InformasiPerizinan;

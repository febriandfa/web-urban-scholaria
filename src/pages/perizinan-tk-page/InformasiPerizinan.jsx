import React, { useEffect, useState } from "react";
import HeaderPerizinan from "../../components/pengajuan-perizinan-components/HeaderPerizinan";
import { bgPerizinanSD, bgPerizinanSMA, bgPerizinanSMP, bgPerizinanTK, iconSD2, iconSMA2, iconSMP2, iconTK2, iconTKIzin } from "../../assets";
import PerizinanPageLayout from "../../layouts/PerizinanPageLayout";
import KategoriPerizinan from "../../components/pengajuan-perizinan-components/KategoriPerizinan";
import kategoriTK from "../../utils/DaftarKategoriTKData";
import { userService } from "../../services";
import LoadingPopup from "../../components/popup-components/LoadingPopup";
import LinkBackGeneral from "../../components/general-components/LinkBackGeneral";
import { getKategoriPerizinan } from "../../services/storage.service";
import CheckTokenExpiry from "../../utils/functions/CheckTokenExpiry";
import { useNavigate } from "react-router-dom";

const InformasiPerizinanHeader = ({ img, title }) => {
  return <HeaderPerizinan img={img} title={title} link="/tentang-pengajuan-perizinan" />;
};

const InformasiPerizinanBody = ({ bgPerizinan }) => {
  const navigate = useNavigate();
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

  useEffect(() => {
    CheckTokenExpiry(navigate);
  }, [navigate]);

  return (
    <div>
      <LoadingPopup loading={loading} />
      <LinkBackGeneral link="/" />
      <p className="font-normal text-lg mb-5 w-[85%] mx-auto mt-5">
        Ditemukan <span className="text-brand-500">{jenisPerizinan.length} Kategori Perizinan</span>
      </p>
      <div className="flex flex-col gap-12 w-[85%] mx-auto">
        {jenisPerizinan.map((jenis, index) => (
          <KategoriPerizinan key={index} img={bgPerizinan} title={jenis.nama} syarat={panjangSyarat[jenis.id]} durasi="14" link={jenis.id} />
        ))}
      </div>
    </div>
  );
};

const InformasiPerizinan = () => {
  const kategoriPerizinan = getKategoriPerizinan();
  let img, title, bgPerizinan;
  if (kategoriPerizinan === "TK") {
    img = iconTK2;
    title = "Taman Kanak-Kanak";
    bgPerizinan = bgPerizinanTK;
  } else if (kategoriPerizinan === "SD") {
    img = iconSD2;
    title = "Sekolah Dasar";
    bgPerizinan = bgPerizinanSD;
  } else if (kategoriPerizinan === "SMP") {
    img = iconSMP2;
    title = "Sekolah Menengah Pertama";
    bgPerizinan = bgPerizinanSMP;
  } else if (kategoriPerizinan === "SMA") {
    img = iconSMA2;
    title = "Sekolah Menengah Akhir";
    bgPerizinan = bgPerizinanSMA;
  }

  return <PerizinanPageLayout childrenHeader={<InformasiPerizinanHeader img={img} title={title} />} childrenBody={<InformasiPerizinanBody bgPerizinan={bgPerizinan} />} />;
};

export default InformasiPerizinan;

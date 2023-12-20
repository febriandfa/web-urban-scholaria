import React, { useEffect, useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import { Link, useNavigate } from "react-router-dom";
import { userService } from "../../services";
import LoadingPopup from "../../components/popup-components/LoadingPopup";
import CheckTokenExpiry from "../../utils/functions/CheckTokenExpiry";
import { bgPerizinanSD, bgPerizinanSMA, bgPerizinanSMP, bgPerizinanTK, iconSD2, iconSMA2, iconSMP2, iconTK2 } from "../../assets";
import HeaderInformasiPerizinanAdminUtama from "../../components/dashboard-admin-utama-components/HeaderInformasiPerizinanAdminUtama";
import { getKategoriPerizinan } from "../../services/storage.service";

const InformasiPerizinanAdminUtama = () => {
  const [jenisPerizinan, setJenisPerizinan] = useState([]);
  const [loading, setLoading] = useState(false);

  const jenisPerizinanData = async () => {
    try {
      setLoading(true);
      const response = await userService.getSuratJenis();
      console.log("Hasil Get Jenis Surat:", response);
      setJenisPerizinan(response?.data?.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    jenisPerizinan.forEach(async (jenis) => {
      try {
        setLoading(true);
        const response = await userService.getSuratStatusVerifOperator(jenis.id);
        console.log(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    });
  }, [jenisPerizinan]);

  useEffect(() => {
    jenisPerizinanData();
  }, []);

  const handleJenisOnClick = (idSuratJenis) => {
    localStorage.setItem("SuratJenisID", idSuratJenis);
  };

  const navigate = useNavigate();

  useEffect(() => {
    CheckTokenExpiry(navigate);
  }, [navigate]);

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

  return (
    <MainPageLayout>
      <LoadingPopup loading={loading} />
      <HeaderInformasiPerizinanAdminUtama img={img} title={title} link="/tambah-perizinan-utama" />
      <p className="mt-6 mb-4">
        Ditemukan <span className="text-brand-500">{jenisPerizinan.length} Jenis Perizinan</span>
      </p>
      {jenisPerizinan.map((jenis, index) => (
        <div className="relative" key={index}>
          <Link className="flex justify-between items-center bg-neutral-100 rounded-lg py-4 px-8 my-5 shadow-md" onClick={() => handleJenisOnClick(jenis.id)} to="/edit-perizinan-utama">
            <h3 className="font-semibold text-lg">{jenis.nama}</h3>
            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.503 35.2971C16.5657 34.3598 16.5657 32.8402 17.503 31.9029L25.4059 24L17.503 16.0971C16.5657 15.1598 16.5657 13.6402 17.503 12.7029C18.4403 11.7657 19.9598 11.7657 20.8971 12.7029L30.4971 22.3029C31.4344 23.2402 31.4344 24.7598 30.4971 25.6971L20.8971 35.2971C19.9598 36.2343 18.4403 36.2343 17.503 35.2971Z"
                fill="#1E293B"
              />
            </svg>
          </Link>
        </div>
      ))}
    </MainPageLayout>
  );
};

export default InformasiPerizinanAdminUtama;

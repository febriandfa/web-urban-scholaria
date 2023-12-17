import React, { useEffect, useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import CariPermohonanDashboardUser from "../../components/dashboard-user-components/CariPermohonanDashboardUser";
import CardGeneral from "../../components/general-components/CardGeneral";
import { Link } from "react-router-dom";
import { userService } from "../../services";
import LoadingPopup from "../../components/popup-components/LoadingPopup";

const JenisPerizinanVerifikasiOperator = () => {
  const [jenisPerizinan, setJenisPerizinan] = useState([]);
  const [totalPerizinanPerJenis, setTotalPerizinanPerJenis] = useState([0]);
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
        setTotalPerizinanPerJenis((prevTotal) => ({
          ...prevTotal,
          [jenis.id]: response?.data?.data?.length || 0,
        }));
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

  return (
    <MainPageLayout>
      <LoadingPopup loading={loading} />
      <div className="h-40 w-full bg-[url('./assets/images/background-pengajuan-header.png')] bg-cover bg-center rounded-lg mb-4">
        <h1 className="font-semibold text-4xl text-white text-center flex flex-col justify-center items-center h-full">VERIFIKASI PERMOHONAN PERIZINAN</h1>
      </div>
      {/* <CariPerizinanDashboardAdministrator /> */}
      <CariPermohonanDashboardUser />
      <p className="mt-6 mb-4">
        Ditemukan <span className="text-brand-500">{jenisPerizinan.length} Jenis Perizinan</span>
      </p>
      {jenisPerizinan.map((jenis, index) => (
        <div className="relative" key={index}>
          <div className="flex justify-center items-center rounded-full bg-brand-500 absolute w-6 h-6 -right-1 -top-2 text-white text-xs">{totalPerizinanPerJenis[jenis.id]}</div>
          <Link className="flex justify-between items-center bg-neutral-100 rounded-lg py-4 px-8 my-5 shadow-md" onClick={() => handleJenisOnClick(jenis.id)} to="/verifikasi-dokumen-operator">
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

export default JenisPerizinanVerifikasiOperator;

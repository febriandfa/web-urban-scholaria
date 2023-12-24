import React, { useState, useEffect, useRef } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import ProfileBarDashboardAdministrator from "../../components/dashboard-administrator-components/ProfileBarDashboardAdministrator";
import StatPerizinanDashboardAdministrator from "../../components/dashboard-administrator-components/StatPerizinanDashboardAdministrator";
import CardGeneral from "../../components/general-components/CardGeneral";
import DoughnutChartDashboardAdministrator from "../../components/dashboard-administrator-components/DoughnutChartDashboardAdministrator";
import VerticalBarChartDashboardAdministrator from "../../components/dashboard-administrator-components/VerticalBarChartDashboardAdministrator";
import HorizontalBarChartDashboardAdministrator from "../../components/dashboard-administrator-components/HorizontalBarChartDashboardAdministrator";
import { useNavigate } from "react-router-dom";
import CheckTokenExpiry from "../../utils/functions/CheckTokenExpiry";
import { userService } from "../../services";
import html2pdf from "html2pdf.js";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const DashboardAdministrator = () => {
  const [totalPengajuan, setTotalPengajuan] = useState();
  const [totalPengajuanDiterima, setTotalPengajuanDiterima] = useState();
  const [totalPengajuanDitolak, setTotalPengajuanDitolak] = useState();
  const [totalPengajuanSurvey, setTotalPengajuanSurvey] = useState();
  const [totalByJenis1, setTotalByJenis1] = useState([]);
  const [totalByJenis2, setTotalByJenis2] = useState([]);
  const [totalByJenis3, setTotalByJenis3] = useState([]);
  const [totalByKategoriTK, setTotalByKategoriTK] = useState([]);
  const [totalByKategoriSD, setTotalByKategoriSD] = useState([]);
  const [totalByKategoriSMP, setTotalByKategoriSMP] = useState([]);
  const [totalByKategoriSMA, setTotalByKategoriSMA] = useState([]);

  const labelChartJenisValue = [`Pembangunan: ${totalByJenis1}`, `Operasional: ${totalByJenis2}`, `Perubahan Operasional: ${totalByJenis3}`];
  const labelChartKategoriValue = [`TK: ${totalByKategoriTK}`, `SD: ${totalByKategoriSD}`, `SMP: ${totalByKategoriSMP}`, `SMA: ${totalByKategoriSMA}`];
  const labelChartBulanValue = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const labelChartWilayahValue = [
    "Bangkalan",
    "Banyuwangi",
    "Blitar",
    "Bojonegoro",
    "Bondowoso",
    "Gresik",
    "Jember",
    "Jombang",
    "Kediri",
    "Lamongan",
    "Lumajang",
    "Madiun",
    "Magetan",
    "Malang",
    "Mojokerto",
    "Nganjuk",
    "Ngawi",
    "Pacitan",
    "Pamekasan",
    "Pasuruan",
    "Ponorogo",
    "Probolinggo",
    "Sampang",
    "Sidoarjo",
    "Situbondo",
    "Sumenep",
    "Trenggalek",
    "Tuban",
    "Tulungagung",
    "Kota Batu",
    "Kota Blitar",
    "Kota Kediri",
    "Kota Madiun",
    "Kota Malang",
    "Kota Mojokerto",
    "Kota Pasuruan",
    "Kota Probolinggo",
    "Kota Surabaya",
  ];

  const [dataSetPerizinanByBulan, setDataSetPerizinanByBulan] = useState([]);

  const initialTotalByBulan = labelChartBulanValue.reduce((acc, bulan, index) => {
    acc[bulan] = 0;
    return acc;
  }, {});

  const [totalByBulan, setTotalByBulan] = useState(initialTotalByBulan);

  const [dataSetPerizinanByWilayah, setDataSetPerizinanByWilayah] = useState([]);

  const initialTotalByWilayah = labelChartWilayahValue.reduce((acc, wilayah) => {
    acc[wilayah] = 0;
    return acc;
  }, {});

  const [totalByWilayah, setTotalByWilayah] = useState(initialTotalByWilayah);

  const getDataTotalPerizinan = async () => {
    try {
      const response = await userService.getSemuaPengajuan();
      const data = response?.data?.data;
      setTotalPengajuan(data.length);
      setTotalPengajuanDiterima(data.filter((item) => item?.status === "Selesai")?.length);
      setTotalPengajuanDitolak(data.filter((item) => item?.status === "Ditolak")?.length);
      setTotalPengajuanSurvey(data.filter((item) => item?.status === "Verifikasi Hasil Survey")?.length);
      setTotalByJenis1(data.filter((item) => item?.surat_jenis_id === "1")?.length);
      setTotalByJenis2(data.filter((item) => item?.surat_jenis_id === "2")?.length);
      setTotalByJenis3(data.filter((item) => item?.surat_jenis_id === "3")?.length);
      setTotalByKategoriTK(data.filter((item) => item?.kategori === "TK")?.length);
      setTotalByKategoriSD(data.filter((item) => item?.kategori === "SD")?.length);
      setTotalByKategoriSMP(data.filter((item) => item?.kategori === "SMP")?.length);
      setTotalByKategoriSMA(data.filter((item) => item?.kategori === "SMA")?.length);

      const updateTotalByBulan = () => {
        const counts = labelChartBulanValue.reduce((acc, bulan, index) => {
          acc[bulan] =
            data.filter((item) => {
              const date = new Date(item.created_at);
              return date.getMonth() === index;
            })?.length || 0;
          return acc;
        }, {});
        setTotalByBulan(counts);
        const dataSet = Object.values(counts);
        setDataSetPerizinanByBulan(dataSet);
      };
      updateTotalByBulan();

      const updateTotalByWilayah = () => {
        const counts = labelChartWilayahValue.reduce((acc, wilayah) => {
          acc[wilayah] = data.filter((item) => item?.user?.kabupaten_kota === wilayah)?.length || 0;
          return acc;
        }, {});
        setTotalByWilayah(counts);
        const dataSet = Object.values(counts);
        setDataSetPerizinanByWilayah(dataSet);
      };
      updateTotalByWilayah();
    } catch (error) {
      console.error(error);
    }
  };

  const dataSetPerizinanByJenis = [totalByJenis1, totalByJenis2, totalByJenis3];
  const dataSetPerizinanByKategori = [totalByKategoriTK, totalByKategoriSD, totalByKategoriSMP, totalByKategoriSMA];

  useEffect(() => {
    getDataTotalPerizinan();
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    CheckTokenExpiry(navigate);
  }, [navigate]);

  const chartRef = useRef(null);

  const downloadPDF = () => {
    const pdf = new jsPDF();
    const chartElement = chartRef.current;
    html2canvas(chartElement).then((canvas) => {
      const chartImage = canvas.toDataURL("image/png");
      pdf.addImage(chartImage, "PNG", 15, 10, 180, 270);
      pdf.save("myPDF.pdf");
    });
  };

  return (
    <MainPageLayout>
      <ProfileBarDashboardAdministrator />
      <div className="flex items-center justify-between my-8">
        <h1 className="font-semibold text-2xl text-brand-500">Dashboard Perizinan</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-lg" onClick={downloadPDF}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M3.33398 13.3337L3.33398 14.167C3.33398 15.5477 4.45327 16.667 5.83398 16.667L14.1673 16.667C15.548 16.667 16.6673 15.5477 16.6673 14.167L16.6673 13.3337M13.334 10.0003L10.0007 13.3337M10.0007 13.3337L6.66732 10.0003M10.0007 13.3337L10.0006 3.33366"
              stroke="#1E293B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Unduh Laporan
        </button>
      </div>
      <div ref={chartRef}>
        <StatPerizinanDashboardAdministrator />
        <div className="grid grid-cols-2 gap-8 my-8">
          <CardGeneral>
            <h1 className="text-lg font-semibold text-center mb-2">Kategori Perizinan</h1>
            <DoughnutChartDashboardAdministrator label={labelChartJenisValue} dataset={dataSetPerizinanByJenis} />
          </CardGeneral>
          <CardGeneral>
            <h1 className="text-lg font-semibold text-center mb-2">Tingkat Pendidikan</h1>
            <DoughnutChartDashboardAdministrator label={labelChartKategoriValue} dataset={dataSetPerizinanByKategori} />
          </CardGeneral>
        </div>
        <CardGeneral>
          <div className="flex justify-between">
            <h4 className="text-lg font-semibold text-left mb-2">Trend Pengajuan Pertahun</h4>
          </div>
          <VerticalBarChartDashboardAdministrator label={labelChartBulanValue} dataset={dataSetPerizinanByBulan} />
          <h4 className="text-lg font-semibold text-left mt-8 mb-2">Trend Pengajuan Perkota/kabupaten di Jawa Timur Pertahun</h4>
          <HorizontalBarChartDashboardAdministrator label={labelChartWilayahValue} dataset={dataSetPerizinanByWilayah} />
        </CardGeneral>
      </div>
    </MainPageLayout>
  );
};

export default DashboardAdministrator;

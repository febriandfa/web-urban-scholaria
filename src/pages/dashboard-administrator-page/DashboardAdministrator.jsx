import React, { useState, useEffect } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import ProfileBarDashboardAdministrator from "../../components/dashboard-administrator-components/ProfileBarDashboardAdministrator";
import { dataByFilter, labelChartKategori, labelChartTingkat, labelChartTrendBulan, labelChartTrendWilayah } from "../../utils/DaftarChartData";
import StatPerizinanDashboardAdministrator from "../../components/dashboard-administrator-components/StatPerizinanDashboardAdministrator";
import CardGeneral from "../../components/general-components/CardGeneral";
import DoughnutChartDashboardAdministrator from "../../components/dashboard-administrator-components/DoughnutChartDashboardAdministrator";
import InputSelectGeneral from "../../components/general-components/InputSelectGeneral";
import VerticalBarChartDashboardAdministrator from "../../components/dashboard-administrator-components/VerticalBarChartDashboardAdministrator";
import HorizontalBarChartDashboardAdministrator from "../../components/dashboard-administrator-components/HorizontalBarChartDashboardAdministrator";
import SLADashboardAdministrator from "../../components/dashboard-administrator-components/SLADashboardAdministrator";
import ListButtonFilterDashboardAdministrator from "../../components/dashboard-administrator-components/ListButtonFilterDashboardAdministrator";

const DashboardAdministrator = () => {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [currentData, setCurrentData] = useState(null);

  const dataByFilterValue = dataByFilter;
  const labelChartKategoriValue = labelChartKategori;
  const labelChartTingkatValue = labelChartTingkat;
  const labelChartTrendBulanValue = labelChartTrendBulan;
  const labelChartTrendWilayahValue = labelChartTrendWilayah;

  const optionTahun = [
    {
      value: 2023,
      text: 2023,
    },
    {
      value: 2022,
      text: 2022,
    },
    {
      value: 2021,
      text: 2021,
    },
    {
      value: 2020,
      text: 2020,
    },
  ];

  useEffect(() => {
    setCurrentData(dataByFilterValue[activeFilter]);
  }, [activeFilter]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <MainPageLayout>
      <ProfileBarDashboardAdministrator />
      <div className="flex items-center justify-between mt-8">
        <h1 className="font-semibold text-2xl text-brand-500">Dashboard Perizinan</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-lg">
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
      <ListButtonFilterDashboardAdministrator handleFilterClick={handleFilterClick} activeFilter={activeFilter} />
      <StatPerizinanDashboardAdministrator />
      <div className="grid grid-cols-2 gap-8 my-8">
        <CardGeneral>
          <h1 className="text-lg font-semibold text-center mb-2">Kategori Perizinan</h1>
          {currentData && <DoughnutChartDashboardAdministrator label={labelChartKategoriValue} dataset={currentData.datasetChartKategori} />}
        </CardGeneral>
        <CardGeneral>
          <h1 className="text-lg font-semibold text-center mb-2">Tingkat Pendidikan</h1>
          {currentData && <DoughnutChartDashboardAdministrator label={labelChartTingkatValue} dataset={currentData.datasetChartTingkat} />}
        </CardGeneral>
      </div>
      <CardGeneral>
        <div className="flex justify-between">
          <h4 className="text-lg font-semibold text-left mb-2">Trend Pengajuan Pertahun</h4>
          <div className="w-20">
            <InputSelectGeneral name="tahun" option={optionTahun} />
          </div>
        </div>
        {currentData && <VerticalBarChartDashboardAdministrator label={labelChartTrendBulanValue} dataset={currentData.datasetChartTrendBulan} />}
        <h4 className="text-lg font-semibold text-left mt-8 mb-2">Trend Pengajuan Perkota/kabupaten di Jawa Timur Pertahun</h4>
        {currentData && <HorizontalBarChartDashboardAdministrator label={labelChartTrendWilayahValue} dataset={currentData.datasetChartTrendWilayah} />}
      </CardGeneral>
      <h1 className="font-semibold text-2xl text-brand-500 mt-20 mb-8">Perjanjian Tingkat Layanan (SLA)</h1>
      <SLADashboardAdministrator />
    </MainPageLayout>
  );
};

export default DashboardAdministrator;

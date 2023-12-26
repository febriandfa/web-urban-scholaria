import React, { useEffect, useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import TabMenuRiwayatDashboardUser from "../../components/riwayat-dashboard-user-components/TabMenuRiwayatDashboardUser";
import ProsesRiwayatDashboardUser from "../../components/riwayat-dashboard-user-components/ProsesRiwayatDashboardUser";
import VerifikasiRiwayatDashboardUser from "../../components/riwayat-dashboard-user-components/VerifikasiRiwayatDashboardUser";
import SurveyRiwayatDashboardUser from "../../components/riwayat-dashboard-user-components/SurveyRiwayatDasboardUser";
import SelesaiRiwayatDashboardUser from "../../components/riwayat-dashboard-user-components/SelesaiRiwayatDashboardUser";
import DitolakRiwayatDashboardUser from "../../components/riwayat-dashboard-user-components/DitolakRiwayatDashboardUser";
import { useNavigate } from "react-router-dom";
import CheckTokenExpiry from "../../utils/functions/CheckTokenExpiry";
import ValidasiRiwayatDashboardUser from "../../components/riwayat-dashboard-user-components/ValidasiRiwayatDashboardUser";

const Riwayat = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const navigate = useNavigate();

  useEffect(() => {
    CheckTokenExpiry(navigate);
  }, [navigate]);

  return (
    <MainPageLayout>
      <TabMenuRiwayatDashboardUser activeTab={activeTab} handleTabClick={handleTabClick} />
      {activeTab === 0 && <ProsesRiwayatDashboardUser isPropose />}
      {activeTab === 1 && <VerifikasiRiwayatDashboardUser />}
      {activeTab === 2 && <SurveyRiwayatDashboardUser />}
      {activeTab === 3 && <ValidasiRiwayatDashboardUser />}
      {activeTab === 4 && <DitolakRiwayatDashboardUser isPropose />}
      {activeTab === 5 && <SelesaiRiwayatDashboardUser isPropose />}
    </MainPageLayout>
  );
};

export default Riwayat;

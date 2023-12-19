import React, { useEffect, useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import TabMenuKelolaAkunDashboardAdminDinas from "../../components/kelola-akun-dashboard-admin-dinas-components/TabMenuKelolaAkunDashboardAdminDinas";
import AktivasiKelolaAkunDashboardAdminDinas from "../../components/kelola-akun-dashboard-admin-dinas-components/AktivasiKelolaAkunDashboardAdminDinas";
import AktifKelolaAkunDashboardAdminDinas from "../../components/kelola-akun-dashboard-admin-dinas-components/AktifKelolaAkunDashboardAdminDinas";
import { useNavigate } from "react-router-dom";
import CheckTokenExpiry from "../../utils/functions/CheckTokenExpiry";

const KelolaAkunAdminDinas = () => {
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
      <TabMenuKelolaAkunDashboardAdminDinas activeTab={activeTab} handleTabClick={handleTabClick} />
      {activeTab === 0 && <AktivasiKelolaAkunDashboardAdminDinas />}
      {activeTab === 1 && <AktifKelolaAkunDashboardAdminDinas />}
    </MainPageLayout>
  );
};

export default KelolaAkunAdminDinas;

import React, { useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import TabMenuKelolaAkunDashboardAdminDinas from "../../components/kelola-akun-dashboard-admin-dinas-components/TabMenuKelolaAkunDashboardAdminDinas";
import AktivasiKelolaAkunDashboardAdminDinas from "../../components/kelola-akun-dashboard-admin-dinas-components/AktivasiKelolaAkunDashboardAdminDinas";
import AktifKelolaAkunDashboardAdminDinas from "../../components/kelola-akun-dashboard-admin-dinas-components/AktifKelolaAkunDashboardAdminDinas";

const KelolaAkunAdminDinas = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <MainPageLayout>
      <TabMenuKelolaAkunDashboardAdminDinas activeTab={activeTab} handleTabClick={handleTabClick} />
      {activeTab === 0 && <AktivasiKelolaAkunDashboardAdminDinas />}
      {activeTab === 1 && <AktifKelolaAkunDashboardAdminDinas />}
    </MainPageLayout>
  );
};

export default KelolaAkunAdminDinas;

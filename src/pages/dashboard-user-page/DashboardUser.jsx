import React from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import ProfileBarDashboardUser from "../../components/dashboard-user-components/ProfileBarDashboardUser";
import StatPengajuanDashboardUser from "../../components/dashboard-user-components/StatPengajuanDashboardUser";
import CariPermohonanDashboardUser from "../../components/dashboard-user-components/CariPermohonanDashboardUser";
import AktivitasDashboardUser from "../../components/dashboard-user-components/AktivitasDashboardUser";
import { Link } from "react-router-dom";
import notifikasiUser from "../../utils/NotifikasiUserData";
import ListNotifikasiDashboardUser from "../../components/dashboard-user-components/ListNotifikasiDashboardUser";

const DashboardUser = () => {
  const notifikasiUserData = notifikasiUser.slice(0, 3);

  return (
    <MainPageLayout>
      <ProfileBarDashboardUser />
      <div className="my-8 w-11/12 mx-auto flex flex-col gap-12">
        <StatPengajuanDashboardUser />
        <CariPermohonanDashboardUser />
        <AktivitasDashboardUser isPropose={true} />
        <Link to="/notifikasi">
          <ListNotifikasiDashboardUser notifikasi={notifikasiUserData} />
        </Link>
      </div>
    </MainPageLayout>
  );
};

export default DashboardUser;

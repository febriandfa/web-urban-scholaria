import React, { useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import ProfileBarDashboardUser from "../../components/dashboard-user-components/ProfileBarDashboardUser";
import DetailNotifikasiDashboardUser from "../../components/notifikasi-dashboard-user-components/DetailNotifikasiDashboardUser";
import notifikasiUser from "../../utils/NotifikasiUserData";
import ListNotifikasiDashboardUser from "../../components/dashboard-user-components/ListNotifikasiDashboardUser";

const NotifikasiAdministrator = () => {
  const notifikasiUserData = notifikasiUser;

  const [selectedNotifikasi, setSelectedNotifikasi] = useState(null);

  const showNotifikasiDetail = (index) => {
    setSelectedNotifikasi(index);
  };

  return (
    <MainPageLayout>
      <ProfileBarDashboardUser />
      <div className="grid grid-cols-2 gap-8">
        <div className="my-8 p-6 rounded-2xl bg-neutral-100">
          <ListNotifikasiDashboardUser color="bg-white" notifikasi={notifikasiUserData} showNotifikasiDetail={showNotifikasiDetail} />
        </div>
        {selectedNotifikasi !== null && (
          <DetailNotifikasiDashboardUser
            icon={notifikasiUserData[selectedNotifikasi].icon}
            title={notifikasiUserData[selectedNotifikasi].title}
            subject={notifikasiUserData[selectedNotifikasi].subject}
            date={notifikasiUserData[selectedNotifikasi].date}
            body={notifikasiUserData[selectedNotifikasi].body}
          />
        )}
      </div>
    </MainPageLayout>
  );
};

export default NotifikasiAdministrator;

import React, { useEffect, useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import ProfileBarDashboardUser from "../../components/dashboard-user-components/ProfileBarDashboardUser";
import StatPengajuanDashboardUser from "../../components/dashboard-user-components/StatPengajuanDashboardUser";
import CariPermohonanDashboardUser from "../../components/dashboard-user-components/CariPermohonanDashboardUser";
import AktivitasDashboardUser from "../../components/dashboard-user-components/AktivitasDashboardUser";
import { Link, useNavigate } from "react-router-dom";
import notifikasiUser from "../../utils/NotifikasiUserData";
import ListNotifikasiDashboardUser from "../../components/dashboard-user-components/ListNotifikasiDashboardUser";
import CheckTokenExpiry from "../../utils/functions/CheckTokenExpiry";
import { userService } from "../../services";
import FormatWaktu from "../../utils/functions/FormatWaktu";
import CardGeneral from "../../components/general-components/CardGeneral";

const DashboardUser = () => {
  const [notifikasi, setNotifikasi] = useState();

  const getAllNotifikasiData = async () => {
    try {
      const response = await userService.getAllNotifikasi();
      const sortedNotifikasi = response?.data?.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      const latestNotifikasi = sortedNotifikasi.slice(0, 3);
      setNotifikasi(latestNotifikasi);
      console.log("Semua Notifikasi", response?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllNotifikasiData();
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    CheckTokenExpiry(navigate);
  }, [navigate]);

  return (
    <MainPageLayout>
      <ProfileBarDashboardUser />
      <div className="my-8 w-11/12 mx-auto flex flex-col gap-12">
        <StatPengajuanDashboardUser />
        <CariPermohonanDashboardUser />
        <AktivitasDashboardUser isPropose={true} />
        <CardGeneral>
          <Link to="/notifikasi">
            {notifikasi?.map((item, index) => (
              <ListNotifikasiDashboardUser key={index} judulNotifikasi={item?.judul} tanggalNotifikasi={FormatWaktu(item?.created_at)} index={index} isSeen={item?.is_seen === "Y"} />
            ))}
          </Link>
        </CardGeneral>
      </div>
    </MainPageLayout>
  );
};

export default DashboardUser;

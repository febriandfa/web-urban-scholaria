import React, { useEffect, useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import ProfileBarDashboardUser from "../../components/dashboard-user-components/ProfileBarDashboardUser";
import DetailNotifikasiDashboardUser from "../../components/notifikasi-dashboard-user-components/DetailNotifikasiDashboardUser";
import notifikasiUser from "../../utils/NotifikasiUserData";
import ListNotifikasiDashboardUser from "../../components/dashboard-user-components/ListNotifikasiDashboardUser";
import { useNavigate } from "react-router-dom";
import CheckTokenExpiry from "../../utils/functions/CheckTokenExpiry";
import { userService } from "../../services";
import FormatTanggal from "../../utils/functions/FormatTanggal";
import CardGeneral from "../../components/general-components/CardGeneral";
import FormatWaktu from "../../utils/functions/FormatWaktu";
import LoadingPopup from "../../components/popup-components/LoadingPopup";

const NotifikasiAdministrator = () => {
  const [notifikasi, setNotifikasi] = useState();
  const [loading, setLoading] = useState(false);

  const getAllNotifikasiData = async () => {
    try {
      setLoading(true);
      const response = await userService.getAllNotifikasi();
      const sortedNotifikasi = response?.data?.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      setNotifikasi(sortedNotifikasi);
      console.log("Semua Notifikasi", response?.data?.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleReadClick = async (idNotifikasi) => {
    try {
      const response = await userService.getTandaiDibaca(idNotifikasi);
      const updatedNotifikasi = [...notifikasi];
      updatedNotifikasi[selectedNotifikasi].is_seen = "Y";
      setNotifikasi(updatedNotifikasi);
      console.log("Tertandai Terbaca", response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllNotifikasiData();
  }, []);

  const [selectedNotifikasi, setSelectedNotifikasi] = useState(null);

  const showNotifikasiDetail = (index) => {
    setSelectedNotifikasi(index);
  };

  const navigate = useNavigate();

  useEffect(() => {
    CheckTokenExpiry(navigate);
  }, [navigate]);

  return (
    <MainPageLayout>
      <LoadingPopup loading={loading} />
      <ProfileBarDashboardUser />
      <div className="grid grid-cols-2 gap-8">
        <div className="my-8 p-6 rounded-2xl bg-neutral-100">
          <h1 className="block mb-2 font-semibold text-base text-brand-500 capitalize">Notifikasi</h1>
          <CardGeneral color="bg-white" customClass="max-h-96 overflow-y-auto">
            {notifikasi?.map((item, index) => (
              <ListNotifikasiDashboardUser
                key={index}
                showNotifikasiDetail={showNotifikasiDetail}
                judulNotifikasi={item?.judul}
                // isiNotifikasi={item?.deskripsi}
                tanggalNotifikasi={FormatWaktu(item?.created_at)}
                index={index}
                isSeen={item?.is_seen === "Y"}
              />
            ))}
          </CardGeneral>
        </div>
        {selectedNotifikasi !== null && (
          <DetailNotifikasiDashboardUser
            judulNotifikasi={notifikasi[selectedNotifikasi]?.judul}
            tanggalNotifikasi={FormatWaktu(notifikasi[selectedNotifikasi]?.created_at)}
            isiNotifikasi={notifikasi[selectedNotifikasi]?.deskripsi}
            onClick={() => handleReadClick(notifikasi[selectedNotifikasi]?.id)}
          />
        )}
      </div>
    </MainPageLayout>
  );
};

export default NotifikasiAdministrator;

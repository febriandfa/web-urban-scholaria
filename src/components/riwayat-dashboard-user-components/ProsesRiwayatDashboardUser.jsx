import React, { useEffect, useState } from "react";
import AktivitasBerjalanPerizinan from "../pengajuan-perizinan-components/AktivitasBerjalanPerizinan";
import AktivitasKosongPerizinan from "../pengajuan-perizinan-components/AktivitasKosongPerizinan";
import { userService } from "../../services";
import LoadingPopup from "../popup-components/LoadingPopup";
import FormatTanggal from "../../utils/functions/FormatTanggal";

const ProsesRiwayatDashboardUser = ({ isPropose }) => {
  const [loading, setLoading] = useState(true);
  const [pengajuan, setPengajuan] = useState();
  const [profile, setProfile] = useState();
  const pengajuanDetailData = async () => {
    try {
      setLoading(true);
      // GET PROFILE
      const response = await userService.getProfile();
      const userID = response?.data?.data?.id;
      setProfile(response?.data?.data);
      console.log("Profile", response);

      // GET PENGAJUAN BY USER ID
      const responsePengajuan = await userService.getPengajuanByUserID(userID);
      const idSuratSemua = responsePengajuan?.data?.data?.map((item) => item.id);
      console.log("Surat Terbaru", idSuratSemua);
      const pengajuanData = responsePengajuan?.data?.data;
      console.log("Semua Pengajuan", pengajuanData);

      const sortedPengajuan = pengajuanData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

      setPengajuan(sortedPengajuan);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    pengajuanDetailData();
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <LoadingPopup loading={loading} />
      {pengajuan && pengajuan.length > 0 ? (
        pengajuan.map((item, index) => (
          <AktivitasBerjalanPerizinan
            key={index}
            id_surat={item?.id}
            id_surat_jenis={item?.surat_jenis?.id}
            kategoriPerizinan={item?.kategori}
            namaPerizinan={item?.surat_jenis?.nama}
            tanggalPengajuan={FormatTanggal(item?.created_at)}
            namaSekolah={item?.nama}
            pemohon={item?.user?.nama_lengkap}
            status={item?.status}
          />
        ))
      ) : (
        <AktivitasKosongPerizinan />
      )}
    </div>
  );
};

export default ProsesRiwayatDashboardUser;

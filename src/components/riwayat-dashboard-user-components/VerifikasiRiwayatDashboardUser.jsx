import React, { useEffect, useState } from "react";
import AktivitasBerjalanPerizinan from "../pengajuan-perizinan-components/AktivitasBerjalanPerizinan";
import AktivitasKosongPerizinan from "../pengajuan-perizinan-components/AktivitasKosongPerizinan";
import { userService } from "../../services";
import LoadingPopup from "../popup-components/LoadingPopup";

const VerifikasiRiwayatDashboardUser = ({ isPropose }) => {
  const [loading, setLoading] = useState(true);
  const [pengajuan, setPengajuan] = useState();
  const [profile, setProfile] = useState();
  const pengajuanDetailData = async () => {
    try {
      setLoading(true);
      const response = await userService.getProfile();
      const userID = response?.data?.data?.id;
      setProfile(response?.data?.data);
      console.log("Profile", response);

      const responsePengajuan = await userService.getPengajuanByUserID(userID);

      const idSuratTerbaru = responsePengajuan?.data?.data?.map((item) => item.id);
      console.log("Surat Terbaru", idSuratTerbaru);
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

  const formatTanggal = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString("id-ID", options);
    return formattedDate;
  };

  const filteredPengajuan = pengajuan?.filter((item) => item?.status === "Verifikasi Operator" || item?.status === "Verifikasi Verifikator");

  return (
    <div className="flex flex-col gap-10">
      <LoadingPopup loading={loading} />
      {filteredPengajuan && filteredPengajuan.length > 0 ? (
        filteredPengajuan
          // .filter((item) => item.status === "Verifikasi Operator" || item.status === "Verifikasi Verifikator")
          .map((item, index) => (
            <AktivitasBerjalanPerizinan
              key={index}
              id_surat={item?.id}
              id_surat_jenis={item?.surat_jenis?.id}
              kategoriPerizinan={item?.kategori}
              namaPerizinan={item?.surat_jenis?.nama}
              tanggalPengajuan={formatTanggal(item?.created_at)}
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

export default VerifikasiRiwayatDashboardUser;

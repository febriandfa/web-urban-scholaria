import React, { useEffect, useState } from "react";
import AktivitasBerjalanPerizinan from "../pengajuan-perizinan-components/AktivitasBerjalanPerizinan";
import AktivitasKosongPerizinan from "../pengajuan-perizinan-components/AktivitasKosongPerizinan";
import { userService } from "../../services";
import LoadingPopup from "../popup-components/LoadingPopup";

const SelesaiRiwayatDashboardUser = ({ isPropose }) => {
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

      const responsePengajuan = await userService.getPengajuan(userID);

      const idSuratTerbaru = responsePengajuan?.data?.data?.map((item) => item.id);
      const pengajuanData = responsePengajuan?.data?.data;
      console.log("Semua Pengajuan", pengajuanData);
      setPengajuan(pengajuanData);

      // const idSuratTerbaru = responsePengajuan?.data?.data[0]?.id;
      console.log("Surat Terbaru", idSuratTerbaru);

      const responsePengajuanDetail = await userService.getPengajuanByID(idSuratTerbaru);
      console.log("Pengajuan", responsePengajuanDetail?.data?.data[0]);
      // setPengajuan(responsePengajuanDetail?.data?.data[0]);
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

  const tanggalPengajuan = formatTanggal(pengajuan?.created_at);

  return (
    <div className="flex flex-col gap-10">
      <LoadingPopup loading={loading} />
      {pengajuan && pengajuan.length > 0 ? (
        pengajuan
          .filter((item) => item.status === "Selesai")
          .map((item, index) => (
            <AktivitasBerjalanPerizinan
              key={index}
              id_surat={item?.id}
              kategoriPerizinan={item?.kategori}
              namaPerizinan={item?.surat_dokumen[0]?.surat_syarat?.surat_jenis?.nama}
              tanggalPengajuan={formatTanggal(item?.created_at)}
              namaSekolah={item?.nama}
              pemohon={profile?.nama_lengkap}
              status={item?.status}
            />
          ))
      ) : (
        <AktivitasKosongPerizinan />
      )}
    </div>
  );
};

export default SelesaiRiwayatDashboardUser;

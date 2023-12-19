import React, { useEffect, useState } from "react";
import AktivitasBerjalanPerizinan from "../pengajuan-perizinan-components/AktivitasBerjalanPerizinan";
import AktivitasKosongPerizinan from "../pengajuan-perizinan-components/AktivitasKosongPerizinan";
import { userService } from "../../services";
import LoadingPopup from "../popup-components/LoadingPopup";

const AktivitasDashboardUser = ({ isPropose }) => {
  const [loading, setLoading] = useState(true);
  const [pengajuan, setPengajuan] = useState();
  // const [profile, setProfile] = useState();
  const pengajuanDetailData = async () => {
    try {
      setLoading(true);
      const response = await userService.getProfile();
      const userID = response?.data?.data?.id;
      // setProfile(response?.data?.data);
      console.log("Profile", response);

      const responsePengajuan = await userService.getPengajuanByUserID(userID);

      const idSuratTerbaru = responsePengajuan?.data?.data?.slice(-1)[0].id;
      console.log("Surat Terbaru", idSuratTerbaru);

      const responsePengajuanDetail = await userService.getPengajuanByID(idSuratTerbaru);
      console.log("Pengajuan", responsePengajuanDetail?.data?.data[0]);
      setPengajuan(responsePengajuanDetail?.data?.data[0]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    pengajuanDetailData();
    // console.log(pengajuan);
  }, []);

  const formatTanggal = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString("id-ID", options);
    return formattedDate;
  };

  const tanggalPengajuan = formatTanggal(pengajuan?.created_at);

  return (
    <div>
      <LoadingPopup loading={loading} />
      <h1 className="block mb-2 font-semibold text-base text-brand-500 capitalize">Aktivitas</h1>
      {pengajuan ? (
        <AktivitasBerjalanPerizinan
          id_surat={pengajuan?.id}
          id_surat_jenis={pengajuan?.surat_jenis?.id}
          kategoriPerizinan={pengajuan?.kategori}
          namaPerizinan={pengajuan?.surat_jenis?.nama}
          tanggalPengajuan={tanggalPengajuan}
          namaSekolah={pengajuan?.nama}
          pemohon={pengajuan?.user?.nama_lengkap}
          status={pengajuan?.status}
        />
      ) : (
        <AktivitasKosongPerizinan />
      )}
    </div>
  );
};

export default AktivitasDashboardUser;

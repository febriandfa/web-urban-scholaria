import React, { useEffect, useState } from "react";
import AktivitasBerjalanPerizinan from "../pengajuan-perizinan-components/AktivitasBerjalanPerizinan";
import AktivitasKosongPerizinan from "../pengajuan-perizinan-components/AktivitasKosongPerizinan";
import { userService } from "../../services";
import LoadingPopup from "../popup-components/LoadingPopup";
import FormatTanggal from "../../utils/functions/FormatTanggal";

const AktivitasDashboardUser = ({ isPropose }) => {
  const [loading, setLoading] = useState(true);
  const [pengajuan, setPengajuan] = useState();

  const pengajuanDetailData = async () => {
    try {
      setLoading(true);
      const response = await userService.getProfile();
      const userID = response?.data?.data?.id;
      console.log("Profile", response);

      const responsePengajuan = await userService.getPengajuanByUserID(userID);

      const pengajuanTerbaru = responsePengajuan?.data?.data?.slice(-1)[0];
      console.log("Pengajuan Terbaru", pengajuanTerbaru);

      if (pengajuanTerbaru.status === "Pengisian Dokumen") {
        const pengajuanSebelumnya = responsePengajuan?.data?.data?.slice(-2)[0];
        console.log("Pengajuan Sebelumnya", pengajuanSebelumnya);

        if (pengajuanSebelumnya && pengajuanSebelumnya.status !== "Pengisian Dokumen") {
          const responsePengajuanDetail = await userService.getPengajuanByID(pengajuanSebelumnya.id);
          console.log("Pengajuan", responsePengajuanDetail?.data?.data[0]);
          setPengajuan(responsePengajuanDetail?.data?.data[0]);
          setLoading(false);
          return;
        }
      }

      const idSuratTerbaru = pengajuanTerbaru.id;
      const responsePengajuanDetail = await userService.getPengajuanByID(idSuratTerbaru);
      console.log("Pengajuan", responsePengajuanDetail?.data?.data[0]);
      setPengajuan(responsePengajuanDetail?.data?.data[0]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // const [profile, setProfile] = useState();
  // const pengajuanDetailData = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await userService.getProfile();
  //     const userID = response?.data?.data?.id;
  //     console.log("Profile", response);

  //     const responsePengajuan = await userService.getPengajuanByUserID(userID);

  //     const idSuratTerbaru = responsePengajuan?.data?.data?.slice(-1)[0].id;
  //     console.log("Surat Terbaru", idSuratTerbaru);

  //     const responsePengajuanDetail = await userService.getPengajuanByID(idSuratTerbaru);
  //     console.log("Pengajuan", responsePengajuanDetail?.data?.data[0]);
  //     setPengajuan(responsePengajuanDetail?.data?.data[0]);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error(error);
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    pengajuanDetailData();
  }, []);

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
          tanggalPengajuan={FormatTanggal(pengajuan?.created_at)}
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

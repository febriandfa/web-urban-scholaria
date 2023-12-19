import React, { useEffect, useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import HeaderRincianDashboardUser from "../../components/rincian-pengajuan-dashboard-user-components/HeaderRincianDashboardUser";
import InformasiRincianDashboardUser from "../../components/rincian-pengajuan-dashboard-user-components/InformasiRincianDashboardUser";
import AlamatRincianDashboardUser from "../../components/rincian-pengajuan-dashboard-user-components/AlamatRincianDashboardUser";
import ListDokumenRincianDashboardUser from "../../components/rincian-pengajuan-dashboard-user-components/ListDokumenRincianDashboardUser";
import FooterRincianDashboardUser from "../../components/rincian-pengajuan-dashboard-user-components/FooterRincianDashboardUser";
import { getIdSuratDiajukan, getSuratJenisID } from "../../services/storage.service";
import { userService } from "../../services";
import ItemDokumenRincianDashboardUser from "../../components/rincian-pengajuan-dashboard-user-components/ItemDokumenRincianDashboardUser";
import LoadingPopup from "../../components/popup-components/LoadingPopup";
import DokumenHasilRincianDashboardUser from "../../components/rincian-pengajuan-dashboard-user-components/DokumenHasilRincianDashboardUser";
import { useNavigate } from "react-router-dom";
import CheckTokenExpiry from "../../utils/functions/CheckTokenExpiry";
import FormatTanggal from "../../utils/functions/FormatTanggal";

const RincianPengajuanUser = () => {
  const [detailPengajuan, setDetailPengajuan] = useState();
  const [loading, setLoading] = useState(false);
  const [daftarSyarat, setDaftarSyarat] = useState([]);
  const [syaratSuratPengajuan, setSyaratSuratPengajuan] = useState([]);
  const getIdSuratDiajukanSaatIni = getIdSuratDiajukan();
  const suratJenisID = getSuratJenisID();
  console.log("ID Surat Saat Ini", getIdSuratDiajukanSaatIni);

  const pengajuanDetailData = async () => {
    try {
      setLoading(true);
      const response = await userService.getPengajuanByID(getIdSuratDiajukanSaatIni);
      setDetailPengajuan(response?.data?.data[0]);
      console.log("Isi Pengajuan", response);
      const responseProfile = await userService.getProfile();
      // setProfil(responseProfile?.data?.data);
      // setDaftarSyarat(response?.data?.data[0]?.surat_dokumen[0]?.surat_syarat);
      setDaftarSyarat(response?.data?.data[0]?.surat_dokumen);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const syaratPerizinanData = async (surat_jenis_id) => {
    try {
      const response = await userService.getSyaratBySuratJenisID(surat_jenis_id);
      setSyaratSuratPengajuan(response?.data?.data);
      console.log("Syarat Response:", response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    pengajuanDetailData();
    syaratPerizinanData(suratJenisID);
  }, []);

  // const formatTanggal = (dateString) => {
  //   const options = { year: "numeric", month: "long", day: "numeric" };
  //   const formattedDate = new Date(dateString).toLocaleDateString("id-ID", options);
  //   return formattedDate;
  // };

  const navigate = useNavigate();

  useEffect(() => {
    CheckTokenExpiry(navigate);
  }, [navigate]);

  return (
    <MainPageLayout>
      <LoadingPopup loading={loading} />
      <div className="mb-16">
        <HeaderRincianDashboardUser status={detailPengajuan?.status} />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <InformasiRincianDashboardUser
          idPengajuan={detailPengajuan?.id}
          jenisPerizinan={detailPengajuan?.surat_jenis?.nama}
          namaSekolah={detailPengajuan?.nama}
          tanggalPengajuan={FormatTanggal(detailPengajuan?.created_at)}
          pemohon={detailPengajuan?.user?.nama_lengkap}
        />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <AlamatRincianDashboardUser alamat={detailPengajuan?.alamat_lokasi} latitude={detailPengajuan?.latitude} longitude={detailPengajuan?.longitude} />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <ListDokumenRincianDashboardUser dokumenTerpenuhi={daftarSyarat?.length} jumlahDokumen={syaratSuratPengajuan?.length}>
          {/* {syaratSuratPengajuan.map((dokumen, index) => (
            <ItemDokumenRincianDashboardUser key={index} dokumen={dokumen?.nama} link={daftarSyarat[index]?.dokumen_upload} />
          ))} */}
          {daftarSyarat?.map((dokumen, index) => (
            <ItemDokumenRincianDashboardUser key={index} dokumen={dokumen?.surat_syarat?.nama} link={dokumen?.dokumen_upload} />
          ))}
        </ListDokumenRincianDashboardUser>
      </div>
      {detailPengajuan?.status === "Selesai" && <DokumenHasilRincianDashboardUser idSurat={detailPengajuan?.id} />}
      <FooterRincianDashboardUser idSurat={detailPengajuan?.id} statusSurat={detailPengajuan?.status} />
    </MainPageLayout>
  );
};

export default RincianPengajuanUser;

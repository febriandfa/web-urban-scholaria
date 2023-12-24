import React, { useEffect, useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import LoadingPopup from "../../components/popup-components/LoadingPopup";
import LinkBackGeneral from "../../components/general-components/LinkBackGeneral";
import InformasiDetailPengajuanDashboardAdministrator from "../../components/detail-pengajuan-dashboard-administrator/InformasiDetailPengajuanDashboardAdministrator";
import AlamatDetailPengajuanDashboardAdministrator from "../../components/detail-pengajuan-dashboard-administrator/AlamatDetailPengajuanDashboardAdministrator";
import { userService } from "../../services";
import ListDokumenPengesahanDashboardVerifikator from "../../components/pengesahan-dashboard-verifikator-components/ListDokumenPengesahanDashboardVerifikator";
import FormatTanggal from "../../utils/functions/FormatTanggal";
import { getIdSuratDiajukan, getSuratJenisID } from "../../services/storage.service";
import LihatDokumenDashboardKepalaDinas from "../../components/dashboard-kepala-dinas-components/LihatDokumenDashboardKepalaDinas";
import ButtonSetujuiDashboardKepalaDinas from "../../components/dashboard-kepala-dinas-components/ButtonSetujuiDashboardKepalaDinas";

const DetailValidasiKepalaDinas = () => {
  const [loading, setLoading] = useState(false);
  const [detailPengajuan, setDetailPengajuan] = useState();
  const [dokumenPengajuan, setDokumenPengajuan] = useState([]);
  const [syaratSuratPengajuan, setSyaratSuratPengajuan] = useState([]);
  const suratJenisID = getSuratJenisID();
  const getIdSuratDiajukanSaatIni = getIdSuratDiajukan();

  const pengajuanDetailData = async () => {
    try {
      setLoading(true);
      const response = await userService.getPengajuanByID(getIdSuratDiajukanSaatIni);
      setDetailPengajuan(response?.data?.data[0]);
      console.log("Isi Pengajuan", response);
      setDokumenPengajuan(response?.data?.data[0]?.surat_dokumen);
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
    syaratPerizinanData(detailPengajuan?.surat_jenis_id);
  }, [detailPengajuan?.surat_jenis_id]);

  return (
    <MainPageLayout>
      <LoadingPopup loading={loading} />
      <div className="mb-16">
        <LinkBackGeneral />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <InformasiDetailPengajuanDashboardAdministrator
          idPengajuan={detailPengajuan?.id}
          jenisPerizinan={`${detailPengajuan?.surat_jenis?.nama} ${detailPengajuan?.kategori}`}
          namaSekolah={detailPengajuan?.nama}
          tanggalPengajuan={FormatTanggal(detailPengajuan?.created_at)}
          pemohon={detailPengajuan?.user?.nama_lengkap}
          statusPengajuan={detailPengajuan?.status}
        />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <AlamatDetailPengajuanDashboardAdministrator alamat={detailPengajuan?.alamat_lokasi} latitude={detailPengajuan?.latitude} longitude={detailPengajuan?.longitude} />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <LihatDokumenDashboardKepalaDinas idSurat={detailPengajuan?.id} />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <ListDokumenPengesahanDashboardVerifikator dokumenPengajuan={dokumenPengajuan} dokumenTerpenuhi={dokumenPengajuan?.length} jumlahDokumen={syaratSuratPengajuan?.length} />
      </div>
      <ButtonSetujuiDashboardKepalaDinas idSurat={detailPengajuan?.id} />
    </MainPageLayout>
  );
};

export default DetailValidasiKepalaDinas;

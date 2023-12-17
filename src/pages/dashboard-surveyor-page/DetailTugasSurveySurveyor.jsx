import React, { useEffect, useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import LinkBackGeneral from "../../components/general-components/LinkBackGeneral";
import InformasiDetailPengajuanDashboardAdministrator from "../../components/detail-pengajuan-dashboard-administrator/InformasiDetailPengajuanDashboardAdministrator";
import AlamatDetailPengajuanDashboardAdministrator from "../../components/detail-pengajuan-dashboard-administrator/AlamatDetailPengajuanDashboardAdministrator";
import { userService } from "../../services";
import { getIdSuratDiajukan } from "../../services/storage.service";
import FormatTanggal from "../../utils/functions/FormatTanggal";
import HasilSurveyTugasSurveyDashboardSurveyor from "../../components/tugas-survey-dashboard-surveyor/HasilSurveyTugasSurveyDashboardSurveyor";
import SimpanButtonTugasSurveyDashboardSurveyor from "../../components/tugas-survey-dashboard-surveyor/SimpanButtonTugasSurveyDashboardSurveyor";
import LoadingPopup from "../../components/popup-components/LoadingPopup";

const DetailTugasSurveySurveyor = () => {
  const [detailPengajuan, setDetailPengajuan] = useState();
  const [detailTugas, setDetailTugas] = useState();
  const [namaSurveyor, setNamaSurveyor] = useState();
  const [loading, setLoading] = useState(false);
  const getIdSuratDiajukanSaatIni = getIdSuratDiajukan();
  console.log("ID Surat Saat Ini", getIdSuratDiajukanSaatIni);

  const detailTugasSurveyData = async () => {
    try {
      setLoading(true);
      const response = await userService.getPengajuanByID(getIdSuratDiajukanSaatIni);
      setDetailPengajuan(response?.data?.data[0]);
      console.log("Isi Pengajuan", response);
      const responseTugas = await userService.getTugasSurveyBySuratID(getIdSuratDiajukanSaatIni);
      setDetailTugas(responseTugas?.data?.data[0]);
      console.log("Isi Tugas", responseTugas);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const getNamaSurveyor = async (idUser) => {
    try {
      const response = await userService.getUserByID(idUser);
      console.log("Nama Surveyor", response?.data?.data[0].nama_lengkap);
      setNamaSurveyor(response?.data?.data[0]?.nama_lengkap);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    detailTugasSurveyData();
    getNamaSurveyor(detailTugas?.user_id);
  }, []);

  return (
    <MainPageLayout>
      <LoadingPopup loading={loading} />
      <div className="mb-16">
        <LinkBackGeneral link="/tugas-survey-surveyor" />
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
        <HasilSurveyTugasSurveyDashboardSurveyor
          namaTugas={detailTugas?.nama_survey}
          surveyor={namaSurveyor}
          tanggalTugas={detailTugas?.jadwal_survey}
          tenggatTugas={detailTugas?.tenggat_survey}
          suratTugas={detailTugas?.dokumen_surat_tugas?.replace(/^.*?\/dokumen-surat-tugas\//, "")}
          fotoSurvey={detailTugas?.foto_survey ? detailTugas.foto_survey : "Belum Ada Foto Hasil Survey"}
        />
      </div>
      <SimpanButtonTugasSurveyDashboardSurveyor />
    </MainPageLayout>
  );
};

export default DetailTugasSurveySurveyor;

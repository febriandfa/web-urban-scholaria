import React, { useEffect, useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import LinkBackGeneral from "../../components/general-components/LinkBackGeneral";
import InformasiDetailPengajuanDashboardAdministrator from "../../components/detail-pengajuan-dashboard-administrator/InformasiDetailPengajuanDashboardAdministrator";
import AlamatDetailPengajuanDashboardAdministrator from "../../components/detail-pengajuan-dashboard-administrator/AlamatDetailPengajuanDashboardAdministrator";
import HasilSurveyPengesahanDashboardVerifikator from "../../components/pengesahan-dashboard-verifikator-components/HasilSurveyPengesahanDashboardVerifikator";
import ListDokumenPengesahanDashboardVerifikator from "../../components/pengesahan-dashboard-verifikator-components/ListDokumenPengesahanDashboardVerifikator";
import BuatPerizinanButtonDashboardVerifikator from "../../components/pengesahan-dashboard-verifikator-components/BuatPerizinanButtonDashboardVerifikator";
import { userService } from "../../services";
import { getIdSuratDiajukan, getSuratJenisID } from "../../services/storage.service";
import FormatTanggal from "../../utils/functions/FormatTanggal";
import LoadingPopup from "../../components/popup-components/LoadingPopup";

const DetailPengesahanPerizinanVerifikator = () => {
  const [detailPengajuan, setDetailPengajuan] = useState();
  const [loading, setLoading] = useState(false);
  const [dokumenPengajuan, setDokumenPengajuan] = useState([]);
  const [tugasSurvey, setTugasSurvey] = useState([]);
  const [namaSurveyor, setNamaSurveyor] = useState();
  const [syaratSuratPengajuan, setSyaratSuratPengajuan] = useState([]);
  const suratJenisID = getSuratJenisID();
  const getIdSuratDiajukanSaatIni = getIdSuratDiajukan();
  console.log("ID Surat Saat Ini", getIdSuratDiajukanSaatIni);

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

  const hasilSurveyData = async () => {
    try {
      setLoading(true);
      const response = await userService.getTugasSurveyBySuratID(getIdSuratDiajukanSaatIni);
      setTugasSurvey(response?.data?.data[0]);
      console.log("Isi Tugas Survey", response);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const getNamaSurveyor = async (idUser) => {
    try {
      const response = await userService.getUserByID(idUser);
      console.log("Nama Surveyor", response?.data?.data[0]?.nama_lengkap);
      setNamaSurveyor(response?.data?.data[0]?.nama_lengkap);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNamaSurveyor(tugasSurvey?.user_id);
  }, [tugasSurvey?.user_id]);

  useEffect(() => {
    pengajuanDetailData();
    hasilSurveyData();
    syaratPerizinanData(suratJenisID);
  }, [suratJenisID]);

  const [isChecked, setIsChecked] = useState([]);

  useEffect(() => {
    if (dokumenPengajuan.length > 0) {
      setIsChecked(Array(dokumenPengajuan.length).fill(false));
    }
  }, [dokumenPengajuan]);

  // const handleCheckboxChange = (index) => {
  //   const updatedCheckedState = [...isChecked];
  //   updatedCheckedState[index] = !updatedCheckedState[index];
  //   setIsChecked(updatedCheckedState);
  // };

  const allChecked = isChecked.length > 0 ? isChecked.every((item) => item) : false;

  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    setButtonDisabled(!allChecked);
  }, [allChecked]);

  const [checklist, setChecklist] = useState({
    dokumen: false,
    foto: false,
  });

  const handleCheckboxChange = (type, isChecked) => {
    setChecklist((prevState) => ({
      ...prevState,
      [type]: isChecked,
    }));
  };

  const isAllChecked = checklist.dokumen && checklist.foto;

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
        <HasilSurveyPengesahanDashboardVerifikator
          namaTugas={tugasSurvey?.nama_survey}
          surveyor={namaSurveyor}
          tanggalSurvey={FormatTanggal(tugasSurvey?.jadwal_survey)}
          tenggatSurvey={FormatTanggal(tugasSurvey?.tenggat_survey)}
          fileDokumenHasilSurvey={tugasSurvey?.dokumen_survey?.replace(/^.*?\/dokumen-survey\//, "")}
          linkFileDokumenHasilSurvey={tugasSurvey?.dokumen_survey}
          fileFotoHasilSurvey={tugasSurvey?.foto_survey ? tugasSurvey.foto_survey?.replace(/^.*?\/foto-survey\//, "") : "Belum Ada Foto Hasil Survey"}
          linkFileFotoHasilSurvey={tugasSurvey?.foto_survey}
          handleCheckboxChange={handleCheckboxChange}
          checklist={checklist}
        />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <ListDokumenPengesahanDashboardVerifikator dokumenPengajuan={dokumenPengajuan} dokumenTerpenuhi={dokumenPengajuan?.length} jumlahDokumen={syaratSuratPengajuan?.length} />
      </div>
      <BuatPerizinanButtonDashboardVerifikator idSurat={detailPengajuan?.id} verified={isAllChecked} disabled={buttonDisabled} />
    </MainPageLayout>
  );
};

export default DetailPengesahanPerizinanVerifikator;

import React, { useEffect, useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import LinkBackGeneral from "../../components/general-components/LinkBackGeneral";
import { dokumenPengajuan } from "../../utils/DaftarDokumenPengajuanData.jsx";
import CekSesuaiVerifikasiDashboardVerifikator from "../../components/verifikasi-dashboard-verifikator-components/CekSesuaiVerifikasiDashboardVerifikator.jsx";
import SurveyorButtonVerifikasiDashboardVerifikator from "../../components/verifikasi-dashboard-verifikator-components/SurveyorButtonVerifikasiDashboardVerifikator.jsx";
import InformasiDetailPengajuanDashboardAdministrator from "../../components/detail-pengajuan-dashboard-administrator/InformasiDetailPengajuanDashboardAdministrator.jsx";
import AlamatDetailPengajuanDashboardAdministrator from "../../components/detail-pengajuan-dashboard-administrator/AlamatDetailPengajuanDashboardAdministrator.jsx";
import { getIdSuratDiajukan } from "../../services/storage.service.js";
import { userService } from "../../services/index.js";
import LoadingPopup from "../../components/popup-components/LoadingPopup.jsx";
import FormatTanggal from "../../utils/functions/FormatTanggal.jsx";

const KelengkapanPengajuanVerifikator = () => {
  const [detailPengajuan, setDetailPengajuan] = useState();
  const [loading, setLoading] = useState(false);
  const [dokumenPengajuan, setDokumenPengajuan] = useState([]);
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

  useEffect(() => {
    pengajuanDetailData();
  }, []);

  const [isChecked, setIsChecked] = useState([]);

  useEffect(() => {
    if (dokumenPengajuan.length > 0) {
      setIsChecked(Array(dokumenPengajuan.length).fill(false));
    }
  }, [dokumenPengajuan]);

  const handleCheckboxChange = (index) => {
    const updatedCheckedState = [...isChecked];
    updatedCheckedState[index] = !updatedCheckedState[index];
    setIsChecked(updatedCheckedState);
  };

  const allChecked = isChecked.length > 0 ? isChecked.every((item) => item) : false;

  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    setButtonDisabled(!allChecked);
  }, [allChecked]);
  // let dokumenPengajuanData = dokumenPengajuan;

  // const [isChecked, setIsChecked] = useState(Array(dokumenPengajuanData.length).fill(false));

  // const handleCheckboxChange = (index) => {
  //   const updatedCheckedState = [...isChecked];
  //   updatedCheckedState[index] = !updatedCheckedState[index];
  //   setIsChecked(updatedCheckedState);
  // };

  // const allChecked = isChecked.every((item) => item);

  return (
    <MainPageLayout>
      <LoadingPopup loading={loading} />
      <div className="mb-16">
        <LinkBackGeneral link="/verifikasi-dokumen-verifikator" />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <InformasiDetailPengajuanDashboardAdministrator
          idPengajuan={detailPengajuan?.id}
          jenisPerizinan={detailPengajuan?.surat_jenis?.nama}
          namaSekolah={detailPengajuan?.nama}
          tanggalPengajuan={FormatTanggal(detailPengajuan?.created_at)}
          pemohon={detailPengajuan?.user?.nama_lengkap}
        />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <AlamatDetailPengajuanDashboardAdministrator alamat={detailPengajuan?.alamat_lokasi} latitude={detailPengajuan?.latitude} longitude={detailPengajuan?.longitude} />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <CekSesuaiVerifikasiDashboardVerifikator dokumenPengajuan={dokumenPengajuan} handleCheckboxChange={handleCheckboxChange} checklist={isChecked} />
      </div>
      <SurveyorButtonVerifikasiDashboardVerifikator verified={allChecked} disabled={buttonDisabled} />
    </MainPageLayout>
  );
};

export default KelengkapanPengajuanVerifikator;

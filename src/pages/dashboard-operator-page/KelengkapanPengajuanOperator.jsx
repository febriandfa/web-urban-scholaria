import React, { useEffect, useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import LinkBackGeneral from "../../components/general-components/LinkBackGeneral";
import CekSesuaiVerifikasiDashboardOperator from "../../components/verifikasi-dashboard-operator-components/CekSesuaiVerifikasiDashboardOperator.jsx";
import { dokumenPengajuan } from "../../utils/DaftarDokumenPengajuanData.jsx";
import VerifikatorButtonVerifikasiDashboardOperator from "../../components/verifikasi-dashboard-operator-components/VerifikatorButtonVerifikasiDashboardOperator.jsx";
import InformasiDetailPengajuanDashboardAdministrator from "../../components/detail-pengajuan-dashboard-administrator/InformasiDetailPengajuanDashboardAdministrator.jsx";
import AlamatDetailPengajuanDashboardAdministrator from "../../components/detail-pengajuan-dashboard-administrator/AlamatDetailPengajuanDashboardAdministrator.jsx";
import { userService } from "../../services/index.js";
import { getIdSuratDiajukan } from "../../services/storage.service.js";
import FormatTanggal from "../../utils/functions/FormatTanggal.jsx";
import LoadingPopup from "../../components/popup-components/LoadingPopup.jsx";

const KelengkapanPengajuanOperator = () => {
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

  // let dokumenPengajuanData = dokumenPengajuan;

  // const [isChecked, setIsChecked] = useState(Array(dokumenPengajuan.length).fill(false));

  // const handleCheckboxChange = (index) => {
  //   const updatedCheckedState = [...isChecked];
  //   updatedCheckedState[index] = !updatedCheckedState[index];
  //   setIsChecked(updatedCheckedState);
  // };

  // const allChecked = isChecked.every((item) => item);

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

  return (
    <MainPageLayout>
      <LoadingPopup loading={loading} />
      <div className="mb-16">
        <LinkBackGeneral link="/verifikasi-dokumen-operator" />
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
        <CekSesuaiVerifikasiDashboardOperator dokumenPengajuan={dokumenPengajuan} handleCheckboxChange={handleCheckboxChange} checklist={isChecked} />
      </div>
      <VerifikatorButtonVerifikasiDashboardOperator idSurat={detailPengajuan?.id} verified={allChecked} disabled={buttonDisabled} />
    </MainPageLayout>
  );
};

export default KelengkapanPengajuanOperator;

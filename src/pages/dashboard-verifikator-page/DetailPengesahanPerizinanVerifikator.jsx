import React, { useEffect, useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import LinkBackGeneral from "../../components/general-components/LinkBackGeneral";
import InformasiDetailPengajuanDashboardAdministrator from "../../components/detail-pengajuan-dashboard-administrator/InformasiDetailPengajuanDashboardAdministrator";
import AlamatDetailPengajuanDashboardAdministrator from "../../components/detail-pengajuan-dashboard-administrator/AlamatDetailPengajuanDashboardAdministrator";
import HasilSurveyPengesahanDashboardVerifikator from "../../components/pengesahan-dashboard-verifikator-components/HasilSurveyPengesahanDashboardVerifikator";
import ListDokumenPengesahanDashboardVerifikator from "../../components/pengesahan-dashboard-verifikator-components/ListDokumenPengesahanDashboardVerifikator";
import BuatPerizinanButtonDashboardVerifikator from "../../components/pengesahan-dashboard-verifikator-components/BuatPerizinanButtonDashboardVerifikator";
import { userService } from "../../services";
import { getIdSuratDiajukan } from "../../services/storage.service";
import FormatTanggal from "../../utils/functions/FormatTanggal";

const DetailPengesahanPerizinanVerifikator = () => {
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
      <div className="mb-16">
        <LinkBackGeneral link="/pengesahan-perizinan-verifikator" />
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
        <HasilSurveyPengesahanDashboardVerifikator handleCheckboxChange={handleCheckboxChange} checklist={checklist} />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <ListDokumenPengesahanDashboardVerifikator dokumenPengajuan={dokumenPengajuan} />
      </div>
      <BuatPerizinanButtonDashboardVerifikator idSurat={detailPengajuan?.id} verified={isAllChecked} disabled={buttonDisabled} />
    </MainPageLayout>
  );
};

export default DetailPengesahanPerizinanVerifikator;

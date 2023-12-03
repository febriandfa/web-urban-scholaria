import React, { useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import LinkBackGeneral from "../../components/general-components/LinkBackGeneral";
import InformasiDetailPengajuanDashboardAdministrator from "../../components/detail-pengajuan-dashboard-administrator/InformasiDetailPengajuanDashboardAdministrator";
import AlamatDetailPengajuanDashboardAdministrator from "../../components/detail-pengajuan-dashboard-administrator/AlamatDetailPengajuanDashboardAdministrator";
import HasilSurveyPengesahanDashboardVerifikator from "../../components/pengesahan-dashboard-verifikator-components/HasilSurveyPengesahanDashboardVerifikator";
import ListDokumenPengesahanDashboardVerifikator from "../../components/pengesahan-dashboard-verifikator-components/ListDokumenPengesahanDashboardVerifikator";
import BuatPerizinanButtonDashboardVerifikator from "../../components/pengesahan-dashboard-verifikator-components/BuatPerizinanButtonDashboardVerifikator";

const DetailPengesahanPerizinanVerifikator = () => {
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
        <InformasiDetailPengajuanDashboardAdministrator />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <AlamatDetailPengajuanDashboardAdministrator />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <HasilSurveyPengesahanDashboardVerifikator handleCheckboxChange={handleCheckboxChange} checklist={checklist} />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <ListDokumenPengesahanDashboardVerifikator />
      </div>
      <BuatPerizinanButtonDashboardVerifikator verified={isAllChecked} disabled={!isAllChecked} />
    </MainPageLayout>
  );
};

export default DetailPengesahanPerizinanVerifikator;

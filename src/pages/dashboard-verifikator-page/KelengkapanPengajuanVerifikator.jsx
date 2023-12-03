import React, { useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import LinkBackGeneral from "../../components/general-components/LinkBackGeneral";
import { dokumenPengajuan } from "../../utils/DaftarDokumenPengajuanData.jsx";
import CekSesuaiVerifikasiDashboardVerifikator from "../../components/verifikasi-dashboard-verifikator-components/CekSesuaiVerifikasiDashboardVerifikator.jsx";
import SurveyorButtonVerifikasiDashboardVerifikator from "../../components/verifikasi-dashboard-verifikator-components/SurveyorButtonVerifikasiDashboardVerifikator.jsx";
import InformasiDetailPengajuanDashboardAdministrator from "../../components/detail-pengajuan-dashboard-administrator/InformasiDetailPengajuanDashboardAdministrator.jsx";
import AlamatDetailPengajuanDashboardAdministrator from "../../components/detail-pengajuan-dashboard-administrator/AlamatDetailPengajuanDashboardAdministrator.jsx";

const KelengkapanPengajuanVerifikator = () => {
  let dokumenPengajuanData = dokumenPengajuan;

  const [isChecked, setIsChecked] = useState(Array(dokumenPengajuanData.length).fill(false));

  const handleCheckboxChange = (index) => {
    const updatedCheckedState = [...isChecked];
    updatedCheckedState[index] = !updatedCheckedState[index];
    setIsChecked(updatedCheckedState);
  };

  const allChecked = isChecked.every((item) => item);

  return (
    <MainPageLayout>
      <div className="mb-16">
        <LinkBackGeneral link="/verifikasi-dokumen-verifikator" />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <InformasiDetailPengajuanDashboardAdministrator />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <AlamatDetailPengajuanDashboardAdministrator />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <CekSesuaiVerifikasiDashboardVerifikator handleCheckboxChange={handleCheckboxChange} checklist={isChecked} />
      </div>
      <SurveyorButtonVerifikasiDashboardVerifikator verified={allChecked} disabled={!allChecked} />
    </MainPageLayout>
  );
};

export default KelengkapanPengajuanVerifikator;

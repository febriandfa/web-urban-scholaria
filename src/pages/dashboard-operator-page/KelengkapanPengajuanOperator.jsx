import React, { useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import LinkBackGeneral from "../../components/general-components/LinkBackGeneral";
import CekSesuaiVerifikasiDashboardOperator from "../../components/verifikasi-dashboard-operator-components/CekSesuaiVerifikasiDashboardOperator.jsx";
import { dokumenPengajuan } from "../../utils/DaftarDokumenPengajuanData.jsx";
import VerifikatorButtonVerifikasiDashboardOperator from "../../components/verifikasi-dashboard-operator-components/VerifikatorButtonVerifikasiDashboardOperator.jsx";
import InformasiDetailPengajuanDashboardAdministrator from "../../components/detail-pengajuan-dashboard-administrator/InformasiDetailPengajuanDashboardAdministrator.jsx";
import AlamatDetailPengajuanDashboardAdministrator from "../../components/detail-pengajuan-dashboard-administrator/AlamatDetailPengajuanDashboardAdministrator.jsx";

const KelengkapanPengajuanOperator = () => {
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
        <LinkBackGeneral link="/verifikasi-dokumen-operator" />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <InformasiDetailPengajuanDashboardAdministrator />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <AlamatDetailPengajuanDashboardAdministrator />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <CekSesuaiVerifikasiDashboardOperator handleCheckboxChange={handleCheckboxChange} checklist={isChecked} />
      </div>
      <VerifikatorButtonVerifikasiDashboardOperator verified={allChecked} disabled={!allChecked} />
    </MainPageLayout>
  );
};

export default KelengkapanPengajuanOperator;

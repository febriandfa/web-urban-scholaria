import React, { useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import LinkBackGeneral from "../../components/general-components/LinkBackGeneral";
import InformasiKelengkapanDashboardOperator from "../../components/kelengkapan-dokumen-dashboard-operator/InformasiKelengkapanDashboardOperator";
import AlamatKelengkapanDashboardOperator from "../../components/kelengkapan-dokumen-dashboard-operator/AlamatKelengkapanDashboardOperator";
import CekSesuaiVerifikasiDashboardOperator from "../../components/verifikasi-dokumen-dashboard-operator-components/CekSesuaiVerifikasiDashboardOperator";
import { dokumenPengajuan } from "../../utils/DaftarDokumenPengajuanData.js";
import VerifikatorButtonVerifikasiDashboardOperator from "../../components/verifikasi-dokumen-dashboard-operator-components/VerifikatorButtonVerifikasiDashboardOperator.jsx";

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
        <InformasiKelengkapanDashboardOperator />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <AlamatKelengkapanDashboardOperator />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <CekSesuaiVerifikasiDashboardOperator handleCheckboxChange={handleCheckboxChange} checklist={isChecked} />
      </div>
      <VerifikatorButtonVerifikasiDashboardOperator verified={allChecked} disabled={!allChecked} />
    </MainPageLayout>
  );
};

export default KelengkapanPengajuanOperator;

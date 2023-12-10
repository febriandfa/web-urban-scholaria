import React from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import LinkBackGeneral from "../../components/general-components/LinkBackGeneral";
import InformasiDetailPengajuanDashboardAdministrator from "../../components/detail-pengajuan-dashboard-administrator/InformasiDetailPengajuanDashboardAdministrator";
import AlamatDetailPengajuanDashboardAdministrator from "../../components/detail-pengajuan-dashboard-administrator/AlamatDetailPengajuanDashboardAdministrator";

const DetailTugasSurveySurveyor = () => {
  return (
    <MainPageLayout>
      <div className="mb-16">
        <LinkBackGeneral link="/tugas-survey-surveyor" />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <InformasiDetailPengajuanDashboardAdministrator />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <AlamatDetailPengajuanDashboardAdministrator />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        {/* <CekSesuaiVerifikasiDashboardVerifikator handleCheckboxChange={handleCheckboxChange} checklist={isChecked} /> */}
      </div>
    </MainPageLayout>
  );
};

export default DetailTugasSurveySurveyor;

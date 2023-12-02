import React from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import HeaderRincianDashboardUser from "../../components/rincian-pengajuan-dashboard-user-components/HeaderRincianDashboardUser";
import InformasiRincianDashboardUser from "../../components/rincian-pengajuan-dashboard-user-components/InformasiRincianDashboardUser";
import AlamatRincianDashboardUser from "../../components/rincian-pengajuan-dashboard-user-components/AlamatRincianDashboardUser";
import ListDokumenRincianDashboardUser from "../../components/rincian-pengajuan-dashboard-user-components/ListDokumenRincianDashboardUser";
import FooterRincianDashboardUser from "../../components/rincian-pengajuan-dashboard-user-components/FooterRincianDashboardUser";

const RincianPengajuan = () => {
  return (
    <MainPageLayout>
      <div className="mb-16">
        <HeaderRincianDashboardUser status="Diproses" />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <InformasiRincianDashboardUser />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <AlamatRincianDashboardUser />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <ListDokumenRincianDashboardUser />
      </div>
      <FooterRincianDashboardUser />
    </MainPageLayout>
  );
};

export default RincianPengajuan;

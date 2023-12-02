import React from "react";
import HeaderPerizinan from "../../components/pengajuan-perizinan-components/HeaderPerizinan";
import { iconTK2 } from "../../assets";
import PerizinanPageLayout from "../../layouts/PerizinanPageLayout";
import KategoriPerizinan from "../../components/pengajuan-perizinan-components/KategoriPerizinan";
import kategoriTK from "../../utils/DaftarKategoriTKData";

const InformasiPerizinanHeader = () => {
  return <HeaderPerizinan img={iconTK2} title="Taman Kanak-Kanak" link="/tentang-pengajuan-perizinan" />;
};

const InformasiPerizinanBody = () => {
  const kategoriPerizinanTK = kategoriTK;

  return (
    <div>
      <p className="font-normal text-lg mb-5">
        Ditemukan <span className="text-brand-500">3 Kategori Perizinan</span>
      </p>
      <div className="flex flex-col gap-12">
        {kategoriPerizinanTK.map((kategoriItem) => (
          <KategoriPerizinan img={kategoriItem.img} title={kategoriItem.title} syarat={kategoriItem.syarat} durasi={kategoriItem.durasi} link={kategoriItem.link} />
        ))}
      </div>
    </div>
  );
};

const InformasiPerizinan = () => {
  return <PerizinanPageLayout childrenHeader={<InformasiPerizinanHeader />} childrenBody={<InformasiPerizinanBody />} />;
};

export default InformasiPerizinan;

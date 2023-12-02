import React from "react";
import LandingPageLayout from "../../layouts/LandingPageLayout";
import TitleLandingPage from "../../components/landing-page-components/TitleLandingPage";
import syaratKetentuan from "../../utils/SyaratKetentuanAplikasiData";

const SyaratKententuan = () => {
  const syaratKetentuanData = syaratKetentuan;

  return (
    <LandingPageLayout>
      <section className="px-20 py-20">
        <div className="pt-10">
          <TitleLandingPage subtitle="Urban Scholaria" title="Syarat dan Ketentuan" align="text-center" />
          <ol className="list-decimal mb-6 pl-8">
            {syaratKetentuanData.map((syaratKetentuanItem) => (
              <li className="font-semibold">
                {syaratKetentuanItem.judul}
                <ul className="pl-4 list-disc text-sm font-normal text-neutral-500">{syaratKetentuanItem.poin}</ul>
              </li>
            ))}
          </ol>
          <p className="font-semibold">
            Dengan menggunakan aplikasi ini, pengguna dianggap telah membaca, memahami, dan menyetujui seluruh Syarat & Ketentuan yang telah ditetapkan. Keseluruhan S&K ini dirancang untuk memberikan panduan yang jelas, transparan, dan
            sesuai dengan undang-undang dalam proses administrasi pelayanan pendidikan.
          </p>
        </div>
      </section>
    </LandingPageLayout>
  );
};

export default SyaratKententuan;

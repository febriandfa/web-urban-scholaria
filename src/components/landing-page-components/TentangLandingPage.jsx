import React from "react";
import TitleLandingPage from "./TitleLandingPage";
import { logoBw } from "../../assets";

const TentangLandingPage = () => {
  return (
    <section className="py-20 min-h-screen px-20">
      <div className="grid grid-cols-2 gap-20">
        <div className="flex items-center w-full h-full bg-[url('./assets/images/background-tentang.jpeg')] bg-cover bg-center">
          <img className="mx-auto my-auto" src={logoBw} alt="logo black n white" />
        </div>
        <div>
          <TitleLandingPage subtitle="Urban Scholaria" title="Tentang Kami" align="text-left" width="w-full" />
          <div className="text-base text-neutral-800 text-justify font-normal">
            <p className="mb-7">
              Urban Scholaria adalah sebuah platform yang menyediakan layanan perizinan pendidikan secara online. Kami didirikan oleh Urban Labs, sebuah perusahaan teknologi yang berfokus pada solusi digital untuk masalah sosial. Urban
              Scholaria bertujuan untuk memudahkan proses perizinan pendidikan bagi institusi pendidikan. Kami menyediakan layanan perizinan pendidikan yang cepat, mudah, dan terjangkau.
            </p>
            <p>
              Kami juga berkomitmen untuk memberikan layanan yang berkualitas dan memenuhi kebutuhan pelanggan. Kami memiliki tim yang berpengalaman dan ahli dalam bidang perizinan pendidikan. Kami selalu berusaha untuk memberikan layanan
              yang terbaik dan memenuhi kebutuhan pelanggan. Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau membutuhkan bantuan dalam proses perizinan pendidikan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentangLandingPage;

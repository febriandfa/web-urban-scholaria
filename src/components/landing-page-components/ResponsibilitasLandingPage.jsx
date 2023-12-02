import React from "react";
import { iconGplay, mobileApp } from "../../assets";
import TitleLandingPage from "./TitleLandingPage";

const ResponsibilitasLandingPage = () => {
  return (
    <section className="py-20 min-h-screen px-20 bg-[url('./assets/images/background-app.png')] bg-cover bg-center">
      <TitleLandingPage subtitle="Urban Scholaria" title="Responsibilitas Aplikasi" align="text-center" />
      <p className="text-black text-lg text-center font-normal w-4/5 mx-auto mb-4">
        Nikmati kenyamanan mengajukan perizinan yang optimal di aplikasi Urban Scholaria dengan layar sesuai genggaman Anda. Unduh aplikasi Urban Scholaria sekarang juga dan peroleh informasi terkait perizinan pendidikan dengan mudah dan
        cepat!
      </p>
      <img className="w-[60rem] mx-auto mb-6" src={mobileApp} alt="Mobile App" />
      <a className="w-60 mx-auto block" href="#">
        <img src={iconGplay} alt="Go To GPlay" />
      </a>
    </section>
  );
};

export default ResponsibilitasLandingPage;

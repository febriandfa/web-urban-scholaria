import React from "react";
import { iconGplay, logoUrban, mobileApp } from "../../assets";

const Mobile = () => {
  return (
    <div className="flex flex-col absolute top-0 left-0 z-[1000] w-full h-screen bg-[url('./assets/images/background-app.png')] bg-cover bg-center px-6 justify-center">
      <h1 className="text-center text-5xl font-bold text-brand-900 mb-3">Download</h1>
      <p className="flex justify-center items-center gap-2 mb-7">
        <img className="w-16 h-16" src={logoUrban} alt="logo" />
        <p className="text-2xl font-semibold text-brand-800">URBAN SCHOLARIA</p>
      </p>
      <img className="mb-7" src={mobileApp} alt="Mobile App" />
      <a href="#">
        <img className="w-48 mx-auto" src={iconGplay} alt="Google Play" />
      </a>
    </div>
  );
};

export default Mobile;

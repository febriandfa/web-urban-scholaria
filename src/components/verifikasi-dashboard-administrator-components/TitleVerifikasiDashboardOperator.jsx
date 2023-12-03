import React from "react";
import { bgVerifDokumen } from "../../assets";

const TitleVerifikasiDashboardAdministrator = ({ title }) => {
  return (
    <div>
      <h1 className="text-center text-xl font-semibold text-brand-500 mb-11">{title}</h1>
      <img className="h-32 object-cover object-center w-full mb-16" src={bgVerifDokumen} alt="" />
    </div>
  );
};

export default TitleVerifikasiDashboardAdministrator;

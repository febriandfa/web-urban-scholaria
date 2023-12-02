import React from "react";
import { slaOperasional, slaPembangunan, slaPerubahan } from "../../assets";

const SLADashboardAdministrator = () => {
  return (
    <>
      <h4 className="text-lg font-semibold text-left mt-8 mb-2">Pengajuan Perizinan Pembangunan TK-SMA</h4>
      <img className="w-full object-cover" src={slaPembangunan} alt="" />
      <h4 className="text-lg font-semibold text-left mt-8 mb-2">Pengajuan Perizinan Operasional TK-SMA</h4>
      <img className="w-full object-cover" src={slaOperasional} alt="" />
      <h4 className="text-lg font-semibold text-left mt-8 mb-2">Pengajuan Perizinan Perubahan Operasional TK-SMA</h4>
      <img className="w-full object-cover" src={slaPerubahan} alt="" />
    </>
  );
};

export default SLADashboardAdministrator;

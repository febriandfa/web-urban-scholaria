import React from "react";

const CariPermohonanDashboardUser = () => {
  return (
    <div>
      <h1 className="block mb-2 font-semibold text-base text-brand-500 capitalize">Lacak Permohonan Anda!</h1>
      <input className="w-full px-3 h-9 rounded-lg text-sm border border-neutral-400" type="text" placeholder="Masukkan ID Pengajuan..." />
      <p className="text-danger-500 font-semibold text-sm text-center mt-2 mb-4">Pengajuan Tidak Ditemukan</p>
      <button className="block py-2 px-4 bg-brand-500 w-fit mx-auto rounded-lg text-base font-semibold text-white">Ajukan Perizinan</button>
    </div>
  );
};

export default CariPermohonanDashboardUser;

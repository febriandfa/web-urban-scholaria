import React, { useState } from "react";
import { userService } from "../../services";

const CariPerizinanDashboardAdministrator = () => {
  const [pengajuan, setPengajuan] = useState();
  const [idSuratInput, setIdSuratInput] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCariPengajuanDetailData = async (id_surat_input) => {
    try {
      setLoading(true);
      const response = await userService.getProfile();
      setProfile(response?.data?.data);

      const responsePengajuanDetail = await userService.getPengajuanByID(id_surat_input);
      setPengajuan(responsePengajuanDetail?.data?.data[0]);
      setShowPopup(true);
      setSearched(true);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setSearched(true);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="block mb-2 font-semibold text-base text-brand-500 capitalize">Cari Pengajuan Perizinan!</h1>
      <input className="w-full px-3 h-9 rounded-lg text-base border border-neutral-400 text-center" type="text" placeholder="Masukkan ID Pengajuan..." />
      {searched && !pengajuan && <p className="text-danger-500 font-semibold text-sm text-center mt-2 mb-4">Pengajuan Tidak Ditemukan</p>}
      <button className="block mt-4 py-2 px-4 bg-brand-500 w-fit mx-auto rounded-lg text-base font-semibold text-white" type="button">
        Cari
      </button>
    </div>
  );
};

export default CariPerizinanDashboardAdministrator;

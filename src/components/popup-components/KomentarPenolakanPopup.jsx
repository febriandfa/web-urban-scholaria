import React, { useEffect, useState } from "react";
import { userService } from "../../services";

const KomentarPenolakanPopup = ({ idSurat }) => {
  const [alasanDitolak, setAlasanDitolak] = useState();
  const getAlasanDikembalikan = async () => {
    try {
      const response = await userService.getPengajuanByID(idSurat);
      console.log("Alasan", response?.data?.data[0]?.alasan_dikembalikan);
      setAlasanDitolak(response?.data?.data[0]?.alasan_dikembalikan);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAlasanDikembalikan(idSurat);
  }, []);

  return (
    <div className="p-6 bg-white rounded-xl">
      <h1 className="text-2xl font-semibold text-center text-danger-500">Komentar Penolakan</h1>
      <hr className="w-full h-0.5 rounded-full bg-neutral-300 mt-2 mb-4" />
      <p className="text-sm pl-4">{alasanDitolak}</p>
    </div>
  );
};

export default KomentarPenolakanPopup;

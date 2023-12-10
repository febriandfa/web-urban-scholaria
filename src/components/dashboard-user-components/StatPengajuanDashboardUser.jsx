import React, { useEffect, useState } from "react";
import CardGeneral from "../general-components/CardGeneral";
import { userService } from "../../services";

const StatPengajuanDashboardUser = () => {
  const [pengajuan, setPengajuan] = useState();
  const [pengajuanSelesai, setPengajuanSelesai] = useState([0]);
  const pengajuanDetailData = async () => {
    try {
      const response = await userService.getProfile();
      const userID = response?.data?.data?.id;
      const responsePengajuan = await userService.getPengajuan(userID);
      const pengajuanData = responsePengajuan?.data?.data;
      console.log("Semua Pengajuan", pengajuanData);
      setPengajuan(pengajuanData);

      const pengajuanSelesaiData = pengajuanData.filter((item) => item.status === "Selesai");
      setPengajuanSelesai(pengajuanSelesaiData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    pengajuanDetailData();
  }, []);

  return (
    <div className="flex justify-center gap-8">
      <CardGeneral customClass="w-fit">
        <div className="flex items-center gap-3 px-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path
              d="M15.5 10C15.5 8.89543 16.3954 8 17.5 8H32.5C33.6046 8 34.5 8.89543 34.5 10C34.5 11.1046 33.6046 12 32.5 12H17.5C16.3954 12 15.5 11.1046 15.5 10ZM10.5 17.5C10.5 16.3954 11.3954 15.5 12.5 15.5H37.5C38.6046 15.5 39.5 16.3954 39.5 17.5C39.5 18.6046 38.6046 19.5 37.5 19.5H12.5C11.3954 19.5 10.5 18.6046 10.5 17.5ZM5.5 27.5C5.5 25.0147 7.51472 23 10 23H40C42.4853 23 44.5 25.0147 44.5 27.5V37.5C44.5 39.9853 42.4853 42 40 42H10C7.51472 42 5.5 39.9853 5.5 37.5V27.5Z"
              fill="#F59E0B"
              stroke="#F59E0B"
            />
          </svg>
          <div className="text-sm">
            <p className="font-normal text-neutral-500">Pengajuan</p>
            <p className="font-semibold">{pengajuan?.length} Pengajuan</p>
          </div>
        </div>
      </CardGeneral>
      <CardGeneral customClass="w-fit">
        <div className="flex items-center gap-3 px-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path
              d="M44.5 25C44.5 35.7696 35.7696 44.5 25 44.5C14.2304 44.5 5.5 35.7696 5.5 25C5.5 14.2304 14.2304 5.5 25 5.5C35.7696 5.5 44.5 14.2304 44.5 25ZM34.6213 22.1213C35.7929 20.9497 35.7929 19.0503 34.6213 17.8787C33.4497 16.7071 31.5503 16.7071 30.3787 17.8787L22.5 25.7574L19.6213 22.8787C18.4497 21.7071 16.5503 21.7071 15.3787 22.8787C14.2071 24.0503 14.2071 25.9497 15.3787 27.1213L20.3787 32.1213C21.5503 33.2929 23.4497 33.2929 24.6213 32.1213L34.6213 22.1213Z"
              fill="#1F8428"
              stroke="#1F8428"
            />
          </svg>
          <div className="text-sm">
            <p className="font-normal text-neutral-500">Diterima</p>
            <p className="font-semibold">{pengajuanSelesai?.length} Pengajuan</p>
          </div>
        </div>
      </CardGeneral>
      <CardGeneral customClass="w-fit">
        <div className="flex items-center gap-3 px-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path
              d="M44.5 25C44.5 35.7696 35.7696 44.5 25 44.5C14.2304 44.5 5.5 35.7696 5.5 25C5.5 14.2304 14.2304 5.5 25 5.5C35.7696 5.5 44.5 14.2304 44.5 25ZM22.1213 17.8787C20.9497 16.7071 19.0503 16.7071 17.8787 17.8787C16.7071 19.0503 16.7071 20.9497 17.8787 22.1213L20.7574 25L17.8787 27.8787C16.7071 29.0503 16.7071 30.9497 17.8787 32.1213C19.0503 33.2929 20.9497 33.2929 22.1213 32.1213L25 29.2426L27.8787 32.1213C29.0503 33.2929 30.9497 33.2929 32.1213 32.1213C33.2929 30.9497 33.2929 29.0503 32.1213 27.8787L29.2426 25L32.1213 22.1213C33.2929 20.9497 33.2929 19.0503 32.1213 17.8787C30.9497 16.7071 29.0503 16.7071 27.8787 17.8787L25 20.7574L22.1213 17.8787Z"
              fill="#C92025"
              stroke="#C92025"
            />
          </svg>
          <div className="text-sm">
            <p className="font-normal text-neutral-500">Ditolak</p>
            <p className="font-semibold">1 Pengajuan</p>
          </div>
        </div>
      </CardGeneral>
    </div>
  );
};

export default StatPengajuanDashboardUser;

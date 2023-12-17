import React, { useEffect, useState } from "react";
import CardGeneral from "../general-components/CardGeneral";
import { userService } from "../../services";
import LoadingPopup from "../popup-components/LoadingPopup";

const StatPerizinanDashboardAdministrator = () => {
  const [loading, setLoading] = useState(false);
  const [totalPengajuan, setTotalPengajuan] = useState([0]);
  const [totalPengajuanDiterima, setTotalPengajuanDiterima] = useState([0]);
  const [totalPengajuanDitolak, setTotalPengajuanDitolak] = useState([0]);
  const [totalPengajuanSurvey, setTotalPengajuanSurvey] = useState([0]);

  const getStatistikPengajuanData = async () => {
    try {
      setLoading(true);
      const responseTotal = await userService.getSemuaPengajuan();
      console.log("Total", responseTotal);
      console.log("Total Pembangunan", responseTotal?.data?.data?.filter((item) => item?.surat_jenis_id === "1")?.length);
      setTotalPengajuan(responseTotal?.data?.data?.length);
      setTotalPengajuanDiterima(responseTotal?.data?.data?.filter((item) => item?.status === "Selesai")?.length);
      setTotalPengajuanDitolak(responseTotal?.data?.data?.filter((item) => item?.status === "Ditolak")?.length);
      setTotalPengajuanSurvey(responseTotal?.data?.data?.filter((item) => item?.status === "Verifikasi Hasil Survey")?.length);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getStatistikPengajuanData();
  }, []);

  return (
    <div className="flex overflow-x-auto gap-8">
      <LoadingPopup loading={loading} />
      <CardGeneral>
        <div className="w-44">
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M6.5 4C6.5 3.72386 6.72386 3.5 7 3.5H13C13.2761 3.5 13.5 3.72386 13.5 4C13.5 4.27614 13.2761 4.5 13 4.5H7C6.72386 4.5 6.5 4.27614 6.5 4ZM4.5 7C4.5 6.72386 4.72386 6.5 5 6.5H15C15.2761 6.5 15.5 6.72386 15.5 7C15.5 7.27614 15.2761 7.5 15 7.5H5C4.72386 7.5 4.5 7.27614 4.5 7ZM2.5 11C2.5 10.1716 3.17157 9.5 4 9.5H16C16.8284 9.5 17.5 10.1716 17.5 11V15C17.5 15.8284 16.8284 16.5 16 16.5H4C3.17157 16.5 2.5 15.8284 2.5 15V11Z"
                fill="#F59E0B"
                stroke="#F59E0B"
              />
            </svg>
            <p className="text-xs font-semibold text-neutral-800 whitespace-nowrap">Pengajuan Masuk</p>
          </div>
          <h1 className="font-semibold text-3xl text-warn-300 mt-4">{totalPengajuan}</h1>
          {/* <div className="flex gap-0.5 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
              <path d="M6 0L11.1962 9H0.803848L6 0Z" fill="#1F8428" />
            </svg>
            <p className="text-xs font-semibold text-done-500">10%</p>
            <p className="text-[0.5rem] text-neutral-500">dari bulan kemarin</p>
          </div> */}
        </div>
      </CardGeneral>
      <CardGeneral>
        <div className="w-44">
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path
                d="M18 10C18 14.1421 14.6421 17.5 10.5 17.5C6.35786 17.5 3 14.1421 3 10C3 5.85786 6.35786 2.5 10.5 2.5C14.6421 2.5 18 5.85786 18 10ZM14.5607 9.06066C15.1464 8.47487 15.1464 7.52513 14.5607 6.93934C13.9749 6.35355 13.0251 6.35355 12.4393 6.93934L9.5 9.87868L8.56066 8.93934C7.97487 8.35355 7.02513 8.35355 6.43934 8.93934C5.85355 9.52513 5.85355 10.4749 6.43934 11.0607L8.43934 13.0607C9.02513 13.6464 9.97487 13.6464 10.5607 13.0607L14.5607 9.06066Z"
                fill="#1F8428"
                stroke="#1F8428"
              />
            </svg>
            <p className="text-xs font-semibold text-neutral-800 whitespace-nowrap">Pengajuan Diterima</p>
          </div>
          <h1 className="font-semibold text-3xl text-done-500 mt-4">{totalPengajuanDiterima}</h1>
          {/* <div className="flex gap-0.5 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
              <path d="M6 0L11.1962 9H0.803848L6 0Z" fill="#1F8428" />
            </svg>
            <p className="text-xs font-semibold text-done-500">10%</p>
            <p className="text-[0.5rem] text-neutral-500">dari bulan kemarin</p>
          </div> */}
        </div>
      </CardGeneral>
      <CardGeneral>
        <div className="w-44">
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M17.103 10C17.103 14.1772 13.9639 17.5 10.1672 17.5C6.37051 17.5 3.23145 14.1772 3.23145 10C3.23145 5.8228 6.37051 2.5 10.1672 2.5C13.9639 2.5 17.103 5.8228 17.103 10ZM9.33174 6.95249C8.77097 6.34917 7.84557 6.34917 7.2848 6.95249C6.74347 7.53491 6.74347 8.46509 7.2848 9.04751L8.17012 10L7.2848 10.9525C6.74347 11.5349 6.74347 12.4651 7.2848 13.0475C7.84557 13.6508 8.77097 13.6508 9.33174 13.0475L10.1672 12.1486L11.0027 13.0475C11.5635 13.6508 12.4889 13.6508 13.0496 13.0475C13.591 12.4651 13.591 11.5349 13.0496 10.9525L12.1643 10L13.0496 9.04751C13.591 8.4651 13.591 7.5349 13.0496 6.95249C12.4889 6.34917 11.5635 6.34917 11.0027 6.95249L10.1672 7.85136L9.33174 6.95249Z"
                fill="#C92025"
                stroke="#C92025"
              />
            </svg>
            <p className="text-xs font-semibold text-neutral-800 whitespace-nowrap">Pengajuan Ditolak</p>
          </div>
          <h1 className="font-semibold text-3xl text-danger-500 mt-4">{totalPengajuanDitolak}</h1>
          {/* <div className="flex gap-0.5 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
              <path d="M5.4493 9L0.619624 -9.78799e-07L10.279 -7.02746e-08L5.4493 9Z" fill="#C92025" />
            </svg>
            <p className="text-xs font-semibold text-danger-500">10%</p>
            <p className="text-[0.5rem] text-neutral-500">dari bulan kemarin</p>
          </div> */}
        </div>
      </CardGeneral>
      <CardGeneral>
        <div className="w-44">
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.5262 1.58594L7.80827 5.58594V18.4144L11.5262 14.4144V1.58594Z" fill="#191D88" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.81815 3.29304C3.55232 3.00705 3.15254 2.92149 2.80522 3.07627C2.4579 3.23105 2.23145 3.59569 2.23145 4.00015V14.0002C2.23145 14.2654 2.32937 14.5197 2.50368 14.7073L5.94933 18.4144V5.58594L3.81815 3.29304Z"
                fill="#191D88"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.8307 5.29304L13.3851 1.58594V14.4144L15.5163 16.7073C15.7821 16.9933 16.1819 17.0788 16.5292 16.924C16.8765 16.7692 17.103 16.4046 17.103 16.0002V6.00015C17.103 5.73493 17.0051 5.48058 16.8307 5.29304Z"
                fill="#191D88"
              />
            </svg>
            <p className="text-xs font-semibold text-neutral-800 whitespace-nowrap">Proses Survey</p>
          </div>
          <h1 className="font-semibold text-3xl text-brand-500 mt-4">{totalPengajuanSurvey}</h1>
          {/* <div className="flex gap-0.5 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
              <path d="M6 0L11.1962 9H0.803848L6 0Z" fill="#1F8428" />
            </svg>
            <p className="text-xs font-semibold text-done-500">10%</p>
            <p className="text-[0.5rem] text-neutral-500">dari bulan kemarin</p>
          </div> */}
        </div>
      </CardGeneral>
      <CardGeneral>
        <div className="w-44">
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.1672 18C14.2739 18 17.603 14.4183 17.603 10C17.603 5.58172 14.2739 2 10.1672 2C6.06055 2 2.73145 5.58172 2.73145 10C2.73145 14.4183 6.06055 18 10.1672 18ZM11.1672 6C11.1672 5.44772 10.7195 5 10.1672 5C9.61493 5 9.16721 5.44772 9.16721 6V10C9.16721 10.2526 9.26279 10.4958 9.43475 10.6808L12.0637 13.5092C12.4397 13.9138 13.0724 13.9369 13.477 13.5609C13.8815 13.1849 13.9046 12.5522 13.5286 12.1476L11.1672 9.60703V6Z"
                fill="#334155"
              />
            </svg>
            <p className="text-xs font-semibold text-neutral-800 whitespace-nowrap">Pengajuan Terlambat</p>
          </div>
          <h1 className="font-semibold text-3xl text-neutral-700 mt-4">200</h1>
          {/* <div className="flex gap-0.5 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
              <path d="M6 0L11.1962 9H0.803848L6 0Z" fill="#1F8428" />
            </svg>
            <p className="text-xs font-semibold text-done-500">10%</p>
            <p className="text-[0.5rem] text-neutral-500">dari bulan kemarin</p>
          </div> */}
        </div>
      </CardGeneral>
    </div>
  );
};

export default StatPerizinanDashboardAdministrator;

import React from "react";

const DetailNotifikasiDashboardUser = ({ judulNotifikasi, tanggalNotifikasi, isiNotifikasi, onClick }) => {
  return (
    <div className="my-10 pb-32">
      <div className="border-b-2 border-neutral-300 pb-6 flex items-center gap-4">
        <div className="rounded-xl p-2 bg-brand-100 w-12 h-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M28.8002 4.8002C28.8002 4.24567 28.5131 3.73069 28.0414 3.43916C27.5697 3.14763 26.9806 3.12112 26.4847 3.36911L14.0225 9.6002H8.0002C5.34923 9.6002 3.2002 11.7492 3.2002 14.4002C3.2002 17.0512 5.34923 19.2002 8.0002 19.2002H8.44699L11.2823 27.7062C11.5001 28.3595 12.1115 28.8002 12.8002 28.8002H14.4002C15.2839 28.8002 16.0002 28.0838 16.0002 27.2002V20.1891L26.4847 25.4313C26.9806 25.6793 27.5697 25.6528 28.0414 25.3612C28.5131 25.0697 28.8002 24.5547 28.8002 24.0002V4.8002Z"
              fill="#191D88"
            />
          </svg>
        </div>
        <div className="w-1/2">
          <h1 className="font-semibold text-sm capitalize">{judulNotifikasi}</h1>
        </div>
        <p className="font-normal text-neutral-500 text-xs ml-auto">{tanggalNotifikasi}</p>
      </div>
      <div className="flex flex-col justify-between h-full">
        <p className="block whitespace-pre-wrap pt-6 text-left text-sm text-neutral-500">{isiNotifikasi}</p>
        <button className="py-2 px-4 w-fit rounded-lg text-sm font-semibold text-white bg-brand-500 mx-auto" onClick={onClick}>
          Tandai Telah Dibaca
        </button>
      </div>
    </div>
  );
};

export default DetailNotifikasiDashboardUser;

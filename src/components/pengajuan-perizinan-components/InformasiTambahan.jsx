import React from "react";
import CardGeneral from "../general-components/CardGeneral";
import { Link } from "react-router-dom";

const InformasiTambahan = ({ alur, durasi, linkSyarat }) => {
  return (
    <CardGeneral>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-brand-50 w-fit">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 3C2.44772 3 2 3.44772 2 4C2 4.55228 2.44772 5 3 5H14C14.5523 5 15 4.55228 15 4C15 3.44772 14.5523 3 14 3H3Z" fill="#191D88" />
              <path d="M3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9H8C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7H3Z" fill="#191D88" />
              <path d="M3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H7C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11H3Z" fill="#191D88" />
              <path
                d="M13 16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16L15 10.4142L16.2929 11.7071C16.6834 12.0976 17.3166 12.0976 17.7071 11.7071C18.0976 11.3166 18.0976 10.6834 17.7071 10.2929L14.7071 7.29289C14.5196 7.10536 14.2652 7 14 7C13.7348 7 13.4804 7.10536 13.2929 7.29289L10.2929 10.2929C9.90237 10.6834 9.90237 11.3166 10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071L13 10.4142L13 16Z"
                fill="#191D88"
              />
            </svg>
          </div>
          <div className="border-b border-neutral-500 w-full">
            <p className="text-sm font-semibold text-neutral-800">Alur Perizinan</p>
            <p className="text-xs font-normal text-brand-500">{alur}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="p-2 bg-brand-50 w-fit">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6V10C9 10.2652 9.10536 10.5196 9.29289 10.7071L12.1213 13.5355C12.5118 13.9261 13.145 13.9261 13.5355 13.5355C13.9261 13.145 13.9261 12.5118 13.5355 12.1213L11 9.58579V6Z"
                fill="#191D88"
              />
            </svg>
          </div>
          <div className="border-b border-neutral-500 w-full">
            <p className="text-sm font-semibold text-neutral-800">Waktu Proses Kerja</p>
            <p className="text-xs font-normal text-brand-500">{durasi} Hari </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="p-2 bg-brand-50 w-fit">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2 6C2 4.89543 2.89543 4 4 4H9L11 6H16C17.1046 6 18 6.89543 18 8V14C18 15.1046 17.1046 16 16 16H4C2.89543 16 2 15.1046 2 14V6Z" fill="#191D88" />
            </svg>
          </div>
          <div className="border-b border-neutral-500 w-full">
            <p className="text-sm font-semibold text-neutral-800">Jumlah Persyaratan</p>
            {/* <p className="text-xs font-normal text-neutral-500">{jumlah} Syarat Dokumen</p> */}
            <Link to={`/syarat-perizinan/${linkSyarat}`} className="text-xs font-normal text-brand-500">
              Lihat Persyaratan
            </Link>
          </div>
        </div>
      </div>
    </CardGeneral>
  );
};

export default InformasiTambahan;

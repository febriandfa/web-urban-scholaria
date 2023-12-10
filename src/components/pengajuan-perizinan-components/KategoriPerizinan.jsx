import React from "react";
import LinkButtonGeneral from "../general-components/LinkButtonGeneral";
import CardGeneral from "../general-components/CardGeneral";
import { Link } from "react-router-dom";

const KategoriPerizinan = ({ img, title, syarat, durasi, link }) => {
  const handleLihatDetailClick = (id) => {
    localStorage.setItem("SuratJenisID", id);
  };

  return (
    <CardGeneral>
      <div className="flex items-center  w-[95%] mx-auto">
        <img className="rounded-lg w-52 h-36 object-cover object-center" src={img} alt="" />
        <div className="mr-auto ml-9">
          <h1 className="text-base text-brand-500 font-semibold mb-5">{title}</h1>
          <ul className="flex gap-24">
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M2.5 7.5C2.5 6.11929 3.61929 5 5 5H11.25L13.75 7.5H20C21.3807 7.5 22.5 8.61929 22.5 10V17.5C22.5 18.8807 21.3807 20 20 20H5C3.61929 20 2.5 18.8807 2.5 17.5V7.5Z" fill="#64748B" />
              </svg>
              {syarat} Syarat Dokumen
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.5 22.5C18.0228 22.5 22.5 18.0228 22.5 12.5C22.5 6.97715 18.0228 2.5 12.5 2.5C6.97715 2.5 2.5 6.97715 2.5 12.5C2.5 18.0228 6.97715 22.5 12.5 22.5ZM13.5 7.5C13.5 6.94772 13.0523 6.5 12.5 6.5C11.9477 6.5 11.5 6.94772 11.5 7.5V12.5C11.5 12.7652 11.6054 13.0196 11.7929 13.2071L15.3284 16.7426C15.719 17.1332 16.3521 17.1332 16.7426 16.7426C17.1332 16.3521 17.1332 15.719 16.7426 15.3284L13.5 12.0858V7.5Z"
                  fill="#64748B"
                />
              </svg>
              {durasi} Hari Kerja
            </li>
          </ul>
        </div>
        <Link className="flex items-center gap-2 w-fit px-4 py-2 bg-brand-500 text-white text-base font-semibold rounded-lg cursor-pointer" to={`/pengajuan-perizinan/${link}`} onClick={() => handleLihatDetailClick(link)}>
          Lihat Detail
        </Link>
      </div>
    </CardGeneral>
  );
};

export default KategoriPerizinan;

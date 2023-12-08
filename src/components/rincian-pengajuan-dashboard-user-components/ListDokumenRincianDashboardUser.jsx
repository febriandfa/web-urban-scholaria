import React, { Children } from "react";
import { dokumenPengajuan } from "../../utils/DaftarDokumenPengajuanData";
import ItemDokumenRincianDashboardUser from "./ItemDokumenRincianDashboardUser";

const ListDokumenRincianDashboardUser = ({ daftarSyarat, children }) => {
  let dokumenPengajuanData = dokumenPengajuan;
  const syarat = daftarSyarat;

  return (
    <div>
      <div className="flex items-center mb-4">
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M3 9C3 7.34315 4.34315 6 6 6H13.5L16.5 9H24C25.6569 9 27 10.3431 27 12V21C27 22.6569 25.6569 24 24 24H6C4.34315 24 3 22.6569 3 21V9Z" fill="#64748B" />
        </svg>
        <p className="font-semibold ml-4">Dokumen Pengajuan Perizinan</p>
      </div>
      <div className="flex flex-col gap-3">
        {children}
        {/* {dokumenPengajuanData.map((dokumenItem, index) => (
          <ItemDokumenRincianDashboardUser key={index} dokumen={dokumenItem.dokumen} link={dokumenItem.link} />
        ))} */}
      </div>
    </div>
  );
};

export default ListDokumenRincianDashboardUser;

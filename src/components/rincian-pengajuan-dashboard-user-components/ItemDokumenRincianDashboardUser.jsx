import React from "react";

const ItemDokumenRincianDashboardUser = ({ dokumen, link }) => {
  return (
    <div className="flex">
      <p className="text-neutral-500 ml-9">{dokumen}</p>
      <a className="text-warn-500 font-semibold ml-auto" href={link}>
        Lihat
      </a>
    </div>
  );
};

export default ItemDokumenRincianDashboardUser;

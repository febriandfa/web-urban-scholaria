import React from "react";

const ItemDokumenRincianDashboardUser = ({ dokumen, link }) => {
  return (
    <div className="flex">
      <p className="text-neutral-500 ml-9 capitalize">{dokumen}</p>
      <a className="text-warn-500 font-semibold ml-auto" href={`https://urbanscholaria.my.id/storage/${link}`} target="_blank">
        Lihat
      </a>
    </div>
  );
};

export default ItemDokumenRincianDashboardUser;

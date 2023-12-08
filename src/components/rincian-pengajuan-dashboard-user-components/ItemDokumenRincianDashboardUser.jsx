import React from "react";
import { useNavigate } from "react-router-dom";

const ItemDokumenRincianDashboardUser = ({ dokumen, link }) => {
  const handleLinkClick = (e) => {
    e.preventDefault();
    window.open(link, "_blank");
  };

  return (
    <div className="flex">
      <p className="text-neutral-500 ml-9 capitalize">{dokumen}</p>
      <a className="text-warn-500 font-semibold ml-auto" href={link} onClick={handleLinkClick}>
        Lihat
      </a>
    </div>
  );
};

export default ItemDokumenRincianDashboardUser;

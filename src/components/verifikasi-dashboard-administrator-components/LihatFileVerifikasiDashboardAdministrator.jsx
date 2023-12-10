import React from "react";

const LihatFileVerifikasiDashboardAdministrator = ({ link }) => {
  return (
    <a className="font-semibold text-brand_2-500" href={`https://urbanscholaria.my.id/storage/${link}`} target="_blank">
      Lihat
    </a>
  );
};

export default LihatFileVerifikasiDashboardAdministrator;

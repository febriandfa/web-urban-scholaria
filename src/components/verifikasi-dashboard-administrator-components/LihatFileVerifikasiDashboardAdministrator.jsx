import React from "react";
import { Link } from "react-router-dom";

const LihatFileVerifikasiDashboardAdministrator = ({ link }) => {
  return (
    <Link className="font-semibold text-brand_2-500" to={link}>
      Lihat
    </Link>
  );
};

export default LihatFileVerifikasiDashboardAdministrator;

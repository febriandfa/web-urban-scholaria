import React from "react";
import { Link } from "react-router-dom";

const DetailButtonKelolaAkunDashboardAdminDinas = ({ id_user }) => {
  const handleCekClick = () => {
    localStorage.setItem("IdPengguna", id_user);
  };

  return (
    <Link className="flex w-fit items-center gap-2 text-base font-semibold text-brand-500" to="/detail-pengguna-dinas" onClick={() => handleCekClick(id_user)}>
      Detail
    </Link>
  );
};

export default DetailButtonKelolaAkunDashboardAdminDinas;

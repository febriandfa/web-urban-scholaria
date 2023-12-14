import React, { useEffect, useState } from "react";
import CariKelolaAkunDashboardAdminDinas from "./CariKelolaAkunDashboardAdminDinas";
import TableGeneral from "../general-components/TableGeneral";
import TableHeadGeneral from "../general-components/TableHeadGeneral";
import TableBodyGeneral from "../general-components/TableBodyGeneral";
import TableRowGeneral from "../general-components/TableRowGeneral";
import TableItemGeneral from "../general-components/TableItemGeneral";
import { userService } from "../../services";
import DetailButtonKelolaAkunDashboardAdminDinas from "./DetailButtonKelolaAkunDashboardAdminDinas";
import PaginationGeneral from "../general-components/PaginationGeneral";
import LoadingPopup from "../popup-components/LoadingPopup";

const AktifKelolaAkunDashboardAdminDinas = () => {
  const headTableKelolaPengguna = ["ID Pengguna", "Nama Lengkap", "Email", "NIK"];
  const [pengguna, setPengguna] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [loading, setLoading] = useState(false);

  const getDataPengguna = async () => {
    try {
      setLoading(true);
      const response = await userService.getPengguna();
      console.log("Pengguna", response);
      setPengguna(response?.data?.data?.filter((item) => item?.is_active === "Y"));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataPengguna();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(pengguna?.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pengguna?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <LoadingPopup loading={loading} />
      <div className="flex items-center gap-10 mb-8">
        <div className="w-full">
          <h1 className="text-brand-500 font-semibold text-4xl">Pengguna Aktif</h1>
          <p className="text-neutral-500 font-semibold text-base">Jumlah Pengguna: {pengguna?.length}</p>
        </div>
        <CariKelolaAkunDashboardAdminDinas />
      </div>
      <TableGeneral>
        <TableHeadGeneral headTitles={headTableKelolaPengguna} />
        <TableBodyGeneral>
          {currentItems?.map((penggunaItem, index) => (
            <TableRowGeneral key={index}>
              <TableItemGeneral tableItem={penggunaItem?.id} />
              <TableItemGeneral tableItem={penggunaItem?.nama_lengkap} />
              <TableItemGeneral tableItem={penggunaItem?.email} />
              <TableItemGeneral tableItem={penggunaItem?.nomor_identitas} />
              <TableItemGeneral tableItem={<DetailButtonKelolaAkunDashboardAdminDinas id_user={penggunaItem?.id} />} />
            </TableRowGeneral>
          ))}
        </TableBodyGeneral>
      </TableGeneral>
      <PaginationGeneral totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default AktifKelolaAkunDashboardAdminDinas;

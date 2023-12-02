import React, { useState } from "react";
import { verifikasiDokumenHead, verifikasiDokumenItem } from "../../utils/VerifikasiDokumenData";
import PaginationGeneral from "../../components/general-components/PaginationGeneral";
import TableGeneral from "../../components/general-components/TableGeneral";
import TableHeadGeneral from "../../components/general-components/TableHeadGeneral";
import TableBodyGeneral from "../../components/general-components/TableBodyGeneral";
import TableRowGeneral from "../../components/general-components/TableRowGeneral";
import TableItemGeneral from "../../components/general-components/TableItemGeneral";
import TitleVerifikasiDashboardOperator from "../../components/verifikasi-dokumen-dashboard-operator-components/TitleVerifikasiDashboardOperator";
import MainPageLayout from "../../layouts/MainPageLayout";
import LihatKelengkapanVerifikasiDashboardOperator from "../../components/verifikasi-dokumen-dashboard-operator-components/LihatKelengkapanVerifikasiDashboardOperator";

const getStatusColor = (status) => {
  let colorClass = "";

  switch (status) {
    case "Selesai":
      colorClass = "text-done-500";
      break;
    case "Perlu Verifikasi":
      colorClass = "text-warn-500";
      break;
    case "Terlambat":
      colorClass = "text-danger-500";
      break;
    default:
      colorClass = "";
  }

  return colorClass;
};

const VerifikasiDokumenOperator = () => {
  const headVerifikasiDokumen = verifikasiDokumenHead;
  const itemVerifikasiDokumen = verifikasiDokumenItem;

  const itemsPerPage = 5;
  const totalPages = Math.ceil(itemVerifikasiDokumen.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = itemVerifikasiDokumen.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <MainPageLayout>
      <TitleVerifikasiDashboardOperator title="Verifikasi Dokumen" />
      <TableGeneral>
        <TableHeadGeneral headTitles={headVerifikasiDokumen} />
        <TableBodyGeneral>
          {currentItems.map((item, index) => (
            <TableRowGeneral>
              <TableItemGeneral key={index} tableItem={item.id} />
              <TableItemGeneral key={index} tableItem={item.pemohon} />
              <TableItemGeneral key={index} tableItem={item.perizinan} />
              <TableItemGeneral key={index} tableItem={item.tanggal} />
              <TableItemGeneral key={index} tableItem={item.status} customColor={getStatusColor(item.status)} />
              <TableItemGeneral key={index} tableItem={<LihatKelengkapanVerifikasiDashboardOperator link={item.link} />} />
            </TableRowGeneral>
          ))}
        </TableBodyGeneral>
      </TableGeneral>
      <PaginationGeneral totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </MainPageLayout>
  );
};

export default VerifikasiDokumenOperator;

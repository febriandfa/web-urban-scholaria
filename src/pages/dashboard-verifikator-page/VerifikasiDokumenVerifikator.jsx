import React, { useState } from "react";
import verifikasiDokumenItem from "../../utils/PengajuanPerizinanData";
import PaginationGeneral from "../../components/general-components/PaginationGeneral";
import TableGeneral from "../../components/general-components/TableGeneral";
import TableHeadGeneral from "../../components/general-components/TableHeadGeneral";
import TableBodyGeneral from "../../components/general-components/TableBodyGeneral";
import TableRowGeneral from "../../components/general-components/TableRowGeneral";
import TableItemGeneral from "../../components/general-components/TableItemGeneral";
import MainPageLayout from "../../layouts/MainPageLayout";
import TitleVerifikasiDashboardAdministrator from "../../components/verifikasi-dokumen-dashboard-administrator-components/TitleVerifikasiDashboardOperator";
import LihatKelengkapanVerifikasiDashboardAdministrator from "../../components/verifikasi-dokumen-dashboard-administrator-components/LihatKelengkapanVerifikasiDashboardOperator";

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

const VerifikasiDokumenVerifikator = () => {
  const headVerifikasiDokumen = ["ID Dokumen", "Nama Pemohonon", "Perizinan", "Tanggal Pengajuan", "Status"];
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
      <TitleVerifikasiDashboardAdministrator title="Verifikasi Dokumen" />
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
              <TableItemGeneral key={index} tableItem={<LihatKelengkapanVerifikasiDashboardAdministrator link={item.link_2} />} />
            </TableRowGeneral>
          ))}
        </TableBodyGeneral>
      </TableGeneral>
      <PaginationGeneral totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </MainPageLayout>
  );
};

export default VerifikasiDokumenVerifikator;

import React, { useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import verifikasiDokumenItem from "../../utils/PengajuanPerizinanData";
import TableGeneral from "../../components/general-components/TableGeneral";
import TableHeadGeneral from "../../components/general-components/TableHeadGeneral";
import TableBodyGeneral from "../../components/general-components/TableBodyGeneral";
import TableRowGeneral from "../../components/general-components/TableRowGeneral";
import TableItemGeneral from "../../components/general-components/TableItemGeneral";
import PaginationGeneral from "../../components/general-components/PaginationGeneral";
import VerifikasiLinkPengesahanDashboardVerfikator from "../../components/pengesahan-dashboard-verifikator-components/VerifikasiLinkPengesahanDashboardVerfikator";

const getStatusColor = (status) => {
  let colorClass = "";

  switch (status) {
    case "Sudah Survey":
      colorClass = "text-done-500";
      break;
    case "Sedang Survey":
      colorClass = "text-warn-500";
      break;
    default:
      colorClass = "";
  }

  return colorClass;
};

const PengesahanPerizinanVerifikator = () => {
  const headPengesahanPerizinan = ["ID Dokumen", "Nama Pemohonon", "Perizinan", "Tanggal Pengajuan", "Status"];
  const itemPengesahanPerizinan = verifikasiDokumenItem;

  const itemsPerPage = 5;
  const totalPages = Math.ceil(itemPengesahanPerizinan.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = itemPengesahanPerizinan.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <MainPageLayout>
      <div className="h-40 w-full bg-[url('./assets/images/background-pengajuan-header.png')] bg-cover bg-center rounded-lg mb-4">
        <h1 className="font-semibold text-4xl text-white text-center flex flex-col justify-center items-center h-full">PENGESAHAN PERMOHONAN PERIZINAN</h1>
      </div>
      <TableGeneral>
        <TableHeadGeneral headTitles={headPengesahanPerizinan} />
        <TableBodyGeneral>
          {currentItems.map((item, index) => (
            <TableRowGeneral>
              <TableItemGeneral key={index} tableItem={item.id} />
              <TableItemGeneral key={index} tableItem={item.pemohon} />
              <TableItemGeneral key={index} tableItem={item.perizinan} />
              <TableItemGeneral key={index} tableItem={item.tanggal} />
              <TableItemGeneral key={index} tableItem={item.status_survey} customColor={getStatusColor(item.status_survey)} />
              <TableItemGeneral key={index} tableItem={<VerifikasiLinkPengesahanDashboardVerfikator link={item.link_3} />} />
            </TableRowGeneral>
          ))}
        </TableBodyGeneral>
      </TableGeneral>
      <PaginationGeneral totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </MainPageLayout>
  );
};

export default PengesahanPerizinanVerifikator;

import React, { useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import AktivitasKosongPerizinan from "../../components/pengajuan-perizinan-components/AktivitasKosongPerizinan";
import TableHeadGeneral from "../../components/general-components/TableHeadGeneral";
import TableBodyGeneral from "../../components/general-components/TableBodyGeneral";
import TableGeneral from "../../components/general-components/TableGeneral";
import TableRowGeneral from "../../components/general-components/TableRowGeneral";
import TableItemGeneral from "../../components/general-components/TableItemGeneral";
import FilterButtonDataPerizinan from "../../components/data-perizinan-dashboard-administrator-components/FilterButtonDataPerizinan";
import CariDataPerizinan from "../../components/data-perizinan-dashboard-administrator-components/CariDataPerizinan";
import PaginationGeneral from "../../components/general-components/PaginationGeneral";
import UnduhButtonDataPerizinan from "../../components/data-perizinan-dashboard-administrator-components/UnduhButtonDataPerizinan";
import verifikasiDokumenItem from "../../utils/PengajuanPerizinanData";

const DataPerizinanAdministrator = ({ isEmpty }) => {
  const headPerizinan = ["ID Dokumen", "Nama Pemohonon", "Perizinan", "Tanggal Pengajuan"];
  const dataPerizinan = verifikasiDokumenItem;

  const itemsPerPage = 5;
  const totalPages = Math.ceil(dataPerizinan.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataPerizinan.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <MainPageLayout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-semibold text-brand-500">Data Perizinan</h1>
          <p className="text-base font-semibold text-neutral-500">Jumlah Perizinan : 200</p>
        </div>
        <div className="flex items-center gap-6">
          <CariDataPerizinan />
          <FilterButtonDataPerizinan />
        </div>
      </div>
      {isEmpty ? (
        <AktivitasKosongPerizinan />
      ) : (
        <>
          <TableGeneral>
            <TableHeadGeneral headTitles={headPerizinan} />
            <TableBodyGeneral>
              {currentItems.map((item, index) => (
                <TableRowGeneral>
                  <TableItemGeneral key={index} tableItem={item.id} />
                  <TableItemGeneral key={index} tableItem={item.pemohon} />
                  <TableItemGeneral key={index} tableItem={item.perizinan} />
                  <TableItemGeneral key={index} tableItem={item.tanggal} />
                  <TableItemGeneral key={index} tableItem={<UnduhButtonDataPerizinan />} />
                </TableRowGeneral>
              ))}
            </TableBodyGeneral>
          </TableGeneral>
          <PaginationGeneral totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        </>
      )}
    </MainPageLayout>
  );
};

export default DataPerizinanAdministrator;

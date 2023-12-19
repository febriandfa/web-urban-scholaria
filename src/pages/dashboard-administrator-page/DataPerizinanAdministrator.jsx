import React, { useEffect, useState } from "react";
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
import { userService } from "../../services";
import FormatTanggal from "../../utils/functions/FormatTanggal";
import LoadingPopup from "../../components/popup-components/LoadingPopup";
import { useNavigate } from "react-router-dom";
import CheckTokenExpiry from "../../utils/functions/CheckTokenExpiry";

const DataPerizinanAdministrator = ({ isEmpty }) => {
  const [semuaPengajuan, setSemuaPengajuan] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [loading, setLoading] = useState(false);

  const semuaPengajuanData = async () => {
    try {
      setLoading(true);
      const response = await userService.getSuratStatusSelesai();
      console.log("Hasil Semua Pengajuan", response);
      setSemuaPengajuan(response?.data?.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    semuaPengajuanData();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const filteredItems = semuaPengajuan?.filter((item) => item.status === "Selesai");
  const totalPages = Math.ceil(semuaPengajuan?.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = semuaPengajuan?.slice(indexOfFirstItem, indexOfLastItem);

  const navigate = useNavigate();

  useEffect(() => {
    CheckTokenExpiry(navigate);
  }, [navigate]);

  return (
    <MainPageLayout>
      <LoadingPopup loading={loading} />
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-semibold text-brand-500">Data Perizinan</h1>
          <p className="text-base font-semibold text-neutral-500">Jumlah Perizinan : {semuaPengajuan?.length}</p>
        </div>
        <div className="flex items-center gap-6">
          <CariDataPerizinan />
          <FilterButtonDataPerizinan />
        </div>
      </div>
      {!semuaPengajuan ? (
        <AktivitasKosongPerizinan />
      ) : (
        <>
          <TableGeneral>
            <TableHeadGeneral headTitles={["ID Dokumen", "Nama Pemohon", "Perizinan", "Tanggal Pengajuan"]} />
            <TableBodyGeneral>
              {currentItems?.map((pengajuan, index) => (
                <TableRowGeneral key={index}>
                  <TableItemGeneral tableItem={pengajuan?.id} />
                  <TableItemGeneral tableItem={pengajuan?.user?.nama_lengkap} />
                  <TableItemGeneral tableItem={`${pengajuan?.surat_jenis?.nama} ${pengajuan?.kategori}`} />
                  <TableItemGeneral tableItem={FormatTanggal(pengajuan?.created_at)} />
                  <TableItemGeneral tableItem={<UnduhButtonDataPerizinan />} />
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

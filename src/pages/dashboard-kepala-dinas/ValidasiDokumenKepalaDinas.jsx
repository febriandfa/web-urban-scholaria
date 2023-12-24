import React, { useEffect, useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import { userService } from "../../services";
import { useNavigate } from "react-router-dom";
import TableGeneral from "../../components/general-components/TableGeneral";
import TableHeadGeneral from "../../components/general-components/TableHeadGeneral";
import TableBodyGeneral from "../../components/general-components/TableBodyGeneral";
import TableRowGeneral from "../../components/general-components/TableRowGeneral";
import TableItemGeneral from "../../components/general-components/TableItemGeneral";
import PaginationGeneral from "../../components/general-components/PaginationGeneral";
import ValidasiLinkDashboardKepalaDinas from "../../components/dashboard-kepala-dinas-components/ValidasiLinkDashboardKepalaDinas";
import CheckTokenExpiry from "../../utils/functions/CheckTokenExpiry";
import FormatTanggal from "../../utils/functions/FormatTanggal";
import LoadingPopup from "../../components/popup-components/LoadingPopup";

const ValidasiDokumenKepalaDinas = () => {
  const [semuaPengajuan, setSemuaPengajuan] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [loading, setLoading] = useState(false);

  const semuaPengajuanData = async () => {
    try {
      setLoading(true);
      const response = await userService.getSuratStatusVerifHasilSurvey();
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

  const totalPages = Math.ceil(semuaPengajuan?.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = semuaPengajuan?.slice(indexOfFirstItem, indexOfLastItem);

  const headValidasiDokumen = ["ID Dokumen", "Nama Pemohonon", "Perizinan", "Tanggal Pengajuan", "Status"];

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

  const navigate = useNavigate();

  useEffect(() => {
    CheckTokenExpiry(navigate);
  }, [navigate]);

  return (
    <MainPageLayout>
      <LoadingPopup loading={loading} />
      <div className="h-40 w-full bg-[url('./assets/images/background-pengajuan-header.png')] bg-cover bg-center rounded-lg mb-4">
        <h1 className="font-semibold text-4xl text-white text-center flex flex-col justify-center items-center h-full">VALIDASI DOKUMEN</h1>
      </div>
      <TableGeneral>
        <TableHeadGeneral headTitles={headValidasiDokumen} />
        <TableBodyGeneral>
          {semuaPengajuan &&
            currentItems &&
            currentItems.map((pengajuan, index) => (
              <TableRowGeneral key={index}>
                <TableItemGeneral tableItem={pengajuan?.id} />
                <TableItemGeneral tableItem={pengajuan?.user?.nama_lengkap} />
                <TableItemGeneral tableItem={`${pengajuan?.surat_jenis.nama} ${pengajuan?.kategori}`} />
                <TableItemGeneral tableItem={FormatTanggal(pengajuan?.created_at)} />
                <TableItemGeneral
                  tableItem={pengajuan?.status === "Verifikasi Hasil Survey" ? "Perlu Verifikasi" : pengajuan?.status}
                  customColor={getStatusColor(pengajuan?.status === "Verifikasi Hasil Survey" ? "Perlu Verifikasi" : pengajuan?.status)}
                />
                <TableItemGeneral tableItem={<ValidasiLinkDashboardKepalaDinas idSurat={pengajuan?.id} />} />
              </TableRowGeneral>
            ))}
        </TableBodyGeneral>
      </TableGeneral>
      <PaginationGeneral totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </MainPageLayout>
  );
};

export default ValidasiDokumenKepalaDinas;

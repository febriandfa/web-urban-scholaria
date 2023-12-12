import React, { useEffect, useState } from "react";
import TitleVerifikasiDashboardAdministrator from "../../components/verifikasi-dashboard-administrator-components/TitleVerifikasiDashboardOperator";
import MainPageLayout from "../../layouts/MainPageLayout";
import TableGeneral from "../../components/general-components/TableGeneral";
import TableHeadGeneral from "../../components/general-components/TableHeadGeneral";
import TableBodyGeneral from "../../components/general-components/TableBodyGeneral";
import TableRowGeneral from "../../components/general-components/TableRowGeneral";
import TableItemGeneral from "../../components/general-components/TableItemGeneral";
import PaginationGeneral from "../../components/general-components/PaginationGeneral";
import { userService } from "../../services";
// import LihatKelengkapanVerifikasiDashboardAdministrator from "../../components/verifikasi-dashboard-administrator-components/LihatKelengkapanVerifikasiDashboardOperator";
import FormatTanggal from "../../utils/functions/FormatTanggal";
import LihatDetailTugasTugasSurveyDashboardSurveyor from "../../components/dashboard-surveyor-components/LihatDetailTugasTugasSurveyDashboardSurveyor";

const TugasSurveySurveyor = () => {
  const [semuaPengajuan, setSemuaPengajuan] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const semuaPengajuanData = async () => {
    try {
      const response = await userService.getSuratStatusVerifVerifikator();
      console.log("Hasil Semua Pengajuan", response);
      setSemuaPengajuan(response?.data?.data);
    } catch (error) {
      console.error(error);
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

  const headVerifikasiDokumen = ["ID Dokumen", "Nama Pemohonon", "Perizinan", "Tanggal Pengajuan", "Status"];

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

  return (
    <MainPageLayout>
      <TitleVerifikasiDashboardAdministrator title="Tugas Survey" />
      <TableGeneral>
        <TableHeadGeneral headTitles={headVerifikasiDokumen} />
        <TableBodyGeneral>
          {semuaPengajuan &&
            currentItems &&
            currentItems.map((pengajuan, index) => (
              <TableRowGeneral key={index}>
                <TableItemGeneral tableItem={pengajuan?.id} />
                <TableItemGeneral tableItem={pengajuan?.user_id} />
                <TableItemGeneral tableItem={`${pengajuan?.surat_dokumen[0]?.surat_syarat?.surat_jenis.nama} ${pengajuan?.kategori}`} />
                <TableItemGeneral tableItem={FormatTanggal(pengajuan?.created_at)} />
                <TableItemGeneral
                  tableItem={pengajuan?.status === "Verifikasi Verifikator" ? "Perlu Verifikasi" : pengajuan?.status}
                  customColor={getStatusColor(pengajuan?.status === "Verifikasi Verifikator" ? "Perlu Verifikasi" : pengajuan?.status)}
                />
                <TableItemGeneral tableItem={<LihatDetailTugasTugasSurveyDashboardSurveyor />} />
              </TableRowGeneral>
            ))}
        </TableBodyGeneral>
      </TableGeneral>
      <PaginationGeneral totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </MainPageLayout>
  );
};

export default TugasSurveySurveyor;

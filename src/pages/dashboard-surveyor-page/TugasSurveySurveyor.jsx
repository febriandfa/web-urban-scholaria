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
import LoadingPopup from "../../components/popup-components/LoadingPopup";

const TugasSurveySurveyor = () => {
  const [semuaTugas, setSemuaTugas] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [loading, setLoading] = useState(false);
  const idSurveyor = localStorage.getItem("IdSurveyor");

  const semuaTugasData = async () => {
    try {
      setLoading(true);
      const response = await userService.getTugasSurveyByUserID(idSurveyor);
      console.log("Hasil Semua Tugas", response);
      setSemuaTugas(response?.data?.data?.filter((item) => item.status === "Belum Disurvey"));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    semuaTugasData();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(semuaTugas?.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = semuaTugas?.slice(indexOfFirstItem, indexOfLastItem);

  const headTugasSurvey = ["Nama Tugas", "Tanggal Penugasan", "Tenggat", "ID Dokumen", "Status"];

  const getStatusColor = (status) => {
    let colorClass = "";

    switch (status) {
      case "Sudah Disurvey":
        colorClass = "text-brand-300";
        break;
      case "Belum Disurvey":
        colorClass = "text-warn-500";
        break;
      case "Survey Disetujui":
        colorClass = "text-done-500";
        break;
      case "Survey Ditolak":
        colorClass = "text-danger-500";
        break;
      default:
        colorClass = "";
    }
    return colorClass;
  };

  return (
    <MainPageLayout>
      <LoadingPopup loading={loading} />
      <TitleVerifikasiDashboardAdministrator title="Tugas Survey" />
      <TableGeneral>
        <TableHeadGeneral headTitles={headTugasSurvey} />
        <TableBodyGeneral>
          {semuaTugas &&
            currentItems &&
            currentItems.map((tugas, index) => (
              <TableRowGeneral key={index}>
                <TableItemGeneral tableItem={tugas?.nama_survey} capitalize />
                <TableItemGeneral tableItem={FormatTanggal(tugas?.jadwal_survey)} />
                <TableItemGeneral tableItem={FormatTanggal(tugas?.tenggat_survey)} />
                <TableItemGeneral tableItem={tugas?.surat_id} />
                <TableItemGeneral tableItem={tugas?.status} customColor={getStatusColor(tugas?.status)} />
                <TableItemGeneral tableItem={<LihatDetailTugasTugasSurveyDashboardSurveyor id_survey={tugas?.id} id_surat={tugas?.surat_id} />} />
              </TableRowGeneral>
            ))}
        </TableBodyGeneral>
      </TableGeneral>
      <PaginationGeneral totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </MainPageLayout>
  );
};

export default TugasSurveySurveyor;

import React, { useEffect, useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import TableGeneral from "../../components/general-components/TableGeneral";
import TableHeadGeneral from "../../components/general-components/TableHeadGeneral";
import TableBodyGeneral from "../../components/general-components/TableBodyGeneral";
import TableRowGeneral from "../../components/general-components/TableRowGeneral";
import TableItemGeneral from "../../components/general-components/TableItemGeneral";
import PaginationGeneral from "../../components/general-components/PaginationGeneral";
import VerifikasiLinkPengesahanDashboardVerfikator from "../../components/pengesahan-dashboard-verifikator-components/VerifikasiLinkPengesahanDashboardVerfikator";
import { userService } from "../../services";
import FormatTanggal from "../../utils/functions/FormatTanggal";
import LoadingPopup from "../../components/popup-components/LoadingPopup";
import { useNavigate } from "react-router-dom";
import CheckTokenExpiry from "../../utils/functions/CheckTokenExpiry";
import SerahkanLinkPengesahanDashboardVerifikator from "../../components/pengesahan-dashboard-verifikator-components/SerahkanLinkPengesahanDashboardVerifikator";

const PengesahanPerizinanVerifikator = () => {
  const [semuaPengajuan, setSemuaPengajuan] = useState();
  const [hasilSurvey, setHasilSurvey] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [loading, setLoading] = useState(false);

  const semuaHasilSurvey = async () => {
    try {
      setLoading(true);
      const response = await userService.getTugasSurvey();
      console.log("Hasil Semua Tugas", response);
      setHasilSurvey(response?.data?.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // const semuaPengajuanData = async () => {
  //   try {
  //     setLoading(true);
  //     // const response = await userService.getSuratStatusVerifHasilSurvey();
  //     const response = await userService.getSuratStatusPengeluaranSurat();
  //     console.log("Hasil Semua Pengajuan", response);
  //     setSemuaPengajuan(response?.data?.data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error(error);
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    // semuaPengajuanData();
    semuaHasilSurvey();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredPengajuan = hasilSurvey?.filter((item) => item?.surat?.status !== "Selesai");
  const sortedPengajuan = filteredPengajuan?.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

  const totalPages = Math.ceil(semuaPengajuan?.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedPengajuan?.slice(indexOfFirstItem, indexOfLastItem);

  const headPengesahanPerizinan = ["ID Dokumen", "Nama Pemohonon", "Perizinan", "Tanggal Pengajuan", "Status"];

  const getStatusColor = (status) => {
    let colorClass = "";
    switch (status) {
      case "Sudah Validasi":
        colorClass = "text-done-500";
        break;
      case "Sudah Disurvey":
        colorClass = "text-brand-500";
        break;
      case "Belum Disurvey":
        colorClass = "text-warn-500";
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
        <h1 className="font-semibold text-4xl text-white text-center flex flex-col justify-center items-center h-full">PENGESAHAN PERMOHONAN PERIZINAN</h1>
      </div>
      <TableGeneral>
        <TableHeadGeneral headTitles={headPengesahanPerizinan} />
        <TableBodyGeneral>
          {hasilSurvey &&
            currentItems &&
            currentItems.map((pengajuan, index) => (
              <TableRowGeneral key={index}>
                <TableItemGeneral tableItem={pengajuan?.surat_id} />
                <TableItemGeneral tableItem={pengajuan?.surat?.user?.nama_lengkap} />
                <TableItemGeneral tableItem={`${pengajuan?.surat?.surat_jenis.nama} ${pengajuan?.surat?.kategori}`} />
                <TableItemGeneral tableItem={FormatTanggal(pengajuan?.created_at)} />
                <TableItemGeneral
                  tableItem={pengajuan?.status === "Sudah Disurvey" && pengajuan?.surat?.status === "Pengeluaran Surat" ? "Sudah Validasi" : pengajuan?.status}
                  customColor={getStatusColor(pengajuan?.status === "Sudah Disurvey" && pengajuan?.surat?.status === "Pengeluaran Surat" ? "Sudah Validasi" : pengajuan?.status)}
                />
                <TableItemGeneral
                  tableItem={
                    pengajuan?.status === "Sudah Disurvey" && pengajuan?.surat?.status === "Pengeluaran Surat" ? (
                      <SerahkanLinkPengesahanDashboardVerifikator statusSurat={pengajuan?.surat?.status} idSurat={pengajuan?.surat_id} />
                    ) : (
                      <VerifikasiLinkPengesahanDashboardVerfikator statusSurvey={pengajuan?.status} idSurat={pengajuan?.surat_id} />
                    )
                  }
                />
              </TableRowGeneral>
            ))}
        </TableBodyGeneral>
      </TableGeneral>
      <PaginationGeneral totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </MainPageLayout>
  );
};

export default PengesahanPerizinanVerifikator;

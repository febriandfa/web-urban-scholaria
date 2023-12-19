import React, { useEffect, useState } from "react";
import verifikasiDokumenItem from "../../utils/PengajuanPerizinanData";
import PaginationGeneral from "../../components/general-components/PaginationGeneral";
import TableGeneral from "../../components/general-components/TableGeneral";
import TableHeadGeneral from "../../components/general-components/TableHeadGeneral";
import TableBodyGeneral from "../../components/general-components/TableBodyGeneral";
import TableRowGeneral from "../../components/general-components/TableRowGeneral";
import TableItemGeneral from "../../components/general-components/TableItemGeneral";
import MainPageLayout from "../../layouts/MainPageLayout";
import TitleVerifikasiDashboardAdministrator from "../../components/verifikasi-dashboard-administrator-components/TitleVerifikasiDashboardOperator";
// import LihatKelengkapanVerifikasiDashboardAdministrator from "../../components/verifikasi-dashboard-administrator-components/LihatKelengkapanVerifikasiDashboardOperator";
import { userService } from "../../services";
import FormatTanggal from "../../utils/functions/FormatTanggal";
import LihatKelengkapanVerifikasiDashboardVerifikator from "../../components/verifikasi-dashboard-verifikator-components/LihatKelengkapanVerifikasiDashboardVerifikator";
import { getSuratJenisID } from "../../services/storage.service";
import LoadingPopup from "../../components/popup-components/LoadingPopup";
import LinkBackGeneral from "../../components/general-components/LinkBackGeneral";

const VerifikasiDokumenVerifikator = () => {
  const [semuaPengajuan, setSemuaPengajuan] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const suratJenisID = getSuratJenisID();
  const [loading, setLoading] = useState(false);

  const semuaPengajuanData = async () => {
    try {
      setLoading(true);
      const response = await userService.getSuratStatusVerifVerifikator(suratJenisID);
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
      <LoadingPopup loading={loading} />
      <div className="mb-6">
        <LinkBackGeneral link="/verifikasi-perizinan-verifikator" />
      </div>
      <TitleVerifikasiDashboardAdministrator title="Verifikasi Dokumen" />
      <TableGeneral>
        <TableHeadGeneral headTitles={headVerifikasiDokumen} />
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
                  tableItem={pengajuan?.status === "Verifikasi Verifikator" ? "Perlu Verifikasi" : pengajuan?.status}
                  customColor={getStatusColor(pengajuan?.status === "Verifikasi Verifikator" ? "Perlu Verifikasi" : pengajuan?.status)}
                />
                <TableItemGeneral tableItem={<LihatKelengkapanVerifikasiDashboardVerifikator id_surat={pengajuan?.id} />} />
              </TableRowGeneral>
            ))}
        </TableBodyGeneral>
      </TableGeneral>
      <PaginationGeneral totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </MainPageLayout>
  );
};

export default VerifikasiDokumenVerifikator;

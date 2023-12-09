// import React, { useEffect, useState } from "react";
// import MainPageLayout from "../../layouts/MainPageLayout";
// import AktivitasKosongPerizinan from "../../components/pengajuan-perizinan-components/AktivitasKosongPerizinan";
// import TableHeadGeneral from "../../components/general-components/TableHeadGeneral";
// import TableBodyGeneral from "../../components/general-components/TableBodyGeneral";
// import TableGeneral from "../../components/general-components/TableGeneral";
// import TableRowGeneral from "../../components/general-components/TableRowGeneral";
// import TableItemGeneral from "../../components/general-components/TableItemGeneral";
// import FilterButtonDataPerizinan from "../../components/data-perizinan-dashboard-administrator-components/FilterButtonDataPerizinan";
// import CariDataPerizinan from "../../components/data-perizinan-dashboard-administrator-components/CariDataPerizinan";
// import PaginationGeneral from "../../components/general-components/PaginationGeneral";
// import UnduhButtonDataPerizinan from "../../components/data-perizinan-dashboard-administrator-components/UnduhButtonDataPerizinan";
// import verifikasiDokumenItem from "../../utils/PengajuanPerizinanData";
// import { userService } from "../../services";
// import FormatTanggal from "../../utils/functions/FormatTanggal";

// const DataPerizinanAdministrator = ({ isEmpty }) => {
//   const [semuaPengajuan, setSemuaPengajuan] = useState();
//   const [userData, setUserData] = useState([]);

//   const semuaPengajuanData = async () => {
//     try {
//       const response = await userService.getSemuaPengajuan();
//       console.log("Hasil Semua Pengajuan", response);
//       setSemuaPengajuan(response?.data?.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     semuaPengajuanData();
//   }, []);

//   const headPerizinan = ["ID Dokumen", "Nama Pemohonon", "Perizinan", "Tanggal Pengajuan"];
//   // const dataPerizinan = verifikasiDokumenItem;

//   const itemsPerPage = 10;
//   const totalPages = Math.ceil(semuaPengajuan?.length / itemsPerPage);

//   const [currentPage, setCurrentPage] = useState(1);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = semuaPengajuan?.slice(indexOfFirstItem, indexOfLastItem);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <MainPageLayout>
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-xl font-semibold text-brand-500">Data Perizinan</h1>
//           <p className="text-base font-semibold text-neutral-500">Jumlah Perizinan : {semuaPengajuan?.length}</p>
//         </div>
//         <div className="flex items-center gap-6">
//           <CariDataPerizinan />
//           <FilterButtonDataPerizinan />
//         </div>
//       </div>
//       {!semuaPengajuan ? (
//         <AktivitasKosongPerizinan />
//       ) : (
//         <>
//           <TableGeneral>
//             <TableHeadGeneral headTitles={headPerizinan} />
//             <TableBodyGeneral>
//               {currentItems
//                 .filter((item) => item.status === "Selesai")
//                 .map((pengajuan, index) => (
//                   <TableRowGeneral key={index}>
//                     <TableItemGeneral tableItem={pengajuan?.id} />
//                     <TableItemGeneral tableItem={pengajuan?.user_id} />
//                     <TableItemGeneral tableItem={`${pengajuan?.surat_dokumen[0]?.surat_syarat?.surat_jenis.nama} ${pengajuan?.kategori}`} />
//                     <TableItemGeneral tableItem={FormatTanggal(pengajuan?.created_at)} />
//                     <TableItemGeneral tableItem={<UnduhButtonDataPerizinan />} />
//                   </TableRowGeneral>
//                 ))}
//             </TableBodyGeneral>
//           </TableGeneral>
//           <PaginationGeneral totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
//         </>
//       )}
//     </MainPageLayout>
//   );
// };

// export default DataPerizinanAdministrator;

// import { useState } from "react";
// import { userService } from "../services";

// const [totalByJenis1, setTotalByJenis1] = useState([]);
// const [totalByJenis2, setTotalByJenis2] = useState([]);
// const [totalByJenis3, setTotalByJenis3] = useState([]);
// const [totalByKategoriTK, setTotalByKategoriTK] = useState([]);
// const [totalByKategoriSD, setTotalByKategoriSD] = useState([]);
// const [totalByKategoriSMP, setTotalByKategoriSMP] = useState([]);
// const [totalByKategoriSMA, setTotalByKategoriSMA] = useState([]);
// const [totalPerJanuari, setTotalPerJanuari] = useState([]);
// const [totalPerFebruari, setTotalPerFebruari] = useState([]);
// const [totalPerMaret, setTotalPerMaret] = useState([]);
// const [totalPerApril, setTotalPerApril] = useState([]);
// const [totalPerMei, setTotalPerMei] = useState([]);

// const getDataTotalPerizinan = async () => {
//   try {
//     const response = await userService.getSemuaPengajuan();
//     setTotalByJenis1(response?.data?.data?.filter((item) => item?.surat_jenis_id === "1")?.length);
//     setTotalByJenis2(response?.data?.data?.filter((item) => item?.surat_jenis_id === "2")?.length);
//     setTotalByJenis3(response?.data?.data?.filter((item) => item?.surat_jenis_id === "3")?.length);
//     setTotalByKategoriTK(response?.data?.data?.filter((item) => item?.kategori === "TK")?.length);
//     setTotalByKategoriSD(response?.data?.data?.filter((item) => item?.kategori === "SD")?.length);
//     setTotalByKategoriSMP(response?.data?.data?.filter((item) => item?.kategori === "SMP")?.length);
//     setTotalByKategoriSMA(response?.data?.data?.filter((item) => item?.kategori === "SMA")?.length);
//   } catch (error) {
//     console.error(error);
//   }
// };

// useEffect(() => {
//   getDataTotalPerizinan();
// });

// export const dataSetPerizinanByJenis = [totalByJenis1, totalByJenis2, totalByJenis3];
// export const dataSetPerizinanByKategori = [totalByKategoriTK, totalByKategoriSD, totalByKategoriSMP, totalByKategoriSMA];

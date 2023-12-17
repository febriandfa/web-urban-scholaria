// import { useEffect, useState } from "react";
// import { userService } from "../services";

// const [semuaOperasional, setSemuaOperasional] = useState([0]);
// const [semuaPerubahan, setSemuaPerubahan] = useState([0]);
// const [semuaPembangunan, setSemuaPembangunan] = useState([0]);

// const getSemuaDataPerizinan = async () => {
//   try {
//     const response = await userService.getSemuaPengajuan();
//     setSemuaPembangunan(response?.data?.data?.filter((item) => item?.surat_jenis_id === "1")?.length);
//   } catch (error) {
//     console.error(error);
//   }
// };

// useEffect(() => {
//   getSemuaDataPerizinan();
// });

// export { semuaPembangunan };

const dataByFilter = {
  Semua: {
    datasetChartKategori: [100, 200, 300],
    datasetChartTingkat: [100, 200, 300, 400],
    datasetChartTrendBulan: [101, 201, 301, 401, 501, 601, 701, 801, 901, 1001, 1101, 1201],
    datasetChartTrendWilayah: [1111, 2111, 3111, 4111, 5111, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  },
  "Hari Ini": {
    datasetChartKategori: [10, 20, 30],
    datasetChartTingkat: [10, 20, 30, 40],
    datasetChartTrendBulan: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
    datasetChartTrendWilayah: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  },
  Sebulan: {
    datasetChartKategori: [15, 25, 35],
    datasetChartTingkat: [15, 25, 35, 45],
    datasetChartTrendBulan: [15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125],
    datasetChartTrendWilayah: [15, 25, 35, 45, 55, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  },
  "3 Bulan": {
    datasetChartKategori: [25, 35, 45],
    datasetChartTingkat: [25, 35, 45, 55],
    datasetChartTrendBulan: [25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135],
    datasetChartTrendWilayah: [25, 35, 45, 55, 65, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  },
  "1 Tahun": {
    datasetChartKategori: [250, 350, 450],
    datasetChartTingkat: [250, 350, 450, 550],
    datasetChartTrendBulan: [250, 350, 450, 550, 650, 750, 850, 950, 105, 115, 125, 135],
    datasetChartTrendWilayah: [250, 350, 450, 550, 650, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  },
};

const labelChartKategori = ["Pembangunan", "Operasional", "Perubahan Operasional"];
const labelChartTingkat = ["TK", "SD", "SMP", "SMA"];
const labelChartTrendBulan = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const labelChartTrendWilayah = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
];

export { dataByFilter, labelChartKategori, labelChartTingkat, labelChartTrendBulan, labelChartTrendWilayah };

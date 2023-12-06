// import { AxiosResponse } from "axios";

import api from "./api.service";
// import {
//   ListTransaksiResponse,
//   Transaksi,
//   TransaksiRequest,
//   TransaksiResponse,
// } from "../types";

// API GET DATA
export const postRegister = async (data) => {
  return await api.post("register", data);
};

export const postLogin = async (data) => {
  return await api.post("login", data);
};

export const postLogout = async (data) => {
  return await api.post("logout", data);
};

export const getProfile = async () => {
  return await api.get("profile");
};

export const updateProfile = async (data) => {
  return await api.post("update-profile", data);
};

export const getSuratJenis = async () => {
  return await api.get("surat-jenis");
};

// export const getSuratByUserID = async () => {
//   return await api.get("surat/" + user_id);
// };

// export const postSurat = async (surat_id, surat_jenis_id, surat_syarat_id) => {
//   return await api.post(`surat/` + surat_id + `/surat-jenis/` + surat_jenis_id + `/upload-dokumen/` + surat_syarat_id, data);
// };

// export const detail = async (id: any): Promise<AxiosResponse<Transaksi>> => {
//   return await api.get("transaksi/detail?id=" + id);
// };

// export const update = async (
//   data: RegisterOrEditRequest,
//   id: any
// ): Promise<AxiosResponse<LoginResponse>> => {
//   return await api.post("user/update?id=" + id, data);
// };

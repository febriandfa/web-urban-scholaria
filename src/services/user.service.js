// import { AxiosResponse } from "axios";

import api from "./api.service";
// import {
//   ListTransaksiResponse,
//   Transaksi,
//   TransaksiRequest,
//   TransaksiResponse,
// } from "../types";

// API GET DATA

// AUTH API START
export const postRegister = async (data) => {
  return await api.post("register", data);
};

export const postLogin = async (data) => {
  return await api.post("login", data);
};

export const postLogout = async (data) => {
  return await api.post("logout", data);
};
// AUTH API END

// PROFILE API START
export const getProfile = async () => {
  return await api.get("profile");
};

export const updateProfile = async (data) => {
  return await api.post("update-profile", data);
};
// PROFILE API END

export const postPengajuan = async (data) => {
  return await api.post("surat", data);
};

export const getSemuaPengajuan = async () => {
  return await api.get("surat");
};

export const getPengajuan = async (user_id) => {
  return await api.get("surat/" + user_id);
};

export const getPengajuanByID = async (surat_id) => {
  return await api.get("surat?id_surat=" + surat_id);
};

export const getSuratJenis = async () => {
  return await api.get("surat-jenis");
};

export const getSuratJenisDetailByID = async (surat_jenis_id) => {
  return await api.get(`surat-jenis/` + surat_jenis_id);
};

export const getSyaratBySuratJenisID = async (surat_jenis_id) => {
  return await api.get(`surat-syarat?surat_jenis_id=` + surat_jenis_id);
};

export const getSuratSyaratByID = async (surat_jenis_id) => {
  return await api.get(`surat/` + surat_jenis_id + `/syarat`);
};

// export const getSuratByUserID = async () => {
//   return await api.get("surat/" + user_id);
// };

export const postSuratUpload = async (surat_id, surat_jenis_id, surat_syarat_id, data) => {
  return await api.post(`surat/` + surat_id + `/surat-jenis/` + surat_jenis_id + `/upload-dokumen/` + surat_syarat_id, data);
};

export const patchSuratDiajukan = async (surat_id) => {
  return await api.patch(`surat/` + surat_id + `/surat-diajukan`);
};

// export const detail = async (id: any): Promise<AxiosResponse<Transaksi>> => {
//   return await api.get("transaksi/detail?id=" + id);
// };

// export const update = async (
//   data: RegisterOrEditRequest,
//   id: any
// ): Promise<AxiosResponse<LoginResponse>> => {
//   return await api.post("user/update?id=" + id, data);
// };

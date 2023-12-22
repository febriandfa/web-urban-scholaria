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

export const getUserByID = async (user_id) => {
  return await api.get("users?user_id=" + user_id);
};

export const getUserSurveyor = async () => {
  return await api.get("users?role=Surveyor");
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

// PENGAJUAN API START
export const postPengajuan = async (data) => {
  return await api.post("surat", data);
};

export const getSemuaPengajuan = async () => {
  return await api.get("surat");
};

export const getPengajuanByUserID = async (user_id) => {
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

export const postSuratUpload = async (surat_id, surat_jenis_id, surat_syarat_id, data) => {
  return await api.post(`surat/` + surat_id + `/surat-jenis/` + surat_jenis_id + `/upload-dokumen/` + surat_syarat_id, data);
};

export const patchSuratDiajukan = async (surat_id) => {
  return await api.patch(`surat/` + surat_id + `/surat-diajukan`);
};

export const getBuktiPengajuan = async (surat_id) => {
  return await api.get(`surat/` + surat_id + `/cetak-kwitansi`);
};

export const getSuratPerizinan = async (surat_id) => {
  return await api.get(`surat/` + surat_id + `/cetak-surat`);
};

export const getSKLegalitas = async (surat_id) => {
  return await api.get(`surat/` + surat_id + `/cetak-surat-legalitas`);
};

// PENGAJUAN API END

// FEEDBACK API START
export const postFeedback = async (data) => {
  return await api.post("feedback-pemohon", data);
};

export const getFeedback = async () => {
  return await api.get("feedback-pemohon");
};
// FEEDBACK API END

// NOTIFIKASI API START
export const getAllNotifikasi = async () => {
  return await api.get("notifikasi");
};

export const getTandaiDibaca = async (notifikasi_id) => {
  return await api.get(`notifikasi/` + notifikasi_id + `/mark-as-seen`);
};
// NOTIFIKASI API END

// export const detail = async (id: any): Promise<AxiosResponse<Transaksi>> => {
//   return await api.get("transaksi/detail?id=" + id);
// };

// export const update = async (
//   data: RegisterOrEditRequest,
//   id: any
// ): Promise<AxiosResponse<LoginResponse>> => {
//   return await api.post("user/update?id=" + id, data);
// };

// OPERATOR API START
export const getSuratStatusVerifOperator = async (surat_jenis_id) => {
  return await api.get("surat?status=Verifikasi Operator&surat_jenis_id=" + surat_jenis_id);
};

export const accVerifikasiOperator = async (surat_id) => {
  return await api.patch(`surat/` + surat_id + `/terima-operator`);
};

export const declineVerifikasiOperator = async (surat_id, data) => {
  return await api.patch(`surat/` + surat_id + `/tolak-operator-baru`, data);
};

// OPERATOR API END

// VERIFIKATOR API START
export const getSuratStatusVerifVerifikator = async (surat_jenis_id) => {
  return await api.get("surat?status=Verifikasi Verifikator&surat_jenis_id=" + surat_jenis_id);
};

export const accVerifikasiVerifikator = async (surat_id) => {
  return await api.patch(`surat/` + surat_id + `/terima-verifikator`);
};

export const postJadwalSurvey = async (surat_id, data) => {
  return await api.post(`surat/` + surat_id + `/set-jadwal-survey`, data);
};

export const declineVerifikasiVerifikator = async (surat_id, data) => {
  return await api.patch(`surat/` + surat_id + `/tolak-verifikator-baru`, data);
};
// VERIFIKATOR API END

export const getSuratStatusPenjadwalanSurvey = async () => {
  return await api.get("surat?status=Penjadwalan Survey");
};

export const getSuratStatusVerifHasilSurvey = async () => {
  return await api.get("surat?status=Verifikasi Hasil Survey");
};

export const accVerifikasiHasilSurveyVerifikator = async (surat_id, data) => {
  return await api.post(`surat/` + surat_id + `/terima-hasil-survey`, data);
};

export const declineVerifikasiHasilSurveyVerifikator = async (surat_id, data) => {
  return await api.post(`surat/` + surat_id + `/tolak-hasil-survey`, data);
};

export const getTugasSurvey = async () => {
  return await api.get("surveyors");
};

export const getTugasSurveyByUserID = async (user_id) => {
  return await api.get("surveyors?user_id=" + user_id);
};

export const getTugasSurveyBySuratID = async (surat_id) => {
  return await api.get("surveyors?surat_id=" + surat_id);
};

export const postHasilSurvey = async (survey_id, data) => {
  return await api.post(`survey/` + survey_id + `/set-hasil-survey`, data);
};
//
//
//
//
export const getSuratStatusDitolak = async () => {
  return await api.get("surat?status=Ditolak");
};

export const getSuratStatusSelesai = async () => {
  return await api.get("surat?status=Selesai");
};
//
//
//
// AKTIVASI AKUN API START
export const getPengguna = async () => {
  return await api.get("users");
};

export const getPenggunaByID = async (user_id) => {
  return await api.get("users?user_id=" + user_id);
};

export const accAktivasiPengguna = async (user_id, data) => {
  return await api.post("aktivasi-akun/" + user_id, data);
};

export const declineAktivasiPengguna = async (user_id, data) => {
  return await api.post("tolak-aktivasi-akun/" + user_id, data);
};
// AKTIVASI AKUN API END

export const postPerizinanBaru = async (data) => {
  return await api.post("surat-jenis", data);
};

export const postSyaratPerizinanBaru = async (data) => {
  return await api.post("surat-syarat", data);
};

export const updatePerizinanBaru = async (surat_jenis_id, data) => {
  return await api.post("surat-jenis/" + surat_jenis_id, data);
};

export const deletePerizinanBaru = async (surat_jenis_id) => {
  return await api.delete("surat-jenis/" + surat_jenis_id);
};

export const deleteSyaratPerizinanBaru = async (surat_syarat_id) => {
  return await api.delete("surat-syarat/" + surat_syarat_id);
};
//
//
//
//
export const postSendOTP = async (data) => {
  return await api.post("send-otp", data);
};

export const getSendOTPAgain = async (data) => {
  return await api.get("send-otp-again", data);
};

export const postVerifyOTP = async (data) => {
  return await api.post("verify-otp", data);
};

export const postResetPassword = async (data) => {
  return await api.post("reset-password", data);
};

//
//
//
//
//
// CHAT API START
export const postStartChat = async (data) => {
  return await api.post("start-chat", data);
};

export const postSendMessage = async (room_id, data) => {
  return await api.post("send-message/" + room_id, data);
};

export const getChatList = async () => {
  return await api.get("get-chat-list");
};

export const getChatRoom = async (room_id) => {
  return await api.get("get-chat-room/" + room_id);
};
// CHAT API END

// KONTAK API START
export const postKontak = async (data) => {
  return await api.post("hubungi-kami", data);
};
// KONTAK API END

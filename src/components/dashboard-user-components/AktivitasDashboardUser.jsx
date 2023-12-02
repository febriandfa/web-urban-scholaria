import React from "react";
import AktivitasBerjalanPerizinan from "../pengajuan-perizinan-components/AktivitasBerjalanPerizinan";
import AktivitasKosongPerizinan from "../pengajuan-perizinan-components/AktivitasKosongPerizinan";

const AktivitasDashboardUser = ({ isPropose }) => {
  return (
    <div>
      <h1 className="block mb-2 font-semibold text-base text-brand-500 capitalize">Aktivitas</h1>
      {isPropose ? (
        <AktivitasBerjalanPerizinan schoolType="sma" jenisPerizinan="Perizinan SMA" namaPerizinan="Perizinan Pembangunan Sekolah" tanggal="13 November 2023" sekolah="SMAN 6 Surabaya" pengaju="Alda Elsa Faradila" status="Diproses" />
      ) : (
        <AktivitasKosongPerizinan />
      )}
    </div>
  );
};

export default AktivitasDashboardUser;

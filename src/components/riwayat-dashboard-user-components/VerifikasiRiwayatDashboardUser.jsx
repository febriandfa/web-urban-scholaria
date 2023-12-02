import React from "react";
import AktivitasBerjalanPerizinan from "../pengajuan-perizinan-components/AktivitasBerjalanPerizinan";
import AktivitasKosongPerizinan from "../pengajuan-perizinan-components/AktivitasKosongPerizinan";

const VerifikasiRiwayatDashboardUser = ({ isPropose }) => {
  return (
    <div className="flex flex-col gap-10">
      {isPropose ? (
        <>
          <AktivitasBerjalanPerizinan schoolType="sma" jenisPerizinan="Perizinan SMA" namaPerizinan="Perizinan Pembangunan Sekolah" tanggal="13 November 2023" sekolah="SMAN 6 Surabaya" pengaju="Alda Elsa Faradila" status="Diproses" />
          <AktivitasBerjalanPerizinan schoolType="tk" jenisPerizinan="Perizinan TK" namaPerizinan="Perizinan Pembangunan Sekolah" tanggal="20 November 2023" sekolah="TK Saint Marius" pengaju="Alda Elsa Faradila" status="Diproses" />
        </>
      ) : (
        <AktivitasKosongPerizinan />
      )}
    </div>
  );
};

export default VerifikasiRiwayatDashboardUser;

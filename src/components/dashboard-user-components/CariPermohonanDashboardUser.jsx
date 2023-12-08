import React, { useEffect, useState } from "react";
import { userService } from "../../services";
import Popup from "reactjs-popup";
import AktivitasBerjalanPerizinan from "../pengajuan-perizinan-components/AktivitasBerjalanPerizinan";
import LoadingPopup from "../popup-components/LoadingPopup";

const CariPermohonanDashboardUser = () => {
  const [profile, setProfile] = useState();
  const [pengajuan, setPengajuan] = useState();
  const [idSuratInput, setIdSuratInput] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCariPengajuanDetailData = async (id_surat_input) => {
    try {
      setLoading(true);
      const response = await userService.getProfile();
      setProfile(response?.data?.data);

      const responsePengajuanDetail = await userService.getPengajuanByID(id_surat_input);
      setPengajuan(responsePengajuanDetail?.data?.data[0]);
      setShowPopup(true);
      setSearched(true);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setSearched(true);
      setLoading(false);
    }
  };

  const formatTanggal = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString("id-ID", options);
    return formattedDate;
  };

  useEffect(() => {
    if (pengajuan) {
      setShowPopup(true);
    }
  }, [pengajuan]);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <LoadingPopup loading={loading} />
      <h1 className="block mb-2 font-semibold text-base text-brand-500 capitalize">Lacak Permohonan Anda!</h1>
      <input className="w-full px-3 h-9 rounded-lg text-base border border-neutral-400 text-center" type="text" placeholder="Masukkan ID Pengajuan..." value={idSuratInput} onChange={(e) => setIdSuratInput(e.target.value)} />
      {searched && !pengajuan && <p className="text-danger-500 font-semibold text-sm text-center mt-2 mb-4">Pengajuan Tidak Ditemukan</p>}

      {pengajuan && (
        <Popup
          open={showPopup}
          closeOnDocumentClick={true}
          onClose={closePopup}
          modal
          nested
          overlayStyle={{
            background: "rgba(128, 128, 128, 0.7)",
            backdropFilter: "blur(5px)",
          }}
        >
          <div className="rounded-xl bg-white p-5">
            <h1 className="text-brand-500 text-center font-semibold text-lg mb-4">Data Permohonan Ditemukan</h1>
            <AktivitasBerjalanPerizinan
              id_surat={pengajuan?.id}
              kategoriPerizinan={pengajuan?.kategori}
              namaPerizinan={pengajuan?.surat_dokumen[0]?.surat_syarat?.surat_jenis?.nama}
              tanggalPengajuan={formatTanggal(pengajuan?.created_at)}
              namaSekolah={pengajuan?.nama}
              pemohon={profile?.nama_lengkap}
              status={pengajuan?.status}
            />
          </div>
        </Popup>
      )}
      <button className="block mt-4 py-2 px-4 bg-brand-500 w-fit mx-auto rounded-lg text-base font-semibold text-white" type="button" onClick={() => handleCariPengajuanDetailData(idSuratInput)}>
        Cari
      </button>
    </div>
  );
};

export default CariPermohonanDashboardUser;

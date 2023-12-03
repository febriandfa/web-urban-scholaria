import React from "react";

const KomentarPenolakanPopup = () => {
  return (
    <div className="p-6 bg-white rounded-xl">
      <h1 className="text-2xl font-semibold text-center text-danger-500">Komentar Penolakan</h1>
      <hr className="w-full h-0.5 rounded-full bg-neutral-300 mt-2 mb-4" />
      <p className="capitalized text-sm font-semibold">Nama File Tidak Valid</p>
      <p className="text-sm pl-4">Beberapa nama file tidak valid seperti ktp, surat tugas, tanda tangan palsu.</p>
      <br />
      <p className="capitalized text-sm font-semibold">Lampiran</p>
      <a className="text-sm pl-4 text-brand-500" href="#">
        buktipenolakan.pdf
      </a>
    </div>
  );
};

export default KomentarPenolakanPopup;

import React from "react";
import LinkBackGeneral from "../general-components/LinkBackGeneral";

const KetentuanPerizinan = () => {
  const ketentuanPengajuan = [
    "Bersedia mengikuti seluruh proses pengajuan perizinan dari awal sampai selesai.",
    "Bersedia memenuhi persyaratan administratif serta syarat dan ketentuan yang berlaku.",
    "Bersedia menaati segala ketentuan dan tata tertib yang telah ditentukan.",
    "Mengerti dan setuju bahwa aplikasi ini hanya digunakan untuk kebutuhan pengajuan administratif pengajuan di bidang pendidikan.",
    "Bersedia memberikan informasi pribadi yang tercantum dalam form pendaftaran.",
    "Setuju dan mengerti apabila dokumen pengajuan yang diajukan tidak sesuai sehingga pengajuan akan ditolak.",
  ];

  return (
    <div>
      <h1 className="text-lg font-semibold mb-6">Ketentuan & Pernyataan</h1>
      <p className="text-base font-normal text-neutral-500">Menyatakan:</p>
      <ol className="list-decimal text-base font-normal text-neutral-500 pl-10 mb-10">
        {ketentuanPengajuan.map((ketentuanItem) => (
          <li>{ketentuanItem}</li>
        ))}
      </ol>
      {/* <div className="flex items-center gap-4 h-fit">
        <input className="w-5 h-5" type="checkbox" name="setuju" id="setuju" />
        <label htmlFor="setuju">Saya telah telah bersedia mengikuti persyaratan yang ada pada formulir komitmen perizinan ini.</label>
      </div> */}
    </div>
  );
};

export default KetentuanPerizinan;

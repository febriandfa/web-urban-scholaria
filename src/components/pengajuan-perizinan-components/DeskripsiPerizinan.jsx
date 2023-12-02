import React from "react";

const DeskripsiPerizinan = ({ desc, legal, syarat, catatan }) => {
  return (
    <div>
      <div className="mb-4">
        <h1 className="font-bold text-base mb-4">Deskripsi Perizinan</h1>
        <p className="font-normal text-sm text-neutral-500 text-justify">{desc}</p>
      </div>
      <div className="mb-4">
        <h1 className="font-bold text-base mb-4">Legalitas Perizinan</h1>
        <p className="font-normal text-sm text-neutral-500 text-justify">{legal}</p>
      </div>
      <div className="mb-4">
        <h1 className="font-bold text-base mb-4">Persyaratan Pemohon</h1>
        <ol className="list-decimal pl-10 text-sm text-neutral-500">
          {syarat.map((syaratItem, index) => (
            <li key={index} className="mb-1">
              {syaratItem}
            </li>
          ))}
        </ol>
      </div>
      <div className="mb-4">
        <h1 className="font-bold text-neutral-800 text-base mb-4">Catatan</h1>
        <p className="font-semibold text-sm text-justify">{catatan}</p>
      </div>
      <h1 className="font-bold text-base mb-4">Terima kasih atas kerjasama dan pengertian Anda.</h1>
    </div>
  );
};

export default DeskripsiPerizinan;

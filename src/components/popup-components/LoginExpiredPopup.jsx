import React from "react";

const LoginExpiredPopup = () => {
  return (
    <div className="p-4 bg-white rounded-lg text-center">
      <h1 className="text-brand-500 font-semibold text-2xl">Sesi Login Telah Berakhir</h1>
      <h1 className="text-brand-500 font-semibold text-2xl">Silahkan Login Kembali</h1>
      <p className="font-semibold text-lg mb-6">Login Kembali Untuk Mengakses Seluruh Fitur Urban Scholaria!</p>
      <button className="block mt-4 py-2 px-4 bg-brand-500 w-fit mx-auto rounded-lg text-base font-semibold text-white">Masuk</button>
    </div>
  );
};

export default LoginExpiredPopup;

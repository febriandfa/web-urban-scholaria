import React from "react";
import { bgHome } from "../../assets";
import InputTextGeneral from "../general-components/InputTextGeneral";
import InputDateGeneral from "../general-components/InputDateGeneral";
import InputSelectGeneral from "../general-components/InputSelectGeneral";

const EditDataDiriDashboardUser = () => {
  const optionJenisKelamin = [
    {
      value: "",
      text: "Pilih Jenis Kelamin",
    },
    {
      value: "Perempuan",
      text: "Perempuan",
    },
    {
      value: "Laki-Laki",
      text: "Laki-Laki",
    },
  ];

  return (
    <div className="px-10">
      <img className="w-24 h-24 object-cover object-center rounded-full mx-auto mb-6" src={bgHome} alt="" />
      <label className="flex items-center cursor-pointer rounded-lg w-fit h-9 px-4 py-2 bg-brand-500 mx-auto mb-16" htmlFor="foto">
        <span className="flex items-center text-base font-semibold text-white">Ubah Foto Profil</span>
        <input className="hidden" id="foto" type="file" />
      </label>
      <div className="grid grid-cols-2">
        <div>
          <div className="w-60">
            <InputTextGeneral name="nama" label="Nama Lengkap (Sesuai KTP)" value="Alda Elsa Faradila" required />
          </div>
          <div className="w-60">
            <InputTextGeneral name="email" label="Email" value="aldael**@gmail.com" disabled />
          </div>
          <div className="w-60">
            <InputDateGeneral name="tanggal-lahir" label="Tanggal Lahir" required />
          </div>
        </div>
        <div className="ml-auto">
          <div className="w-60">
            <InputTextGeneral name="nik" label="NIK" value="1234567890123456" disabled />
          </div>
          <div className="w-60">
            <InputTextGeneral name="no-telp" label="No. Handphone" value="+6281231567840" required />
          </div>
          <div className="w-60">
            <InputSelectGeneral name="jenis-kelamin" label="Jenis Kelamin" option={optionJenisKelamin} required />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDataDiriDashboardUser;

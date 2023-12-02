import React from "react";
import { bgHome } from "../../assets";
import InputTextGeneral from "../general-components/InputTextGeneral";

const EditDataDiriDashboardAdministrator = () => {
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
            <InputTextGeneral name="username" label="Username" value="aldagaming" required disabled />
          </div>
          <div className="w-60">
            <InputTextGeneral name="nama-lengkap" label="Nama Lengkap" value="Alda Elsa Faradilla" required disabled />
          </div>
        </div>
        <div className="ml-auto">
          <div className="w-60">
            <InputTextGeneral name="role" label="Role" value="Verifikator" required disabled />
          </div>
          <div className="w-60">
            <InputTextGeneral name="email" label="Email" value="aldael***@gmail.com" required disabled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDataDiriDashboardAdministrator;

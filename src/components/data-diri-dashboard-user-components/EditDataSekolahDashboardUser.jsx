import React from "react";
import InputTextGeneral from "../general-components/InputTextGeneral";

const EditDataSekolahDashboardUser = () => {
  return (
    <div className="grid grid-cols-2 px-10">
      <div>
        <div className="w-60">
          <InputTextGeneral name="provinsi" label="Provinsi" value="Jawa Timur" required />
        </div>
        <div className="w-60">
          <InputTextGeneral name="kecamatan" label="Kecamatan" value="Gayungan" required />
        </div>
      </div>
      <div className="ml-auto">
        <div className="w-60">
          <InputTextGeneral name="kota-kabupaten" label="Kota/Kabupaten" value="Surabaya" required />
        </div>
        <div className="w-60">
          <InputTextGeneral name="desa-kelurahan" label="Desa/Kelurahan" value="Ketintang" required />
        </div>
      </div>
    </div>
  );
};

export default EditDataSekolahDashboardUser;

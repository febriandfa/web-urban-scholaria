import React from "react";
import LabelGeneral from "../general-components/LabelGeneral";

const ShowDataSekolahDashboardUser = () => {
  return (
    <div className="grid grid-cols-2 px-10">
      <div>
        <div className="w-60">
          <LabelGeneral title="Provinsi" value="Jawa Timur" />
        </div>
        <div className="w-60">
          <LabelGeneral title="Kecamatan" value="Gayungan" />
        </div>
      </div>
      <div className="ml-auto">
        <div className="w-60">
          <LabelGeneral title="Kota/Kabupaten" value="Surabaya" />
        </div>
        <div className="w-60">
          <LabelGeneral title="Desa/Kelurahan" value="Ketintang" />
        </div>
      </div>
    </div>
  );
};

export default ShowDataSekolahDashboardUser;

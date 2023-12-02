import React from "react";
import LabelGeneral from "../general-components/LabelGeneral";
import { bgHome } from "../../assets";

const ShowDataDiriDashboardUser = () => {
  return (
    <div className="px-10">
      <img className="w-24 h-24 object-cover object-center rounded-full mx-auto mb-16" src={bgHome} alt="" />
      <div className="grid grid-cols-2">
        <div>
          <div className="w-60">
            <LabelGeneral title="Nama Lengkap (Sesuai KTP)" value="Alda Elsa Faradila" />
          </div>
          <div className="w-60">
            <LabelGeneral title="Email" value="aldael**@gmail.com" />
          </div>
          <div className="w-60">
            <LabelGeneral title="Tanggal Lahir" value="13/11/2023" />
          </div>
        </div>
        <div className="ml-auto">
          <div className="w-60">
            <LabelGeneral title="NIK" value="1234567890123456" />
          </div>
          <div className="w-60">
            <LabelGeneral title="No. Handphone" value="+6281231567840" />
          </div>
          <div className="w-60">
            <LabelGeneral title="Jenis Kelamin" value="Perempuan" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDataDiriDashboardUser;

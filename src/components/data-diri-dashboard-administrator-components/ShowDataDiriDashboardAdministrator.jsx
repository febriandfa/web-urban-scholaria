import React from "react";
import LabelGeneral from "../general-components/LabelGeneral";
import { bgHome } from "../../assets";

const ShowDataDiriDashboardAdministrator = () => {
  return (
    <div className="px-10">
      <img className="w-24 h-24 object-cover object-center rounded-full mx-auto mb-16" src={bgHome} alt="" />
      <div className="grid grid-cols-2">
        <div>
          <div className="w-60">
            <LabelGeneral title="Username" value="aldagaming" />
          </div>
          <div className="w-60">
            <LabelGeneral title="Nama Lengkap" value="Alda Elsa Faradilla" />
          </div>
        </div>
        <div className="ml-auto">
          <div className="w-60">
            <LabelGeneral title="Role" value="Verifikator" />
          </div>
          <div className="w-60">
            <LabelGeneral title="Email" value="aldael***@gmail.com" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDataDiriDashboardAdministrator;

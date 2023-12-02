import React from "react";
import InputTextGeneral from "../general-components/InputTextGeneral";

const EditDataPekerjaanDashboardUser = () => {
  return (
    <div className="grid grid-cols-2 px-10">
      <div>
        <div className="w-60">
          <InputTextGeneral name="pekerjaan" label="Pekerjaan" value="Guru" required />
        </div>
      </div>
    </div>
  );
};

export default EditDataPekerjaanDashboardUser;

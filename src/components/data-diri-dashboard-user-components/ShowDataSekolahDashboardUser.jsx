import React, { useEffect, useState } from "react";
import LabelGeneral from "../general-components/LabelGeneral";
import { userService } from "../../services";

const ShowDataSekolahDashboardUser = () => {
  const [profile, setProfile] = useState();

  const profileData = async () => {
    try {
      const response = await userService.getProfile();
      // console.log(response);
      setProfile(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    profileData();
  }, []);

  return (
    <div className="grid grid-cols-2 px-10">
      <div>
        <div className="w-60">
          <LabelGeneral title="Provinsi" value={profile ? profile.provinsi : "Loading..."} />
        </div>
        <div className="w-60">
          <LabelGeneral title="Kecamatan" value={profile ? profile.kecamatan : "Loading..."} />
        </div>
      </div>
      <div className="ml-auto">
        <div className="w-60">
          <LabelGeneral title="Kota/Kabupaten" value={profile ? profile.kabupaten_kota : "Loading..."} />
        </div>
        <div className="w-60">
          <LabelGeneral title="Desa/Kelurahan" value={profile ? profile.kelurahan : "Loading..."} />
        </div>
      </div>
    </div>
  );
};

export default ShowDataSekolahDashboardUser;

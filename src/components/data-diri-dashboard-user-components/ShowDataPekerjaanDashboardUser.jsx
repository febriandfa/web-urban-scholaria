import React, { useEffect, useState } from "react";
import LabelGeneral from "../general-components/LabelGeneral";
import { userService } from "../../services";

const ShowDataPekerjaanDashboardUser = () => {
  const [profile, setProfile] = useState();

  const profileData = async () => {
    try {
      const response = await userService.getProfile();
      console.log(response);
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
          <LabelGeneral title="Pekerjaan" value={profile ? profile.pekerjaan : "Loading..."} />
        </div>
      </div>
    </div>
  );
};

export default ShowDataPekerjaanDashboardUser;

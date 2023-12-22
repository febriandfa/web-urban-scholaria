import React, { useEffect, useState } from "react";
import LabelGeneral from "../general-components/LabelGeneral";
import { bgHome, iconUser } from "../../assets";
import { userService } from "../../services";
import LoadingPopup from "../popup-components/LoadingPopup";

const ShowDataDiriDashboardAdministrator = () => {
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(false);

  const profileData = async () => {
    try {
      setLoading(true);
      const response = await userService.getProfile();
      console.log(response);
      setProfile(response?.data?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    profileData();
    // console.log(profile);
  }, []);

  return (
    <div>
      <LoadingPopup loading={loading} />
      <div className="px-10">
        <img className="w-24 h-24 object-cover object-center rounded-full mx-auto mb-16" src={`https://urbanscholaria.my.id/storage/${profile?.foto}` || iconUser} alt="" />
        <div className="grid grid-cols-2">
          <div>
            <div className="w-60">
              <LabelGeneral title="Nama Lengkap" value={profile ? profile.nama_lengkap : "Loading..."} />
            </div>
            <div className="w-60">
              <LabelGeneral title="Nomor Handphone" value={profile ? profile.no_telp : "Loading.."} />
            </div>
          </div>
          <div className="ml-auto">
            <div className="w-60">
              <LabelGeneral title="Role" value={profile ? profile.role.nama : "Loading.."} />
            </div>
            <div className="w-60">
              <LabelGeneral title="Email" value={profile ? profile.email : "Loading.."} />
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full h-0.5 rounded-full bg-neutral-300 mb-6" />
    </div>
  );
};

export default ShowDataDiriDashboardAdministrator;

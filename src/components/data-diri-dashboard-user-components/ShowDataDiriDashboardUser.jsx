import React, { useEffect, useState } from "react";
import LabelGeneral from "../general-components/LabelGeneral";
import { bgHome, iconUser } from "../../assets";
import { userService } from "../../services";
import LoadingPopup from "../popup-components/LoadingPopup";

const ShowDataDiriDashboardUser = () => {
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(false);

  const profileData = async () => {
    try {
      setLoading(true);
      const response = await userService.getProfile();
      // console.log(response);
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
    <>
      <LoadingPopup loading={loading} />
      <div className="px-10">
        <img className="w-24 h-24 object-cover object-center rounded-full mx-auto mb-16" src={profile?.foto || iconUser} alt="" />
        <div className="grid grid-cols-2">
          <div>
            {/* <div className="w-60">
              <LabelGeneral title="Username" value={profile ? profile.username : "Loading..."} />
            </div> */}
            <div className="w-60">
              <LabelGeneral title="Nama Lengkap (Sesuai KTP)" value={profile ? profile.nama_lengkap : "Loading..."} />
            </div>
            <div className="w-60">
              <LabelGeneral title="Email" value={profile ? profile.email : "Loading..."} />
            </div>
            <div className="w-60">
              <LabelGeneral title="Jenis Kelamin" value={profile ? profile.jenis_kelamin : "Loading..."} />
            </div>
            <div className="w-60">
              <LabelGeneral title="Tempat Lahir" value={profile ? profile.tempat_lahir : "Loading..."} />
            </div>
          </div>
          <div className="ml-auto">
            <div className="w-60">
              <LabelGeneral title="NIK" value={profile ? profile.nomor_identitas : "Loading..."} />
            </div>
            <div className="w-60">
              <LabelGeneral title="No. Handphone" value={profile ? profile.no_telp : "Loading..."} />
            </div>
            <div className="w-60">
              <LabelGeneral title="Pekerjaan" value={profile ? profile.pekerjaan : "Loading..."} />
            </div>
            <div className="w-60">
              <LabelGeneral title="Tanggal Lahir" value={profile ? profile.tanggal_lahir : "Loading..."} />
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full h-0.5 rounded-full bg-neutral-300 mb-6" />
      <h1 className="font-semibold text-base text-neutral-500">Domisili</h1>
      <p className="text-sm text-neutral-500 mb-6">Isi dengan domisili Anda berada.</p>
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
      <hr className="w-full h-0.5 rounded-full bg-neutral-300 mb-6" />
      {/* <h1 className="font-semibold text-base text-neutral-500">Pekerjaan</h1>
      <p className="text-sm text-neutral-500 mb-6">Isi dengan Pekerjaan Anda.</p> */}
      {/* <div className="grid grid-cols-2 px-10"> */}
      {/* <div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default ShowDataDiriDashboardUser;

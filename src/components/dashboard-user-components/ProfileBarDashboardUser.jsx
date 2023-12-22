import React, { useState, useEffect } from "react";
import { bgHome, iconUser } from "../../assets";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { userService } from "../../services";

const ProfileBarDashboardUser = ({ onClick }) => {
  const location = useLocation();
  // const userdata = localStorage.getItem("tokenUser");
  const [profil, setProfil] = useState();

  const profile = async () => {
    // console.log(userdata);
    // let config = {
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${userdata}`,
    //   },
    // };
    try {
      const response = await userService.getProfile();
      // console.log(response);
      // const response = await axios.get("https://urbanscholaria.my.id/api/profile", config);
      // localStorage.setItem("tokenUser", JSON.stringify(response.data.access_token));
      // navigate("/dashboard");
      console.log("Profile Bar", response);
      setProfil(response?.data?.data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  useEffect(() => {
    profile();
  }, []);

  const hideButtonOnDashboard = location.pathname.startsWith("/data-diri");

  return (
    <div className="flex items-center pb-4 border-b-2 border-neutral-300">
      <img className="rounded-full w-16 h-16 object-cover object-center" src={`https://urbanscholaria.my.id/storage/${profil?.foto}` || iconUser} alt="" />
      <div className="font-semibold mr-auto ml-8">
        <p className="text-neutral-500 text-sm">Selamat Datang</p>
        <p className="text-lg">{profil ? profil?.nama_lengkap : "Loading..."}</p>
      </div>
      {hideButtonOnDashboard && (
        <button className="flex items-center gap-2 w-fit px-4 py-2 bg-brand-500 text-white text-base font-semibold rounded-lg" onClick={onClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M12.6935 4.36019L15.6398 7.30647M13.9435 3.11019C14.7571 2.2966 16.0762 2.2966 16.8898 3.11019C17.7034 3.92379 17.7034 5.24288 16.8898 6.05647L5.41667 17.5296H2.5V14.5537L13.9435 3.11019Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Edit
        </button>
      )}
    </div>
  );
};

export default ProfileBarDashboardUser;

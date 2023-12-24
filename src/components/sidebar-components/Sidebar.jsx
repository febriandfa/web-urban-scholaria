import React, { useEffect } from "react";
import { logoUrban } from "../../assets";
import ItemSidebar from "./ItemSidebar";
import { userSidebar, operatorSidebar, verifikatorSidebar, surveyorSidebar, auditorSidebar, adminUtamaSidebar, adminDinasSidebar, kepalaDinasSidebar } from "../../utils/MenuSidebarData";
import DropdownSidebar from "./DropdownSidebar";
import { userService } from "../../services";
import { removeToken } from "../../services/storage.service";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Sidebar = ({ role }) => {
  const location = useLocation();
  const activeItem = location.pathname === "/obrolan";

  let sidebarData = [];
  if (role === "Pemohon") {
    sidebarData = userSidebar;
  } else if (role === "Operator") {
    sidebarData = operatorSidebar;
  } else if (role === "Verifikator") {
    sidebarData = verifikatorSidebar;
  } else if (role === "Surveyor") {
    sidebarData = surveyorSidebar;
  } else if (role === "Auditor") {
    sidebarData = auditorSidebar;
  } else if (role === "Admin Utama") {
    sidebarData = adminUtamaSidebar;
  } else if (role === "Admin Dinas") {
    sidebarData = adminDinasSidebar;
  } else if (role === "Kepala Dinas") {
    sidebarData = kepalaDinasSidebar;
  }

  const sidebarAdminUtama_0_3 = adminUtamaSidebar.slice(0, 3);
  const sidebarAdminUtama_4 = [adminUtamaSidebar[4]];
  const sidebarAdminDinas_0_4 = adminDinasSidebar.slice(0, 4);
  const sidebarAdminDinas_5_6 = adminDinasSidebar.slice(5, 6);
  const sidebarKepalaDinas_0_4 = kepalaDinasSidebar.slice(0, 4);
  const sidebarKepalaDinas_5 = [kepalaDinasSidebar[5]];

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await userService.postLogout();
      if (response.status === 200) {
        removeToken();
        localStorage.setItem("UserDetail", null);
        localStorage.setItem("TOKEN_EXPIRY", null);
        localStorage.setItem("RoomChatId", null);
        localStorage.setItem("KategoriPerizinan", null);
        localStorage.setItem("IdSuratDiajukan", null);
        localStorage.setItem("SurveyID", null);
        localStorage.setItem("SuratJenisID", null);
        localStorage.setItem("ReceiverId", null);
        // localStorage.setItem("USER_DETAIL", null);
        navigate("/");
        console.log("Berhasil logout");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleObrolanOnClick = async () => {
    try {
      const response = await userService.postStartChat({ receiver_user_id: "10" });
      console.log("Room Didapat", response);
      localStorage.setItem("RoomChatId", response?.data?.room_id);
    } catch (error) {
      console.error(error);
    }
  };

  const triggerAlert = () => {
    Swal.fire({
      title: "Keluar Dari Akun?",
      text: "Apakah anda yakin keluar dari akun?",
      icon: "question",
      showDenyButton: true,
      confirmButtonText: "Ya",
      confirmButtonColor: "#1F8428",
      denyButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        handleLogout();
      } else if (result.isDenied) {
        close;
      }
    });
  };

  return (
    <div className="fixed top-0 left-0 z-30 w-64 h-screen p-6 bg-white">
      <a className="flex items-center gap-2 mb-7" href="/">
        <img className="w-12 h-12" src={logoUrban} alt="logo" />
        <p className="text-xl font-semibold text-brand-800">URBAN SCHOLARIA</p>
      </a>
      <p className="text-base font-semibold">Menu</p>
      <div className="flex flex-col justify-between h-full pb-36">
        <div className="px-3 py-4 overflow-y-auto" style={{ height: "calc(100% - 7rem)" }}>
          {role === "Admin Utama" || role === "Admin Dinas" || role === "Kepala Dinas" ? (
            <>
              {role === "Admin Utama" && (
                <ul>
                  {sidebarAdminUtama_0_3.map((sidebarItem, index) => (
                    <div key={index}>
                      <ItemSidebar icon={sidebarItem.icon} link={sidebarItem.link} title={sidebarItem.title} />
                    </div>
                  ))}
                  <DropdownSidebar />
                  {sidebarAdminUtama_4.map((sidebarItem, index) => (
                    <div key={index}>
                      <ItemSidebar icon={sidebarItem.icon} link={sidebarItem.link} title={sidebarItem.title} />
                    </div>
                  ))}
                </ul>
              )}
              {role === "Admin Dinas" && (
                <ul>
                  {sidebarAdminDinas_0_4.map((sidebarItem, index) => (
                    <div key={index}>
                      <ItemSidebar icon={sidebarItem.icon} link={sidebarItem.link} title={sidebarItem.title} />
                    </div>
                  ))}
                  <DropdownSidebar />
                  {sidebarAdminDinas_5_6.map((sidebarItem, index) => (
                    <div key={index}>
                      <ItemSidebar icon={sidebarItem.icon} link={sidebarItem.link} title={sidebarItem.title} />
                    </div>
                  ))}
                </ul>
              )}
              {role === "Kepala Dinas" && (
                <ul>
                  {sidebarKepalaDinas_0_4.map((sidebarItem, index) => (
                    <div key={index}>
                      <ItemSidebar icon={sidebarItem.icon} link={sidebarItem.link} title={sidebarItem.title} />
                    </div>
                  ))}
                  <DropdownSidebar />
                  {sidebarKepalaDinas_5.map((sidebarItem, index) => (
                    <div key={index}>
                      <ItemSidebar icon={sidebarItem.icon} link={sidebarItem.link} title={sidebarItem.title} />
                    </div>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <ul className="space-y-2 font-medium text-base">
              {sidebarData.map((sidebarItem, index) => (
                <div key={index}>
                  <ItemSidebar icon={sidebarItem.icon} link={sidebarItem.link} title={sidebarItem.title} />
                </div>
              ))}
              {role === "Pemohon" && (
                <li>
                  <Link to="/obrolan" className={`flex items-center p-2 ${activeItem ? "text-brand-500" : "text-neutral-800"}`} onClick={() => handleObrolanOnClick()}>
                    <div className="w-6 h-6">
                      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.4183 16.9706 20 12 20C10.4607 20 9.01172 19.6565 7.74467 19.0511L3 20L4.39499 16.28C3.51156 15.0423 3 13.5743 3 12C3 7.58172 7.02944 4 12 4C16.9706 4 21 7.58172 21 12Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="ml-3">Obrolan</span>
                  </Link>
                </li>
              )}
            </ul>
          )}
        </div>
        <div className="px-3 py-4">
          <ul className="space-y-2 font-medium text-base">
            <li>
              <button className="flex items-center p-2" onClick={triggerAlert}>
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8"
                    stroke="#0F172A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ml-3">Keluar</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React, { useState } from "react";
import Swal from "sweetalert2";
import { userService } from "../../services";
import { accAktivasiPengguna, declineAktivasiPengguna } from "../../services/user.service";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import InputTolakAktivasiPopup from "../popup-components/InputTolakAktivasiPopup";
import LoadingPopup from "../popup-components/LoadingPopup";

const AktivasiButtonKelolaAkunDashboatdAdminDinas = ({ verified, idUser, tokenAdmin, isActive }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleAccAktivasiAkun = async () => {
    try {
      setLoading(true);
      const response = await userService.accAktivasiPengguna(idUser, tokenAdmin);
      console.log(response);
      setLoading(false);
      triggerAlertAccept();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // const handleDeclineAktivasiAkun = async () => {
  //   try {
  //     const response = await userService.declineAktivasiPengguna(idUser, tokenAdmin);
  //     console.log(response);
  //     triggerAlertDecline();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const triggerAlertAccept = () => {
    Swal.fire({
      icon: "success",
      title: "AKUN BERHASIL DIAKTIVASI",
      text: "Permohonan aktivasi akun berhasil",
      confirmButtonText: "Lanjut",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/kelola-pengguna-dinas");
      }
    });
  };

  // const triggerAlertDecline = () => {
  //   Swal.fire({
  //     icon: "error",
  //     title: "AKUN GAGAL DIAKTIVASI",
  //     text: "Permohonan aktivasi akun gagal",
  //     confirmButtonText: "Lanjut",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       navigate("/kelola-pengguna-dinas");
  //     }
  //   });
  // };

  return (
    <div>
      <LoadingPopup loading={loading} />
      {isActive ? (
        <button className={`py-2 px-4 bg-danger-500 w-full rounded-lg text-base font-semibold text-white mb-3`} type="submit">
          Hapus Akun
        </button>
      ) : (
        <>
          <Popup
            trigger={
              <button className={`py-2 px-4 bg-danger-500 w-full rounded-lg text-base font-semibold text-white mb-3`} type="submit">
                Tolak Aktivasi Akun
              </button>
            }
            modal
            nested
            overlayStyle={{
              background: "rgba(128, 128, 128, 0.7)",
              backdropFilter: "blur(5px)",
            }}
          >
            {(close) => <InputTolakAktivasiPopup close={close} />}
          </Popup>
          <button
            className={`py-2 px-4 w-full rounded-lg text-base font-semibold ${verified ? "text-white bg-brand-500" : "text-neutral-500 bg-neutral-100"}`}
            disabled={!verified}
            type="submit"
            onClick={() => handleAccAktivasiAkun(idUser, tokenAdmin)}
          >
            Aktivasi Akun
          </button>
        </>
      )}
    </div>
  );
};

export default AktivasiButtonKelolaAkunDashboatdAdminDinas;

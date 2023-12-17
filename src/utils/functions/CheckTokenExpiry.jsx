import Swal from "sweetalert2";
import { userService } from "../../services";
import { removeToken } from "../../services/storage.service";

const triggerAlertAccept = (navigate) => {
  Swal.fire({
    icon: "error",
    title: "SESI LOGIN TELAH KADALUARSA",
    text: "Sesi login telah kadaluarsa silahkan login kembali",
  }).then((result) => {
    if (result.isConfirmed) {
      navigate("/masuk");
    }
  });
};

const handleLogout = async () => {
  try {
    const response = await userService.postLogout();
    if (response.status === 200) {
      removeToken();
      localStorage.setItem("UserDetail", null);
      console.log("Berhasil logout");
    }
  } catch (error) {
    console.error(error);
  }
};

const CheckTokenExpiry = async (navigate) => {
  const tokenExpiry = parseInt(localStorage.getItem("TOKEN_EXPIRY"));
  const currentTime = new Date().getTime();

  if (currentTime > tokenExpiry || isNaN(tokenExpiry)) {
    console.log("Token telah kedaluwarsa, silakan login kembali");
    await handleLogout();
    navigate("/masuk");
    triggerAlertAccept(navigate);
  }
};

export default CheckTokenExpiry;

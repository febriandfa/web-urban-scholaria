import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { userService } from "../../services";

const SimpanButtonTugasSurveyDashboardSurveyor = ({ idSurat }) => {
  const navigate = useNavigate();

  const handleStartChat = async () => {
    try {
      const response = await userService.postStartChat({ receiver_user_id: "11" });
      console.log("Room Didapat", response);
      localStorage.setItem("RoomChatId", response?.data?.room_id);
      triggerAlert();
      postSendMessage();
    } catch (error) {
      console.error(error);
    }
  };

  const postSendMessage = async () => {
    const roomChatId = localStorage.getItem("RoomChatId");
    try {
      const response = await userService.postSendMessage(roomChatId, { receiver_user_id: "11", message: `Survey Untuk ID Surat ${idSurat} Telah Selesai` });
      console.log("Terkirim", response);
    } catch (error) {
      console.error(error);
    }
  };

  const triggerAlert = () => {
    Swal.fire({
      icon: "success",
      title: "TUGAS SURVEY BERHASIL DISELESAIKAN",
      text: "Terima kasih telah menyelesaikan tugas survey.",
      confirmButtonText: "Lanjut",
    }).then(() => {
      close();
      navigate("/tugas-survey-surveyor");
    });
  };

  return (
    <div>
      <button className={`py-2 px-4 w-full rounded-lg text-base font-semibold text-white bg-brand-500`} type="button" onClick={() => handleStartChat()}>
        Simpan
      </button>
    </div>
  );
};

export default SimpanButtonTugasSurveyDashboardSurveyor;

import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SimpanButtonTugasSurveyDashboardSurveyor = ({ verified }) => {
  const navigate = useNavigate();

  const triggerAlert = () => {
    // e.preventDefault();
    Swal.fire({
      // imageUrl: alertNextSurveyor,
      // imageHeight: 131,
      // imageWidth: 131,
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
      <button className={`py-2 px-4 w-full rounded-lg text-base font-semibold text-white bg-brand-500`} type="button" onClick={() => triggerAlert()}>
        Simpan
      </button>
    </div>
  );
};

export default SimpanButtonTugasSurveyDashboardSurveyor;

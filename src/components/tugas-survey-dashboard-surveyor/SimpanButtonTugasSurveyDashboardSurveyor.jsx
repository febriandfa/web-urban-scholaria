import React from "react";
import { useNavigate } from "react-router-dom";

const SimpanButtonTugasSurveyDashboardSurveyor = ({ verified }) => {
  const navigate = useNavigate();

  return (
    <div>
      <button className={`py-2 px-4 w-full rounded-lg text-base font-semibold text-white bg-brand-500`} type="button" onClick={() => navigate("/tugas-survey-surveyor")}>
        Simpan
      </button>
    </div>
  );
};

export default SimpanButtonTugasSurveyDashboardSurveyor;

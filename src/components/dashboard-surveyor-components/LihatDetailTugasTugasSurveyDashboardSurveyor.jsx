import React from "react";
import { Link } from "react-router-dom";

const LihatDetailTugasTugasSurveyDashboardSurveyor = ({ id_survey, id_surat }) => {
  const handleCekClick = async () => {
    try {
      localStorage.setItem("SurveyID", id_survey);
      localStorage.setItem("IdSuratDiajukan", id_surat);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Link className="flex w-fit items-center gap-2 text-base font-semibold text-brand-500" to="/detail-tugas-surveyor" onClick={() => handleCekClick(id_surat)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M7 12C7 10.8954 7.89543 10 9 10H19C20.1046 10 21 10.8954 21 12V17C21 18.1046 20.1046 19 19 19H5C6.10457 19 7 18.1046 7 17V12Z" fill="#191D88" />
        <path
          d="M5 19C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5H9L11 7H15C16.1046 7 17 7.89543 17 9V10M5 19H19C20.1046 19 21 18.1046 21 17V12C21 10.8954 20.1046 10 19 10H9C7.89543 10 7 10.8954 7 12V17C7 18.1046 6.10457 19 5 19Z"
          stroke="#0F172A"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      Detail Tugas
    </Link>
  );
};

export default LihatDetailTugasTugasSurveyDashboardSurveyor;

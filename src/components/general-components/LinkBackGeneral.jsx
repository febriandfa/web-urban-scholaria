import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LinkBackGeneral = ({ link }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Link className="text-brand-500 font-semibold flex items-center gap-1.5" to={link} onClick={() => window.history.back()}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.2484 6.35147C15.7171 6.8201 15.7171 7.5799 15.2484 8.04853L11.297 12L15.2484 15.9515C15.7171 16.4201 15.7171 17.1799 15.2484 17.6485C14.7798 18.1172 14.02 18.1172 13.5514 17.6485L8.75137 12.8485C8.28275 12.3799 8.28275 11.6201 8.75137 11.1515L13.5514 6.35147C14.02 5.88284 14.7798 5.88284 15.2484 6.35147Z"
          fill="currentColor"
        />
      </svg>
      Kembali
    </Link>
  );
};

export default LinkBackGeneral;

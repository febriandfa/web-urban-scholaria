import React from "react";
import { Link } from "react-router-dom";

const LinkButtonNavbar = ({ link, beforesvg, text, aftersvg, onClick }) => {
  return (
    <Link className="flex items-center gap-2 w-52 px-4 py-2 bg-brand-500 text-white text-base font-semibold rounded-lg" to={link}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M4.26753 14.8364C5.96056 13.8795 7.9165 13.3333 10 13.3333C12.0835 13.3333 14.0394 13.8795 15.7325 14.8364M12.5 8.33333C12.5 9.71405 11.3807 10.8333 10 10.8333C8.61929 10.8333 7.5 9.71405 7.5 8.33333C7.5 6.95262 8.61929 5.83333 10 5.83333C11.3807 5.83333 12.5 6.95262 12.5 8.33333ZM17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
          stroke="#F1F5F9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="break-words text-ellipsis whitespace-nowrap overflow-hidden">{text}</p>
    </Link>
  );
};

export default LinkButtonNavbar;

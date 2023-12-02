import React from "react";
import { Link } from "react-router-dom";

const LinkButtonGeneral = ({ link, beforesvg, text, aftersvg, onClick }) => {
  return (
    <Link className="flex items-center gap-2 w-fit px-4 py-2 bg-brand-500 text-white text-base font-semibold rounded-lg cursor-pointer" to={link} onClick={onClick}>
      {beforesvg}
      {text}
      {aftersvg}
    </Link>
  );
};

export default LinkButtonGeneral;

import React from "react";

const LinkButtonGeneral = ({ link, beforesvg, text, aftersvg, onClick }) => {
  return (
    <a className="flex items-center gap-2 w-fit px-4 py-2 bg-brand-500 text-white text-base font-semibold rounded-lg cursor-pointer" href={link} onClick={onClick}>
      {beforesvg}
      {text}
      {aftersvg}
    </a>
  );
};

export default LinkButtonGeneral;

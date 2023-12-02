import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-16 bg-brand-500 relative z-30">
      <div className="w-full h-full flex justify-around items-center font-normal text-base text-white">
        <p className="block w-fit">Copyright 2023 @ Urban Labs</p>
        <ul className="w-1/5 flex justify-between">
          <li>
            <Link to="/syarat-ketentuan">Syarat & Ketentuan</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

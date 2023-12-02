import React from "react";
import { Link, useLocation } from "react-router-dom";

const ItemSidebar = ({ link, icon, title }) => {
  const location = useLocation();
  const activeItem = location.pathname === link;

  return (
    <li>
      <Link to={link} class={`flex items-center p-2 ${activeItem ? "text-brand-500" : "text-neutral-800"}`}>
        <div className="w-6 h-6">{icon}</div>
        <span class="ml-3">{title}</span>
      </Link>
    </li>
  );
};

export default ItemSidebar;

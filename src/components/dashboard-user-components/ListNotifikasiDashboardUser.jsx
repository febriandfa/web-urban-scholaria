import React from "react";
import CardGeneral from "../general-components/CardGeneral";

const ListNotifikasiDashboardUser = ({ color, notifikasi, showNotifikasiDetail }) => {
  return (
    <div>
      <h1 className="block mb-2 font-semibold text-base text-brand-500 capitalize">Notifikasi</h1>
      <CardGeneral color={color} customClass="max-h-96 overflow-y-auto">
        {notifikasi.map((notifikasiItem, index) => (
          <div key={index} className="border-b-2 border-neutral-300 pb-2 my-3 flex items-center gap-4 cursor-pointer" onClick={() => showNotifikasiDetail(index)}>
            <div className="rounded-xl p-2 bg-brand-100 w-12 h-12">{notifikasiItem.icon}</div>
            <div className="w-1/2">
              <h1 className="font-semibold text-sm mb-1">{notifikasiItem.title}</h1>
              <p className="font-normal text-xs text-neutral-500 overflow-hidden whitespace-nowrap">{notifikasiItem.subject}</p>
            </div>
            <p className="font-normal text-neutral-500 text-xs ml-auto">{notifikasiItem.date}</p>
          </div>
        ))}
      </CardGeneral>
    </div>
  );
};

export default ListNotifikasiDashboardUser;

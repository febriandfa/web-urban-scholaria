import React from "react";

const DetailNotifikasiDashboardUser = ({ icon, title, subject, date, body }) => {
  return (
    <div className="my-10">
      <div className="border-b-2 border-neutral-300 pb-2 flex items-center gap-4">
        <div className="rounded-xl p-2 bg-brand-100 w-12 h-12">{icon}</div>
        <div className="w-1/2">
          <h1 className="font-semibold text-sm mb-1">{title}</h1>
          <p className="font-normal text-xs text-neutral-500">{subject}</p>
        </div>
        <p className="font-normal text-neutral-500 text-xs ml-auto">{date}</p>
      </div>
      <p className="block whitespace-pre-wrap pt-2 text-left text-sm text-neutral-500">{body}</p>
    </div>
  );
};

export default DetailNotifikasiDashboardUser;

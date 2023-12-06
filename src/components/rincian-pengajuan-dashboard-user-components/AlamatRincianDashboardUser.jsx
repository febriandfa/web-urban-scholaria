import React from "react";

const AlamatRincianDashboardUser = () => {
  return (
    <div className="flex items-start">
      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.57538 6.07538C11.6759 1.97487 18.3241 1.97487 22.4246 6.07538C26.5251 10.1759 26.5251 16.8241 22.4246 20.9246L15 28.3492L7.57538 20.9246C3.47487 16.8241 3.47487 10.1759 7.57538 6.07538ZM15 16.5C16.6569 16.5 18 15.1569 18 13.5C18 11.8431 16.6569 10.5 15 10.5C13.3431 10.5 12 11.8431 12 13.5C12 15.1569 13.3431 16.5 15 16.5Z"
          fill="#64748B"
        />
      </svg>
      <div className="ml-4">
        <p className="font-semibold mb-4">Alamat</p>
        <p className="text-neutral-500">Jl. Putat Gede Slt 2 Putat Gede, Sukomanunggal, Surabaya, 60189, Jawa Timur</p>
      </div>
      <a className="text-warn-500 font-semibold ml-auto" href="#">
        Salin
      </a>
    </div>
  );
};

export default AlamatRincianDashboardUser;

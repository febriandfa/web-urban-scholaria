import React from "react";
import SalinTeks from "../../utils/functions/SalinTeks";
import Popup from "reactjs-popup";
import MapPopup from "../popup-components/MapPopup";

const AlamatDetailPengajuanDashboardAdministrator = ({ alamat, latitude, longitude }) => {
  return (
    <div>
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
          <p className="text-neutral-500">{alamat}</p>
        </div>
        <button className="text-warn-500 font-semibold ml-auto" type="button" onClick={() => SalinTeks(alamat)}>
          Salin
        </button>
      </div>
      <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
      <div className="grid grid-cols-2 gap-20">
        <div className="ml-9 flex flex-col gap-3">
          <div className="flex text-neutral-500">
            <p>Latitude</p>
            <p className="ml-auto">{latitude}</p>
          </div>
          <div className="flex text-neutral-500">
            <p>Longitude</p>
            <p className="ml-auto">{longitude}</p>
          </div>
        </div>
        <Popup
          trigger={<button className="text-warn-500 font-semibold ml-auto place-self-start">Lihat Lokasi</button>}
          modal
          nested
          overlayStyle={{
            background: "rgba(128, 128, 128, 0.7)",
            backdropFilter: "blur(5px)",
          }}
        >
          {(close) => <MapPopup alamat={alamat} latitude={latitude} longitude={longitude} close={close} />}
        </Popup>
      </div>
    </div>
  );
};

export default AlamatDetailPengajuanDashboardAdministrator;

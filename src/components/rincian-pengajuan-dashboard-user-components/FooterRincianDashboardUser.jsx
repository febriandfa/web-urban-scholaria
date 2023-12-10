import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import KomentarPenolakanPopup from "../popup-components/KomentarPenolakanPopup";

const FooterRincianDashboardUser = ({ suratSelesai }) => {
  return (
    <div>
      <Popup
        trigger={
          <button className="text-sm font-semibold text-brand-500 flex items-center gap-2 mb-4">
            Komentar
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M6.66667 8.33331H6.675M10 8.33331H10.0083M13.3333 8.33331H13.3417M7.5 13.3333H4.16667C3.24619 13.3333 2.5 12.5871 2.5 11.6666V4.99998C2.5 4.07951 3.24619 3.33331 4.16667 3.33331H15.8333C16.7538 3.33331 17.5 4.07951 17.5 4.99998V11.6666C17.5 12.5871 16.7538 13.3333 15.8333 13.3333H11.6667L7.5 17.5V13.3333Z"
                stroke="#191D88"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        }
        modal
        nested
        overlayStyle={{
          background: "rgba(128, 128, 128, 0.7)",
          backdropFilter: "blur(5px)",
        }}
      >
        <KomentarPenolakanPopup />
      </Popup>
      <div className="flex gap-5 mb-4">
        <Link className="flex items-center justify-center gap-2 py-2 px-4 bg-neutral-100 w-full rounded-lg text-base font-semibold text-neutral-909" to="/obrolan">
          Obrolan{" "}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 10C18 13.866 14.4183 17 10 17C8.50836 17 7.11208 16.6428 5.91677 16.0208L2 17L3.3383 13.8773C2.4928 12.7673 2 11.434 2 10C2 6.13401 5.58172 3 10 3C14.4183 3 18 6.13401 18 10ZM7 9H5V11H7V9ZM15 9H13V11H15V9ZM9 9H11V11H9V9Z"
              fill="#0F172A"
            />
          </svg>
        </Link>
        {suratSelesai && (
          <Link className="flex items-center justify-center gap-2 py-2 px-4 bg-neutral-100 w-full rounded-lg text-base font-semibold text-neutral-900" to="/feedback">
            Feedback{" "}
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.5 13V5C18.5 3.89543 17.6046 3 16.5 3H4.5C3.39543 3 2.5 3.89543 2.5 5V13C2.5 14.1046 3.39543 15 4.5 15H7.5L10.5 18L13.5 15H16.5C17.6046 15 18.5 14.1046 18.5 13ZM5.5 7C5.5 6.44772 5.94772 6 6.5 6H14.5C15.0523 6 15.5 6.44772 15.5 7C15.5 7.55228 15.0523 8 14.5 8H6.5C5.94772 8 5.5 7.55228 5.5 7ZM6.5 10C5.94772 10 5.5 10.4477 5.5 11C5.5 11.5523 5.94772 12 6.5 12H9.5C10.0523 12 10.5 11.5523 10.5 11C10.5 10.4477 10.0523 10 9.5 10H6.5Z"
                fill="#0F172A"
              />
            </svg>
          </Link>
        )}
      </div>
      <button className="flex items-center justify-center gap-3 py-2 px-4 bg-brand-500 w-full rounded-lg text-base font-semibold text-white" type="submit">
        Bukti Pengajuan Permohonan
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.5 2C5.39543 2 4.5 2.89543 4.5 4V16C4.5 17.1046 5.39543 18 6.5 18H14.5C15.6046 18 16.5 17.1046 16.5 16V7.41421C16.5 6.88378 16.2893 6.37507 15.9142 6L12.5 2.58579C12.1249 2.21071 11.6162 2 11.0858 2H6.5ZM11.5 8C11.5 7.44772 11.0523 7 10.5 7C9.94772 7 9.5 7.44772 9.5 8V11.5858L8.20711 10.2929C7.81658 9.90237 7.18342 9.90237 6.79289 10.2929C6.40237 10.6834 6.40237 11.3166 6.79289 11.7071L9.79289 14.7071C10.1834 15.0976 10.8166 15.0976 11.2071 14.7071L14.2071 11.7071C14.5976 11.3166 14.5976 10.6834 14.2071 10.2929C13.8166 9.90237 13.1834 9.90237 12.7929 10.2929L11.5 11.5858V8Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default FooterRincianDashboardUser;

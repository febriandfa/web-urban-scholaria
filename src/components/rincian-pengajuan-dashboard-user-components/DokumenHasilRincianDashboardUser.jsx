import React from "react";
import CardGeneral from "../general-components/CardGeneral";
import LihatFileVerifikasiDashboardAdministrator from "../verifikasi-dashboard-administrator-components/LihatFileVerifikasiDashboardAdministrator";

const DokumenHasilRincianDashboardUser = ({ fileBuktiPengajuan, linkBuktiPengajuan, fileSuratPerizinan, linkSuratPerizinan, fileSkLegalitas, linkSkLegalitas }) => {
  return (
    <div className="mb-16">
      <CardGeneral color="bg-neutral-100" customClass="mb-4">
        <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M4 9.33341V22.6667C4 24.1395 5.19391 25.3334 6.66667 25.3334H25.3333C26.8061 25.3334 28 24.1395 28 22.6667V12.0001C28 10.5273 26.8061 9.33341 25.3333 9.33341H17.3333L14.6667 6.66675H6.66667C5.19391 6.66675 4 7.86066 4 9.33341Z"
              stroke="#1E293B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <p className="font-semibold inline-block mr-4">Bukti Pengajuan Permohonan</p>
            <LihatFileVerifikasiDashboardAdministrator link={linkBuktiPengajuan} />
            <p className="text-brand-500 text-sm">{fileBuktiPengajuan}</p>
          </div>
          <button className="text-brand-500 font-semibold flex items-center ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.1998 2.3999C5.87432 2.3999 4.7998 3.47442 4.7998 4.7999V19.1999C4.7998 20.5254 5.87432 21.5999 7.1998 21.5999H16.7998C18.1253 21.5999 19.1998 20.5254 19.1998 19.1999V8.89696C19.1998 8.26044 18.9469 7.64999 18.4969 7.1999L14.3998 3.10285C13.9497 2.65276 13.3393 2.3999 12.7027 2.3999H7.1998ZM13.1998 9.5999C13.1998 8.93716 12.6625 8.3999 11.9998 8.3999C11.3371 8.3999 10.7998 8.93716 10.7998 9.5999V13.9028L9.24833 12.3514C8.7797 11.8827 8.01991 11.8827 7.55128 12.3514C7.08265 12.82 7.08265 13.5798 7.55128 14.0484L11.1513 17.6484C11.6199 18.1171 12.3797 18.1171 12.8483 17.6484L16.4483 14.0484C16.917 13.5798 16.917 12.82 16.4483 12.3514C15.9797 11.8827 15.2199 11.8827 14.7513 12.3514L13.1998 13.9028V9.5999Z"
                fill="#191D88"
              />
            </svg>
            Unduh
          </button>
        </div>
      </CardGeneral>
      <CardGeneral color="bg-neutral-100" customClass="mb-4">
        <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M4 9.33341V22.6667C4 24.1395 5.19391 25.3334 6.66667 25.3334H25.3333C26.8061 25.3334 28 24.1395 28 22.6667V12.0001C28 10.5273 26.8061 9.33341 25.3333 9.33341H17.3333L14.6667 6.66675H6.66667C5.19391 6.66675 4 7.86066 4 9.33341Z"
              stroke="#1E293B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <p className="font-semibold inline-block mr-4">Surat Perizinan</p>
            <LihatFileVerifikasiDashboardAdministrator link={linkSuratPerizinan} />
            <p className="text-brand-500 text-sm">{fileSuratPerizinan}</p>
          </div>
          <button className="text-brand-500 font-semibold flex items-center ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.1998 2.3999C5.87432 2.3999 4.7998 3.47442 4.7998 4.7999V19.1999C4.7998 20.5254 5.87432 21.5999 7.1998 21.5999H16.7998C18.1253 21.5999 19.1998 20.5254 19.1998 19.1999V8.89696C19.1998 8.26044 18.9469 7.64999 18.4969 7.1999L14.3998 3.10285C13.9497 2.65276 13.3393 2.3999 12.7027 2.3999H7.1998ZM13.1998 9.5999C13.1998 8.93716 12.6625 8.3999 11.9998 8.3999C11.3371 8.3999 10.7998 8.93716 10.7998 9.5999V13.9028L9.24833 12.3514C8.7797 11.8827 8.01991 11.8827 7.55128 12.3514C7.08265 12.82 7.08265 13.5798 7.55128 14.0484L11.1513 17.6484C11.6199 18.1171 12.3797 18.1171 12.8483 17.6484L16.4483 14.0484C16.917 13.5798 16.917 12.82 16.4483 12.3514C15.9797 11.8827 15.2199 11.8827 14.7513 12.3514L13.1998 13.9028V9.5999Z"
                fill="#191D88"
              />
            </svg>
            Unduh
          </button>
        </div>
      </CardGeneral>
      <CardGeneral color="bg-neutral-100" customClass="mb-4">
        <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M4 9.33341V22.6667C4 24.1395 5.19391 25.3334 6.66667 25.3334H25.3333C26.8061 25.3334 28 24.1395 28 22.6667V12.0001C28 10.5273 26.8061 9.33341 25.3333 9.33341H17.3333L14.6667 6.66675H6.66667C5.19391 6.66675 4 7.86066 4 9.33341Z"
              stroke="#1E293B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <p className="font-semibold inline-block mr-4">SK Legalitas Perizinan</p>
            <LihatFileVerifikasiDashboardAdministrator link={linkSkLegalitas} />
            <p className="text-brand-500 text-sm">{fileSkLegalitas}</p>
          </div>
          <button className="text-brand-500 font-semibold flex items-center ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.1998 2.3999C5.87432 2.3999 4.7998 3.47442 4.7998 4.7999V19.1999C4.7998 20.5254 5.87432 21.5999 7.1998 21.5999H16.7998C18.1253 21.5999 19.1998 20.5254 19.1998 19.1999V8.89696C19.1998 8.26044 18.9469 7.64999 18.4969 7.1999L14.3998 3.10285C13.9497 2.65276 13.3393 2.3999 12.7027 2.3999H7.1998ZM13.1998 9.5999C13.1998 8.93716 12.6625 8.3999 11.9998 8.3999C11.3371 8.3999 10.7998 8.93716 10.7998 9.5999V13.9028L9.24833 12.3514C8.7797 11.8827 8.01991 11.8827 7.55128 12.3514C7.08265 12.82 7.08265 13.5798 7.55128 14.0484L11.1513 17.6484C11.6199 18.1171 12.3797 18.1171 12.8483 17.6484L16.4483 14.0484C16.917 13.5798 16.917 12.82 16.4483 12.3514C15.9797 11.8827 15.2199 11.8827 14.7513 12.3514L13.1998 13.9028V9.5999Z"
                fill="#191D88"
              />
            </svg>
            Unduh
          </button>
        </div>
      </CardGeneral>
    </div>
  );
};

export default DokumenHasilRincianDashboardUser;

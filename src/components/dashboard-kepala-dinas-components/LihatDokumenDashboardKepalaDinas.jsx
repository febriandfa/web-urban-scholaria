import React from "react";

const LihatDokumenDashboardKepalaDinas = ({ idSurat }) => {
  return (
    <div>
      <h1 className="text-2xl text-brand-500 font-semibold text-center mb-10 flex items-center gap-2 justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.0303 5.52715C11.0593 5.44504 12.036 5.04044 12.8216 4.37096C14.6549 2.80864 17.3513 2.80864 19.1846 4.37096C19.9702 5.04044 20.947 5.44504 21.9759 5.52715C24.377 5.71875 26.2836 7.62539 26.4752 10.0264C26.5573 11.0553 26.9619 12.0321 27.6314 12.8177C29.1937 14.651 29.1937 17.3474 27.6314 19.1807C26.9619 19.9663 26.5573 20.9431 26.4752 21.972C26.2836 24.373 24.377 26.2797 21.9759 26.4713C20.947 26.5534 19.9702 26.958 19.1846 27.6275C17.3513 29.1898 14.6549 29.1898 12.8216 27.6275C12.036 26.958 11.0593 26.5534 10.0303 26.4713C7.62929 26.2797 5.72266 24.373 5.53105 21.972C5.44895 20.9431 5.04435 19.9663 4.37486 19.1807C2.81255 17.3474 2.81255 14.651 4.37486 12.8177C5.04435 12.0321 5.44895 11.0553 5.53105 10.0264C5.72266 7.62539 7.62929 5.71875 10.0303 5.52715ZM21.9345 13.9306C22.5593 13.3058 22.5593 12.2927 21.9345 11.6678C21.3097 11.043 20.2966 11.043 19.6718 11.6678L14.4031 16.9365L12.3345 14.8678C11.7097 14.243 10.6966 14.243 10.0718 14.8678C9.44692 15.4927 9.44692 16.5057 10.0718 17.1306L13.2718 20.3306C13.8966 20.9554 14.9097 20.9554 15.5345 20.3306L21.9345 13.9306Z"
            fill="#191D88"
          />
        </svg>
        Validasi Dokumen
      </h1>
      <embed className="rounded-xl w-4/5 h-[550px] mx-auto" src={`https://urbanscholaria.my.id/api/surat/` + idSurat + `/cetak-surat-legalitas`} type="application/pdf" />
    </div>
  );
};

export default LihatDokumenDashboardKepalaDinas;
import React from "react";
import LinkButtonGeneral from "../general-components/LinkButtonGeneral";

const HeaderPerizinan = ({ img, title, link }) => {
  return (
    <section className="h-32 bg-[url('./assets/images/background-pengajuan-header.png')] bg-no-repeat bg-cover flex flex-col justify-center mb-14">
      <div className="flex items-center px-20 justify-between">
        <div className="flex items-center gap-5">
          <div className="relative">
            <img className="absolute -top-3 left-5 w-28 h-28 z-[1]" src={img} alt="" />
            <svg className="relative top-2" xmlns="http://www.w3.org/2000/svg" width="152" height="92" viewBox="0 0 152 92" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M151.03 39.0271C150.921 24.7675 127.446 16.521 108.817 8.88982C93.4017 2.57534 76.2925 -0.663529 58.2298 1.01298C37.7044 2.91807 15.6172 6.71936 5.62434 18.4677C-4.83427 30.7637 0.97606 45.4776 9.4118 58.4071C18.568 72.4408 29.9649 88.765 53.178 91.353C75.8021 93.8754 91.5901 79.0023 109.282 69.5417C126.31 60.436 151.14 53.3149 151.03 39.0271Z"
                fill="#EEF2FF"
              />
            </svg>
          </div>
          <div>
            <h1 className="uppercase text-white text-lg font-semibold mb-1">
              Informasi Perizinan
              <br />
              {title}
            </h1>
            <p className="text-white text-xs font-semibold">Nikmati Kemudahan Perizinan Sekolah Secara Digital</p>
          </div>
        </div>
        <LinkButtonGeneral link={link} text="Tentang Ajukan Perizinan" />
      </div>
    </section>
  );
};

export default HeaderPerizinan;

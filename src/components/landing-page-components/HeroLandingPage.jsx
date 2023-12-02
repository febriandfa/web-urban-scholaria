import React from "react";
import LinkButtonGeneral from "../general-components/LinkButtonGeneral";

const HeroLandingPage = () => {
  return (
    <section className="py-20 min-h-screen px-20 bg-[url('./assets/images/background-home.png')] bg-cover bg-center flex flex-col justify-center gap-8">
      <div className="flex items-center">
        <hr className="w-12 h-1 bg-brand-300" />
        <p className="text-brand-300 font-extrabold text-base">Ajukan Perizinan Bersama Kami!</p>
      </div>
      <h1 className="text-5xl font-semibold w-3/5 text-start text-brand-900">Ajukan Izin Pendidikan Kapanpun, Dimanapun dengan Sistem Online Kami</h1>
      <h2 className="text-xl text-start font-semibold text-neutral-500 w-1/2">“Segera Ajukan Izin Pendidikan dengan Sistem Online Kami yang Cepat dan Efisien”</h2>
      <LinkButtonGeneral
        link="#"
        text="Mulai Ajukan Perizinan"
        aftersvg={
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.91058 16.4229C6.58514 16.0975 6.58514 15.5698 6.91058 15.2444L12.1547 10.0003L6.91058 4.75625C6.58514 4.43081 6.58514 3.90317 6.91058 3.57774C7.23602 3.2523 7.76366 3.2523 8.08909 3.57774L13.9224 9.41107C14.2479 9.73651 14.2479 10.2641 13.9224 10.5896L8.08909 16.4229C7.76366 16.7484 7.23602 16.7484 6.91058 16.4229Z"
              fill="white"
            />
          </svg>
        }
      />
    </section>
  );
};

export default HeroLandingPage;

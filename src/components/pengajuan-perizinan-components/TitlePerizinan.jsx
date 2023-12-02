import React from "react";

const TitlePerizinan = ({ title, subtitle }) => {
  return (
    <section className="h-32 bg-[url('./assets/images/background-pengajuan-header.png')] bg-no-repeat bg-cover flex flex-col justify-center mb-14">
      <h1 className="text-base text-white font-semibold uppercase text-center">{subtitle}</h1>
      <h1 className="text-xl text-white font-semibold capitalize text-center">{title}</h1>
    </section>
  );
};

export default TitlePerizinan;

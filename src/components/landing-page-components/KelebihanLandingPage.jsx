import React from "react";
import { bgKelebihan, iconPlus1, iconPlus2, iconPlus3, iconPlus4 } from "../../assets";
import CardGeneral from "../general-components/CardGeneral";

const KelebihanLandingPage = () => {
  const kelebihan = [
    {
      img: iconPlus1,
      title: "Mudah dan Aman",
      desc: "Urban Scholaria memiliki antarmuka user-friendly untuk memudahkan penggunaan oleh pemohon dan petugas perizinan.",
    },
    {
      img: iconPlus2,
      title: "Cepat",
      desc: "Urban Scholaria, mempercepat proses perizinan, menghemat waktu, tenaga, dan menjamin keakuratan serta keamanan dokumen.",
    },
    {
      img: iconPlus3,
      title: "Efisien",
      desc: "Aplikasi Urban Scholaria dapat membantu mengurangi waktu dan biaya yang dibutuhkan untuk mengurus perizinan.",
    },
    {
      img: iconPlus4,
      title: "Akuntabel",
      desc: "Aplikasi Urban Scholaria dapat membantu meningkatkan akuntabilitas petugas perizinan.",
    },
  ];

  return (
    <section className="py-20 min-h-screen px-20">
      <div className="grid grid-cols-7 gap-16">
        <img className="col-span-3 object-cover self-center" src={bgKelebihan} alt="" />
        <div className="col-span-4 justify-self-end">
          <h1 className="text-brand-900 font-semibold text-4xl mx-auto mb-12 capitalize">Kelebihan Urban Scholaria</h1>
          <div className="grid grid-cols-2 grid-rows-2 gap-12">
            {kelebihan.map((kelebihanItem, index) => (
              <CardGeneral key={index} customClass="w-[17.5rem] h-full" color="bg-neutral-100">
                <div className="flex flex-shrink-0 gap-5">
                  <img className="w-[3.125rem] h-[3.125rem]" src={kelebihanItem.img} alt="" />
                  <div>
                    <h1 className="font-semibold text-base text-brand-900 mb-2">{kelebihanItem.title}</h1>
                    <p className="font-normal text-xs text-neutral-500">{kelebihanItem.desc}</p>
                  </div>
                </div>
              </CardGeneral>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KelebihanLandingPage;

import React from "react";
import kategoriPerizinan from "../../utils/DaftarKategoriPerizinanData";
import TitleLandingPage from "./TitleLandingPage";
import CardGeneral from "../general-components/CardGeneral";
import { Link } from "react-router-dom";

const KategoriLandingPage = () => {
  const kategoriPerizinanData = kategoriPerizinan;

  return (
    <section className="py-20 h-full px-20">
      <TitleLandingPage subtitle="Kategori Perizinan" title="Ajukan Perizinan Melalui Urban Scholaria" align="text-center" width="w-2/5" />
      <div className="flex gap-12 w-fit mx-auto">
        {kategoriPerizinanData.map((kategoriItem, index) => (
          <Link key={index} to={kategoriItem.link}>
            <CardGeneral color="bg-neutral-100">
              <div className="w-48 h-48 flex flex-col justify-center items-center gap-4">
                <img className="w-[3.75rem] h-[3.75rem]" src={kategoriItem.icon} alt="" />
                <h1 className="font-bold text-xl text-brand-900 text-center">{kategoriItem.nama}</h1>
                <p className="font-medium text-base text-neutral-500 text-center">{kategoriItem.desc}</p>
              </div>
            </CardGeneral>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default KategoriLandingPage;

import React from "react";
import kategoriPerizinan from "../../utils/DaftarKategoriPerizinanData";
import TitleLandingPage from "./TitleLandingPage";
import CardGeneral from "../general-components/CardGeneral";
import { Link } from "react-router-dom";
import { iconSD, iconSMA, iconSMP, iconTK } from "../../assets";

const KategoriLandingPage = () => {
  const handleKategoriClick = (kategori_perizinan) => {
    localStorage.setItem("KategoriPerizinan", kategori_perizinan);
  };

  return (
    <section className="py-20 h-full px-20">
      <TitleLandingPage subtitle="Kategori Perizinan" title="Ajukan Perizinan Melalui Urban Scholaria" align="text-center" width="w-2/5" />
      <div className="flex gap-12 w-fit mx-auto">
        {/* {kategoriPerizinanData.map((kategoriItem, index) => ( */}
        <Link to={`/informasi-perizinan`} onClick={() => handleKategoriClick("TK")}>
          <CardGeneral color="bg-neutral-100">
            <div className="w-48 h-48 flex flex-col justify-center items-center gap-4">
              <img className="w-[3.75rem] h-[3.75rem]" src={iconTK} alt="" />
              <h1 className="font-bold text-xl text-brand-900 text-center">Perizinan TK</h1>
              <p className="font-medium text-base text-neutral-500 text-center">Ajukan Perizinan TK melalui Urban Scholaria.</p>
            </div>
          </CardGeneral>
        </Link>
        <Link to={`/informasi-perizinan`} onClick={() => handleKategoriClick("SD")}>
          <CardGeneral color="bg-neutral-100">
            <div className="w-48 h-48 flex flex-col justify-center items-center gap-4">
              <img className="w-[3.75rem] h-[3.75rem]" src={iconSD} alt="" />
              <h1 className="font-bold text-xl text-brand-900 text-center">Perizinan SD</h1>
              <p className="font-medium text-base text-neutral-500 text-center">Ajukan Perizinan SD melalui Urban Scholaria.</p>
            </div>
          </CardGeneral>
        </Link>
        <Link to={`/informasi-perizinan`} onClick={() => handleKategoriClick("SMP")}>
          <CardGeneral color="bg-neutral-100">
            <div className="w-48 h-48 flex flex-col justify-center items-center gap-4">
              <img className="w-[3.75rem] h-[3.75rem]" src={iconSMP} alt="" />
              <h1 className="font-bold text-xl text-brand-900 text-center">Perizinan SMP</h1>
              <p className="font-medium text-base text-neutral-500 text-center">Ajukan Perizinan SMP melalui Urban Scholaria.</p>
            </div>
          </CardGeneral>
        </Link>
        <Link to={`/informasi-perizinan`} onClick={() => handleKategoriClick("SMA")}>
          <CardGeneral color="bg-neutral-100">
            <div className="w-48 h-48 flex flex-col justify-center items-center gap-4">
              <img className="w-[3.75rem] h-[3.75rem]" src={iconSMA} alt="" />
              <h1 className="font-bold text-xl text-brand-900 text-center">Perizinan SMA</h1>
              <p className="font-medium text-base text-neutral-500 text-center">Ajukan Perizinan SMA melalui Urban Scholaria.</p>
            </div>
          </CardGeneral>
        </Link>
        {/* ))} */}
      </div>
    </section>
  );
};

export default KategoriLandingPage;

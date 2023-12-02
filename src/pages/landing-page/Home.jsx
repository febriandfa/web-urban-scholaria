import React from "react";
import LandingPageLayout from "../../layouts/LandingPageLayout";
import HeroLandingPage from "../../components/landing-page-components/HeroLandingPage";
import KategoriLandingPage from "../../components/landing-page-components/KategoriLandingPage";
import KelebihanLandingPage from "../../components/landing-page-components/KelebihanLandingPage";
import ResponsibilitasLandingPage from "../../components/landing-page-components/ResponsibilitasLandingPage";
import KontakLandingPage from "../../components/landing-page-components/KontakLandingPage";
import TentangLandingPage from "../../components/landing-page-components/TentangLandingPage";

const Home = () => {
  return (
    <LandingPageLayout>
      <HeroLandingPage />
      <KategoriLandingPage />
      <KelebihanLandingPage />
      <ResponsibilitasLandingPage />
      <KontakLandingPage />
      <TentangLandingPage />
    </LandingPageLayout>
  );
};

export default Home;

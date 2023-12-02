import React from "react";
import Navbar from "../components/navbar-components/Navbar";
import Footer from "../components/footer-components/Footer";

const LandingPageLayout = ({ children }) => {
  return (
    <main className="min-w-screen h-full">
      <header>
        <Navbar />
      </header>
      <article>{children}</article>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default LandingPageLayout;

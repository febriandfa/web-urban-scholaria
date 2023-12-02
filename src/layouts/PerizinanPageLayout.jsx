import React from "react";
import Navbar from "../components/navbar-components/Navbar";
import Footer from "../components/footer-components/Footer";

const PerizinanPageLayout = ({ childrenHeader, childrenBody }) => {
  return (
    <main className="min-w-screen h-full">
      <header>
        <Navbar />
      </header>
      <article className="py-20 min-h-screen">
        <section>{childrenHeader}</section>
        <section className="px-20">{childrenBody}</section>
      </article>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default PerizinanPageLayout;

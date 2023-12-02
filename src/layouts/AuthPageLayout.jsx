import React from "react";
import Navbar from "../components/navbar-components/Navbar";

const AuthPageLayout = ({ children }) => {
  return (
    <main className="min-w-screen h-full">
      <header>
        <Navbar />
      </header>
      <article className="py-20 px-20 min-h-screen">{children}</article>
    </main>
  );
};

export default AuthPageLayout;

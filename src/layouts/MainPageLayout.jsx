import React from "react";
import Navbar from "../components/navbar-components/Navbar";
import Sidebar from "../components/sidebar-components/Sidebar";
import Footer from "../components/footer-components/Footer";

const MainPageLayout = ({ children }) => {
  const roleUser = localStorage.getItem("UserDetail");
  console.log("Role User", roleUser);

  return (
    <main className="min-w-screen h-full bg-neutral-100">
      <header>
        <Navbar hideLogoOnUserLayout />
      </header>
      <article>
        <aside>
          <Sidebar role={roleUser} />
        </aside>
        <section className="min-h-screen ml-[17rem] mr-20 pb-20 pt-[6rem]">
          <div className="w-full rounded-xl bg-white p-6">{children}</div>
        </section>
      </article>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default MainPageLayout;

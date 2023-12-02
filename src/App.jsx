import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Mobile from "./pages/landing-page/Mobile";
import Home from "./pages/landing-page/Home";
import Kontak from "./pages/landing-page/Kontak";
import Tentang from "./pages/landing-page/Tentang";
import Faq from "./pages/landing-page/Faq";
import SyaratKententuan from "./pages/landing-page/SyaratKententuan";
import Daftar from "./pages/auth-page/Daftar";
import Login from "./pages/auth-page/Login";
import InformasiPerizinan from "./pages/perizinan-tk-page/InformasiPerizinan";
import PerizinanOperasional from "./pages/perizinan-tk-page/operasional/PerizinanOperasional";
import FormPengajuanOperasional from "./pages/perizinan-tk-page/operasional/FormPengajuanOperasional";
import KonfirmasiPerizinan from "./pages/perizinan-general-page/KonfirmasiPerizinan";
import DashboardUser from "./pages/dashboard-user-page/DashboardUser";
import ObrolanUser from "./pages/dashboard-user-page/ObrolanUser";
import DataDiriUser from "./pages/dashboard-user-page/DataDiriUser";
import NotifikasiUser from "./pages/dashboard-user-page/NotifikasiUser";
import RiwayatPengajuanUser from "./pages/dashboard-user-page/RiwayatPengajuanUser";
import RincianPengajuan from "./pages/dashboard-user-page/RincianPengajuan";
import FeedbackUser from "./pages/dashboard-user-page/FeedbackUser";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();
  const isMobile = window.innerWidth < 1024;

  return (
    <>
      {isMobile ? (
        <Mobile />
      ) : (
        <>
          <ScrollToTop />
          <Routes location={location} key={location.pathname}>
            {/* Home */}
            <Route index element={<Home />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/syarat-ketentuan" element={<SyaratKententuan />} />

            {/* Auth */}
            <Route path="/daftar" element={<Daftar />} />
            <Route path="/masuk" element={<Login />} />

            {/* Perizinan */}
            <Route path="/perizinan-tk" element={<InformasiPerizinan />} />
            <Route path="/perizinan-operasional-tk" element={<PerizinanOperasional />} />
            <Route path="/form-pengajuan-operasional-tk" element={<FormPengajuanOperasional />} />
            <Route path="/konfirmasi-pengajuan-perizinan" element={<KonfirmasiPerizinan />} />

            {/* User */}
            <Route path="/dashboard" element={<DashboardUser />} />
            <Route path="/data-diri" element={<DataDiriUser />} />
            <Route path="/riwayat" element={<RiwayatPengajuanUser />} />
            <Route path="/notifikasi" element={<NotifikasiUser />} />
            <Route path="/obrolan" element={<ObrolanUser />} />
            <Route path="/feedback" element={<FeedbackUser />} />
            <Route path="/rincian-pengajuan" element={<RincianPengajuan />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;

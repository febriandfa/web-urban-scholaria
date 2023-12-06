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
import FeedbackUser from "./pages/dashboard-user-page/FeedbackUser";
import RincianPengajuanUser from "./pages/dashboard-user-page/RincianPengajuanUser";
import TentangPengajuan from "./pages/perizinan-general-page/TentangPengajuan";
import DashboardAdministrator from "./pages/dashboard-administrator-page/DashboardAdministrator";
import DataPerizinanAdministrator from "./pages/dashboard-administrator-page/DataPerizinanAdministrator";
import DataDiriAdministrator from "./pages/dashboard-administrator-page/DataDiriAdministrator";
import FeedbackAdministrator from "./pages/dashboard-administrator-page/FeedbackAdministrator";
import NotifikasiAdministrator from "./pages/dashboard-administrator-page/NotifikasiAdministrator";
import ObrolanAdministrator from "./pages/dashboard-administrator-page/ObrolanAdministrator";
import VerifikasiDokumenOperator from "./pages/dashboard-operator-page/VerifikasiDokumenOperator";
import KelengkapanPengajuanOperator from "./pages/dashboard-operator-page/KelengkapanPengajuanOperator";
import VerifikasiDokumenVerifikator from "./pages/dashboard-verifikator-page/VerifikasiDokumenVerifikator";
import KelengkapanPengajuanVerifikator from "./pages/dashboard-verifikator-page/KelengkapanPengajuanVerifikator";
import PengesahanPerizinanVerifikator from "./pages/dashboard-verifikator-page/PengesahanPerizinanVerifikator";
import TerbitkanPerizinanVerifikator from "./pages/dashboard-verifikator-page/TerbitkanPerizinanVerifikator";
import DetailPengesahanPerizinanVerifikator from "./pages/dashboard-verifikator-page/DetailPengesahanPerizinanVerifikator";
import Register from "./pages/auth-page/Register";
import PersyaratanOperasional from "./pages/perizinan-tk-page/operasional/PersyaratanOperasional";
// import CobaDaftar from "./pages/auth-page/CobaDaftar";

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
            <Route path="/daftar" element={<Register />} />
            <Route path="/masuk" element={<Login />} />

            {/* Perizinan */}
            <Route path="/informasi-perizinan" element={<InformasiPerizinan />} />
            <Route path="/pengajuan-perizinan/:id" element={<PerizinanOperasional />} />
            <Route path="/syarat-perizinan/:id" element={<PersyaratanOperasional />} />
            <Route path="/form-pengajuan-operasional-tk" element={<FormPengajuanOperasional />} />
            <Route path="/tentang-pengajuan-perizinan" element={<TentangPengajuan />} />
            <Route path="/konfirmasi-pengajuan-perizinan" element={<KonfirmasiPerizinan />} />

            {/* User */}
            <Route path="/dashboard" element={<DashboardUser />} />
            <Route path="/data-diri" element={<DataDiriUser />} />
            <Route path="/riwayat" element={<RiwayatPengajuanUser />} />
            <Route path="/notifikasi" element={<NotifikasiUser />} />
            <Route path="/obrolan" element={<ObrolanUser />} />
            <Route path="/feedback" element={<FeedbackUser />} />
            <Route path="/rincian-pengajuan" element={<RincianPengajuanUser />} />

            {/* Administrator */}
            <Route path="/dashboard-administrator" element={<DashboardAdministrator />} />
            <Route path="/data-perizinan-administrator" element={<DataPerizinanAdministrator />} />
            <Route path="/data-diri-administrator" element={<DataDiriAdministrator />} />
            <Route path="/feedback-administrator" element={<FeedbackAdministrator />} />
            <Route path="/notifikasi-administrator" element={<NotifikasiAdministrator />} />
            <Route path="/obrolan-administrator" element={<ObrolanAdministrator />} />

            {/* Operator */}
            <Route path="/verifikasi-dokumen-operator" element={<VerifikasiDokumenOperator />} />
            <Route path="/kelengkapan-dokumen-operator" element={<KelengkapanPengajuanOperator />} />

            {/* Verifikator */}
            <Route path="/verifikasi-dokumen-verifikator" element={<VerifikasiDokumenVerifikator />} />
            <Route path="/kelengkapan-dokumen-verifikator" element={<KelengkapanPengajuanVerifikator />} />
            <Route path="/pengesahan-perizinan-verifikator" element={<PengesahanPerizinanVerifikator />} />
            <Route path="/detail-pengesahan-verifikator" element={<DetailPengesahanPerizinanVerifikator />} />
            <Route path="/terbitkan-perizinan-verifikator" element={<TerbitkanPerizinanVerifikator />} />

            {/* <Route path="/coba-daftar" element={<CobaDaftar />} /> */}
          </Routes>
        </>
      )}
    </>
  );
}

export default App;

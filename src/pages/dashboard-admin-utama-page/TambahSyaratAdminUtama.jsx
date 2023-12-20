import React, { useEffect, useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import LinkBackGeneral from "../../components/general-components/LinkBackGeneral";
import InputTextGeneral from "../../components/general-components/InputTextGeneral";
import InputTextAreaGeneral from "../../components/general-components/InputTextAreaGeneral";
import InputFileGeneral from "../../components/general-components/InputFileGeneral";
import InputFileGeneralCoba from "../../components/general-components/InputFileGeneralCoba";
import { userService } from "../../services";
import TambahSyaratPopup from "../../components/popup-components/TambahSyaratPopup";
import Popup from "reactjs-popup";
import { getKategoriPerizinan, getSuratJenisID } from "../../services/storage.service";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingPopup from "../../components/popup-components/LoadingPopup";

const TambahSyaratAdminUtama = () => {
  const navigate = useNavigate();
  const idSuratJenis = getSuratJenisID();
  const [syaratSurat, setSyaratSurat] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSyaratPerizinanBaru = async () => {
    try {
      setLoading(true);
      const response = await userService.getSyaratBySuratJenisID(idSuratJenis);
      console.log("Syarat-Syarat Izin Baru", response);
      setSyaratSurat(response?.data?.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSyaratPerizinanBaru();
  }, []);

  const deleteSyaratPerizinanBaru = async (syaratId) => {
    try {
      setLoading(true);
      const response = await userService.deleteSyaratPerizinanBaru(syaratId);
      console.log("Berhasil Hapus", response);
      // window.location.reload();
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const triggerAlert = () => {
    Swal.fire({
      icon: "success",
      title: "PERIZINAN BERHASIL DITAMBAHKAN",
      text: "Perizinan berhasil ditambahkan.",
      confirmButtonText: "Lanjut",
    }).then(() => {
      close();
      navigate("/informasi-perizinan-utama");
    });
  };

  const kategoriPerizinan = getKategoriPerizinan();

  return (
    <MainPageLayout>
      <LoadingPopup loading={loading} />
      <div className="h-40 w-full bg-[url('./assets/images/background-pengajuan-header.png')] bg-cover bg-center rounded-lg mb-10 relative">
        <div className="absolute top-3 left-2">
          <LinkBackGeneral white />
        </div>
        <h1 className="font-semibold text-3xl text-white text-center flex flex-col justify-center items-center h-full">Tambah Perizinan {kategoriPerizinan}</h1>
      </div>
      <div className="w-4/5 mx-auto">
        <div className="mb-6">
          <label className="block mb-1 font-semibold text-sm text-brand-500 capitalize" htmlFor="dokumen_syarat_perizinan">
            Dokumen Syarat Perizinan
            <span className={`text-danger-500`}>*</span>
          </label>
          {syaratSurat?.map((syarat, index) => (
            <div key={index} className="py-2 px-4 mb-2 w-full rounded-lg text-base bg-neutral-200 capitalize flex justify-between items-center">
              {syarat?.nama}
              <button onClick={() => deleteSyaratPerizinanBaru(syarat?.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.19844 1.60001C6.89542 1.60001 6.61841 1.77121 6.4829 2.04224L5.90401 3.20001H3.19844C2.75661 3.20001 2.39844 3.55818 2.39844 4.00001C2.39844 4.44183 2.75661 4.80001 3.19844 4.80001L3.19844 12.8C3.19844 13.6837 3.91478 14.4 4.79844 14.4H11.1984C12.0821 14.4 12.7984 13.6837 12.7984 12.8V4.80001C13.2403 4.80001 13.5984 4.44183 13.5984 4.00001C13.5984 3.55818 13.2403 3.20001 12.7984 3.20001H10.0929L9.51398 2.04224C9.37847 1.77121 9.10146 1.60001 8.79844 1.60001H7.19844ZM5.59844 6.40001C5.59844 5.95818 5.95661 5.60001 6.39844 5.60001C6.84027 5.60001 7.19844 5.95818 7.19844 6.40001V11.2C7.19844 11.6418 6.84027 12 6.39844 12C5.95661 12 5.59844 11.6418 5.59844 11.2V6.40001ZM9.59844 5.60001C9.15661 5.60001 8.79844 5.95818 8.79844 6.40001V11.2C8.79844 11.6418 9.15661 12 9.59844 12C10.0403 12 10.3984 11.6418 10.3984 11.2V6.40001C10.3984 5.95818 10.0403 5.60001 9.59844 5.60001Z"
                    fill="#C92025"
                  />
                </svg>
              </button>
            </div>
          ))}
          <Popup
            trigger={
              <button className="py-2 px-4 w-full rounded-lg text-base bg-neutral-200 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.0016 3.60001C12.6643 3.60001 13.2016 4.13726 13.2016 4.80001V10.8H19.2016C19.8643 10.8 20.4016 11.3373 20.4016 12C20.4016 12.6627 19.8643 13.2 19.2016 13.2H13.2016V19.2C13.2016 19.8627 12.6643 20.4 12.0016 20.4C11.3388 20.4 10.8016 19.8627 10.8016 19.2V13.2H4.80156C4.13882 13.2 3.60156 12.6627 3.60156 12C3.60156 11.3373 4.13882 10.8 4.80156 10.8L10.8016 10.8V4.80001C10.8016 4.13726 11.3388 3.60001 12.0016 3.60001Z"
                    fill="#0F172A"
                  />
                </svg>
              </button>
            }
            modal
            nested
            overlayStyle={{
              background: "rgba(128, 128, 128, 0.7)",
              backdropFilter: "blur(5px)",
            }}
          >
            {(close) => <TambahSyaratPopup idSuratJenis={idSuratJenis} close={close} />}
          </Popup>
        </div>
        <button className={`py-2 px-4 mt-16 w-full rounded-lg text-base font-semibold text-white bg-brand-500`} to="/informasi-perizinan-utama" type="button" onClick={triggerAlert}>
          Tambah Perizinan
        </button>
      </div>
    </MainPageLayout>
  );
};

export default TambahSyaratAdminUtama;

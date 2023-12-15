import React, { useEffect, useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import LinkBackGeneral from "../../components/general-components/LinkBackGeneral";
import CardGeneral from "../../components/general-components/CardGeneral";
import LabelGeneral from "../../components/general-components/LabelGeneral";
import { userService } from "../../services";
import { getIdUser, getToken } from "../../services/storage.service";
import DokumenKelolaAkunDashboardAdminDinas from "../../components/kelola-akun-dashboard-admin-dinas-components/DokumenKelolaAkunDashboardAdminDinas";
import AktivasiButtonKelolaAkunDashboatdAdminDinas from "../../components/kelola-akun-dashboard-admin-dinas-components/AktivasiButtonKelolaAkunDashboatdAdminDinas";

const DetailPenggunaAdminDinas = () => {
  const [pengguna, setPengguna] = useState();
  const idUser = getIdUser();
  const tokenAdmin = getToken();

  const getDataPenggunaByID = async () => {
    try {
      const response = await userService.getPenggunaByID(idUser);
      console.log("Info Pengguna By ID", response?.data?.data);
      setPengguna(response?.data?.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDataPenggunaByID();
  }, []);

  const [checklist, setChecklist] = useState({
    foto: false,
    ktp_paspor: false,
  });

  const handleCheckboxChange = (name, isChecked) => {
    setChecklist((prevState) => ({
      ...prevState,
      [name]: isChecked,
    }));
  };

  const isAllChecked = checklist.foto && checklist.ktp_paspor;

  return (
    <MainPageLayout>
      <LinkBackGeneral link="/kelola-pengguna-dinas" />
      <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
      <div className="w-11/12 mx-auto mb-12">
        <h1 className="text-brand-500 font-semibold text-2xl text-center mb-6">ID Pengguna : {pengguna?.id}</h1>
        <p className="font-semibold">Data Diri</p>
        <CardGeneral customClass="mb-6">
          <div className="grid grid-cols-2">
            <div>
              <LabelGeneral title="Nama Lengkap" value={pengguna?.nama_lengkap} />
              <LabelGeneral title="Email" value={pengguna?.email} />
              <LabelGeneral title="Nomor Telepon" value={pengguna?.no_telp} />
              <LabelGeneral title="Pekerjaan" value={pengguna?.pekerjaan} />
              <LabelGeneral title="Tempat Lahir" value={pengguna?.tempat_lahir} />
              <LabelGeneral title="Tanggal Lahir" value={pengguna?.tanggal_lahir} />
            </div>
            <div>
              <LabelGeneral title="Jenis Kelamin" value={pengguna?.jenis_kelamin} />
              <LabelGeneral title="Provinsi" value={pengguna?.provinsi} />
              <LabelGeneral title="Kota/Kabupaten" value={pengguna?.kabupaten_kota} />
              <LabelGeneral title="Kecamatan" value={pengguna?.kecamatan} />
              <LabelGeneral title="Kelurahan/Desa" value={pengguna?.kelurahan} />
              <LabelGeneral title="Alamat" value={pengguna?.alamat} />
            </div>
          </div>
        </CardGeneral>
        <p className="font-semibold">File</p>
        <DokumenKelolaAkunDashboardAdminDinas
          namaDokumen="Foto Profil"
          fileDokumen={pengguna?.foto}
          link={pengguna?.foto}
          handleCheckboxChange={(e) => handleCheckboxChange("foto", e.target.checked)}
          checklist={checklist.foto}
          isActive={pengguna?.is_active === "Y"}
        />
        <DokumenKelolaAkunDashboardAdminDinas
          namaDokumen="KTP"
          fileDokumen={pengguna?.ktp_paspor}
          link={pengguna?.ktp_paspor}
          handleCheckboxChange={(e) => handleCheckboxChange("ktp_paspor", e.target.checked)}
          checklist={checklist.ktp_paspor}
          isActive={pengguna?.is_active === "Y"}
        />
      </div>
      <AktivasiButtonKelolaAkunDashboatdAdminDinas verified={isAllChecked} idUser={idUser} tokenAdmin={tokenAdmin} isActive={pengguna?.is_active === "Y"} />
    </MainPageLayout>
  );
};

export default DetailPenggunaAdminDinas;

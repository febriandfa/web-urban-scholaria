import React, { useEffect, useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import HeaderRincianDashboardUser from "../../components/rincian-pengajuan-dashboard-user-components/HeaderRincianDashboardUser";
import InformasiRincianDashboardUser from "../../components/rincian-pengajuan-dashboard-user-components/InformasiRincianDashboardUser";
import AlamatRincianDashboardUser from "../../components/rincian-pengajuan-dashboard-user-components/AlamatRincianDashboardUser";
import ListDokumenRincianDashboardUser from "../../components/rincian-pengajuan-dashboard-user-components/ListDokumenRincianDashboardUser";
import FooterRincianDashboardUser from "../../components/rincian-pengajuan-dashboard-user-components/FooterRincianDashboardUser";
import { getIdSuratDiajukan } from "../../services/storage.service";
import { userService } from "../../services";
import ItemDokumenRincianDashboardUser from "../../components/rincian-pengajuan-dashboard-user-components/ItemDokumenRincianDashboardUser";

const RincianPengajuanUser = () => {
  const [detailPengajuan, setDetailPengajuan] = useState();
  const [profil, setProfil] = useState();
  const [daftarSyarat, setDaftarSyarat] = useState([]);
  const getIdSuratDiajukanSaatIni = getIdSuratDiajukan();
  console.log("ID Surat Saat Ini", getIdSuratDiajukanSaatIni);

  const pengajuanDetailData = async () => {
    try {
      const response = await userService.getPengajuanByID(getIdSuratDiajukanSaatIni);
      setDetailPengajuan(response?.data?.data[0]);
      console.log("Isi Pengajuan", response);
      const responseProfile = await userService.getProfile();
      setProfil(responseProfile?.data?.data);
      // setDaftarSyarat(response?.data?.data[0]?.surat_dokumen[0]?.surat_syarat);
      setDaftarSyarat(response?.data?.data[0]?.surat_dokumen);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    pengajuanDetailData();
  }, []);

  const formatTanggal = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString("id-ID", options);
    return formattedDate;
  };

  return (
    <MainPageLayout>
      <div className="mb-16">
        <HeaderRincianDashboardUser status={detailPengajuan?.status} />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <InformasiRincianDashboardUser
          idPengajuan={detailPengajuan?.id}
          jenisPerizinan={detailPengajuan?.surat_dokumen[0]?.surat_syarat?.surat_jenis?.nama}
          namaSekolah={detailPengajuan?.nama}
          tanggalPengajuan={formatTanggal(detailPengajuan?.created_at)}
          pemohon={profil?.nama_lengkap}
        />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        <AlamatRincianDashboardUser alamat={detailPengajuan?.alamat_lokasi} latitude={detailPengajuan?.latitude} longitude={detailPengajuan?.longitude} />
        <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
        {/* {Array.isArray(daftarSyarat) && daftarSyarat.length > 0 ? (
          daftarSyarat.map((dokumen, index) => (
            <div key={index}>
              <p>ID Dokumen: {dokumen?.id}</p>
              <ul>{Array.isArray(dokumen?.surat_syarat) && dokumen.surat_syarat.length > 0 ? dokumen.surat_syarat.map((subitem, subIndex) => <li key={subIndex}>{subitem?.nama}</li>) : <li>Tidak ada nama dokumen tersedia.</li>}</ul>
            </div>
          ))
        ) : (
          <p>Tidak ada syarat yang tersedia.</p>
        )} */}

        <ListDokumenRincianDashboardUser>
          {daftarSyarat.map((dokumen, index) => (
            <ItemDokumenRincianDashboardUser key={index} dokumen={dokumen?.surat_syarat?.nama} link={dokumen?.dokumen_upload} />
          ))}
        </ListDokumenRincianDashboardUser>
      </div>
      <FooterRincianDashboardUser />
    </MainPageLayout>
  );
};

export default RincianPengajuanUser;

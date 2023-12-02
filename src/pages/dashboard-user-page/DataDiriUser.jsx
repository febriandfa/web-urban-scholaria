import React, { useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import ProfileBarDashboardUser from "../../components/dashboard-user-components/ProfileBarDashboardUser";
import CardGeneral from "../../components/general-components/CardGeneral";
import ShowDataDiriDashboardUser from "../../components/data-diri-dashboard-user-components/ShowDataDiriDashboardUser";
import EditDataDiriDashboardUser from "../../components/data-diri-dashboard-user-components/EditDataDiriDashboardUser";
import ShowDataSekolahDashboardUser from "../../components/data-diri-dashboard-user-components/ShowDataSekolahDashboardUser";
import EditDataSekolahDashboardUser from "../../components/data-diri-dashboard-user-components/EditDataSekolahDashboardUser";
import ShowDataPekerjaanDashboardUser from "../../components/data-diri-dashboard-user-components/ShowDataPekerjaanDashboardUser";
import EditDataPekerjaanDashboardUser from "../../components/data-diri-dashboard-user-components/EditDataPekerjaanDashboardUser";

const DataDiriUser = () => {
  const [isShowEdit, setIsShowEdit] = useState(false);

  const handleViewEdit = () => {
    setIsShowEdit(!isShowEdit);
  };

  return (
    <MainPageLayout>
      <ProfileBarDashboardUser onClick={handleViewEdit} />
      <div className="my-8 w-11/12 mx-auto flex flex-col gap-12">
        <CardGeneral>
          <form>
            <h1 className="font-semibold text-base text-neutral-500 mb-6">Data Diri</h1>
            {!isShowEdit ? <ShowDataDiriDashboardUser /> : <EditDataDiriDashboardUser />}
            <hr className="w-full h-0.5 rounded-full bg-neutral-300 mb-6" />
            <h1 className="font-semibold text-base text-neutral-500">Alamat</h1>
            <p className="text-sm text-neutral-500 mb-6">Isi dengan lokasi Anda berada.</p>
            {!isShowEdit ? <ShowDataSekolahDashboardUser /> : <EditDataSekolahDashboardUser />}
            <hr className="w-full h-0.5 rounded-full bg-neutral-300 mb-6" />
            <h1 className="font-semibold text-base text-neutral-500">Pekerjaan</h1>
            <p className="text-sm text-neutral-500 mb-6">Isi dengan Pekerjaan Anda.</p>
            {!isShowEdit ? <ShowDataPekerjaanDashboardUser /> : <EditDataPekerjaanDashboardUser />}
            <hr className="w-full h-0.5 rounded-full bg-neutral-300 mb-6" />
            <div className="flex items-center mb-12">
              <input className="w-5 h-5" type="checkbox" checked />
              <p className="text-sm font-normal text-neutral-500 ml-4">Saya menyatakan bahwa seluruh data benar.</p>
            </div>
            {isShowEdit && (
              <button className="py-2 px-14 bg-brand-500 w-full rounded-lg text-base font-semibold text-white" type="submit">
                Simpan
              </button>
            )}
          </form>
        </CardGeneral>
      </div>
    </MainPageLayout>
  );
};

export default DataDiriUser;

import React, { useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import ProfileBarDashboardAdministrator from "../../components/dashboard-administrator-components/ProfileBarDashboardAdministrator";
import CardGeneral from "../../components/general-components/CardGeneral";
import ShowDataDiriDashboardAdministrator from "../../components/data-diri-dashboard-administrator-components/ShowDataDiriDashboardAdministrator";
import EditDataDiriDashboardAdministrator from "../../components/data-diri-dashboard-administrator-components/EditDataDiriDashboardAdministrator";

const DataDiriAdministrator = () => {
  const [isShowEdit, setIsShowEdit] = useState(false);

  const handleViewEdit = () => {
    setIsShowEdit(!isShowEdit);
  };

  return (
    <MainPageLayout>
      <ProfileBarDashboardAdministrator onClick={handleViewEdit} />
      <div className="my-8 w-11/12 mx-auto flex flex-col gap-12">
        <CardGeneral>
          <form>
            <h1 className="font-semibold text-base text-neutral-500 mb-6">Data Diri</h1>
            {!isShowEdit ? <ShowDataDiriDashboardAdministrator /> : <EditDataDiriDashboardAdministrator />}
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

export default DataDiriAdministrator;

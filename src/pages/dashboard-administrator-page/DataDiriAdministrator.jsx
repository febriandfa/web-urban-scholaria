import React, { useEffect, useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import ProfileBarDashboardAdministrator from "../../components/dashboard-administrator-components/ProfileBarDashboardAdministrator";
import CardGeneral from "../../components/general-components/CardGeneral";
import ShowDataDiriDashboardAdministrator from "../../components/data-diri-dashboard-administrator-components/ShowDataDiriDashboardAdministrator";
import EditDataDiriDashboardAdministrator from "../../components/data-diri-dashboard-administrator-components/EditDataDiriDashboardAdministrator";
import { useNavigate } from "react-router-dom";
import CheckTokenExpiry from "../../utils/functions/CheckTokenExpiry";

const DataDiriAdministrator = () => {
  const [isShowEdit, setIsShowEdit] = useState(false);

  const handleViewEdit = () => {
    setIsShowEdit(!isShowEdit);
  };

  const handleViewShow = () => {
    setIsShowEdit(false);
  };

  const navigate = useNavigate();

  useEffect(() => {
    CheckTokenExpiry(navigate);
  }, [navigate]);

  return (
    <MainPageLayout>
      <ProfileBarDashboardAdministrator onClick={handleViewEdit} />
      <div className="my-8 w-11/12 mx-auto flex flex-col gap-12">
        <CardGeneral>
          <div>
            <h1 className="font-semibold text-base text-neutral-500 mb-6">Data Diri</h1>
            {!isShowEdit ? <ShowDataDiriDashboardAdministrator /> : <EditDataDiriDashboardAdministrator onViewChange={handleViewShow} />}
            {!isShowEdit && (
              <div className="flex items-center mb-12">
                <input className="w-5 h-5" type="checkbox" readOnly checked />
                <p className="text-sm font-normal text-neutral-500 ml-4">Saya menyatakan bahwa seluruh data benar.</p>
              </div>
            )}
          </div>
        </CardGeneral>
      </div>
    </MainPageLayout>
  );
};

export default DataDiriAdministrator;

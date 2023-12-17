import React, { useEffect, useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import ProfileBarDashboardUser from "../../components/dashboard-user-components/ProfileBarDashboardUser";
import CardGeneral from "../../components/general-components/CardGeneral";
import ShowDataDiriDashboardUser from "../../components/data-diri-dashboard-user-components/ShowDataDiriDashboardUser";
import EditDataDiriDashboardUser from "../../components/data-diri-dashboard-user-components/EditDataDiriDashboardUser";
import CheckTokenExpiry from "../../utils/functions/CheckTokenExpiry";
import { useNavigate } from "react-router-dom";

const DataDiriUser = () => {
  const navigate = useNavigate();
  const [isShowEdit, setIsShowEdit] = useState(false);

  const handleViewEdit = () => {
    setIsShowEdit(!isShowEdit);
  };

  const handleViewShow = () => {
    setIsShowEdit(false);
  };

  useEffect(() => {
    CheckTokenExpiry(navigate);
  }, [navigate]);

  return (
    <MainPageLayout>
      <ProfileBarDashboardUser onClick={handleViewEdit} />
      <div className="my-8 w-11/12 mx-auto flex flex-col gap-12">
        <CardGeneral>
          <div>
            <h1 className="font-semibold text-base text-neutral-500 mb-6">Data Diri</h1>
            {!isShowEdit ? <ShowDataDiriDashboardUser /> : <EditDataDiriDashboardUser onViewChange={handleViewShow} />}
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

export default DataDiriUser;

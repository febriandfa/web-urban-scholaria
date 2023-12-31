import React from "react";
import UnggahSuratHasilSurveyPopup from "../popup-components/UnggahSuratHasilSurveyPopup";
import Popup from "reactjs-popup";

const UnggahHasilTugasSurveyDashboardSurveyor = () => {
  return (
    <Popup
      trigger={
        <button className="flex items-center gap-2 py-2 px-4 rounded-lg text-base font-semibold text-white bg-brand-500 w-fit" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path
              d="M6 13C4.067 13 2.5 11.433 2.5 9.5C2.5 7.69163 3.87146 6.20358 5.63102 6.01922C5.54553 5.69382 5.5 5.35223 5.5 5C5.5 2.79086 7.29086 1 9.5 1C11.3788 1 12.9551 2.29538 13.3845 4.04175C13.5857 4.01422 13.7912 4 14 4C16.4853 4 18.5 6.01472 18.5 8.5C18.5 10.9853 16.4853 13 14 13H11.5V9.41421L12.7929 10.7071C13.1834 11.0976 13.8166 11.0976 14.2071 10.7071C14.5976 10.3166 14.5976 9.68342 14.2071 9.29289L11.2071 6.29289C10.8166 5.90237 10.1834 5.90237 9.79289 6.29289L6.79289 9.29289C6.40237 9.68342 6.40237 10.3166 6.79289 10.7071C7.18342 11.0976 7.81658 11.0976 8.20711 10.7071L9.5 9.41421L9.5 13H6Z"
              fill="white"
            />
            <path d="M9.5 13H11.5L11.5 18C11.5 18.5523 11.0523 19 10.5 19C9.94772 19 9.5 18.5523 9.5 18L9.5 13Z" fill="white" />
          </svg>
          Unggah Hasil Survey
        </button>
      }
      modal
      nested
      overlayStyle={{
        background: "rgba(128, 128, 128, 0.7)",
        backdropFilter: "blur(5px)",
      }}
    >
      {(close) => <UnggahSuratHasilSurveyPopup close={close} />}
    </Popup>
  );
};

export default UnggahHasilTugasSurveyDashboardSurveyor;

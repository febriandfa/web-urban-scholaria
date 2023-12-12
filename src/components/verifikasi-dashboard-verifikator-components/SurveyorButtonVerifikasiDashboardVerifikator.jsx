import React, { useState } from "react";
import Popup from "reactjs-popup";
import InputPenolakanPopup from "../popup-components/InputPenolakanPopup";
import PenugasanSurveyPopup from "../popup-components/PenugasanSurveyPopup";
import { useNavigate } from "react-router-dom";
import { userService } from "../../services";

const SurveyorButtonVerifikasiDashboardVerifikator = ({ verified }) => {
  return (
    <div>
      <Popup
        trigger={
          <button className={`py-2 px-4 bg-danger-500 w-full rounded-lg text-base font-semibold text-white mb-3`} type="button">
            Tolak Pengajuan Permohonan
          </button>
        }
        modal
        nested
        overlayStyle={{
          background: "rgba(128, 128, 128, 0.7)",
          backdropFilter: "blur(5px)",
        }}
      >
        {(close) => <InputPenolakanPopup close={close} />}
      </Popup>
      <Popup
        trigger={
          <button className={`py-2 px-4 w-full rounded-lg text-base font-semibold ${verified ? "text-white bg-brand-500" : "text-neutral-500 bg-neutral-100"}`} disabled={!verified} type="submit">
            Beri Tugas Ke Surveyor
          </button>
        }
        modal
        nested
        overlayStyle={{
          background: "rgba(128, 128, 128, 0.7)",
          backdropFilter: "blur(5px)",
        }}
        contentStyle={{ width: "80%" }}
      >
        {(close) => <PenugasanSurveyPopup close={close} />}
      </Popup>
    </div>
  );
};

export default SurveyorButtonVerifikasiDashboardVerifikator;

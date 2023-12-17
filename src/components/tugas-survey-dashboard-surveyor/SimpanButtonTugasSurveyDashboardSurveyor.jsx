import React from "react";

const SimpanButtonTugasSurveyDashboardSurveyor = ({ verified }) => {
  return (
    <div>
      <button className={`py-2 px-4 w-full rounded-lg text-base font-semibold ${verified ? "text-white bg-brand-500" : "text-neutral-500 bg-neutral-100"}`} disabled={!verified} type="submit">
        Simpan
      </button>
    </div>
  );
};

export default SimpanButtonTugasSurveyDashboardSurveyor;

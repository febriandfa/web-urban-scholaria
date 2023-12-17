import React from "react";
import LabelGeneral from "../general-components/LabelGeneral";
import UnggahHasilTugasSurveyDashboardSurveyor from "./UnggahHasilTugasSurveyDashboardSurveyor";
import { Link } from "react-router-dom";

const HasilSurveyTugasSurveyDashboardSurveyor = ({ namaTugas, surveyor, tanggalTugas, tenggatTugas, suratTugas, fotoSurvey }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-9">
        <h1 className="w-fit text-2xl text-brand-500 font-semibold text-center flex items-center gap-2 justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M19.1992 2.53735L12.7992 8.93735V29.4628L19.1992 23.0628V2.53735Z" fill="#191D88" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.93059 5.26873C5.47299 4.81113 4.7848 4.67424 4.18693 4.92189C3.58905 5.16954 3.19922 5.75296 3.19922 6.4001V22.4001C3.19922 22.8244 3.36779 23.2314 3.66785 23.5315L9.59922 29.4628V8.93735L5.93059 5.26873Z"
              fill="#191D88"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28.3306 8.46873L22.3992 2.53735V23.0628L26.0678 26.7315C26.5254 27.1891 27.2136 27.326 27.8115 27.0783C28.4094 26.8307 28.7992 26.2472 28.7992 25.6001V9.6001C28.7992 9.17575 28.6306 8.76878 28.3306 8.46873Z"
              fill="#191D88"
            />
          </svg>
          Hasil Survey
        </h1>
        <UnggahHasilTugasSurveyDashboardSurveyor />
      </div>
      <div className="grid grid-cols-2 mb-9 gap-x-10">
        <LabelGeneral title="Nama Tugas" value={namaTugas} />
        <LabelGeneral title="Surveyor" value={surveyor} />
        <LabelGeneral title="Tanggal Penugasan" value={tanggalTugas} />
        <LabelGeneral title="Tanggal Tenggat" value={tenggatTugas} />
        <div className="mb-6">
          <label className="block mb-1 font-semibold text-sm text-brand-500 capitalize">Surat Tugas</label>
          <a className="w-fit flex items-center h-9 text-sm text-brand-500" href={`https://urbanscholaria.my.id/storage/uploads/documents/survey/dokumen-surat-tugas/${suratTugas}`} target="_blank">
            {suratTugas}
          </a>
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-semibold text-sm text-brand-500 capitalize">Foto Hasil Survey (Beserta Geotag)</label>
          {fotoSurvey !== "Belum Ada Foto Hasil Survey" ? (
            <a className="w-fit flex items-center h-9 text-sm text-brand-500" href={fotoSurvey} target="_blank">
              {fotoSurvey}
            </a>
          ) : (
            <span className="w-fit flex items-center h-9 text-sm text-neutral-500">{fotoSurvey}</span>
          )}
        </div>
      </div>
      {/* <HSDokumenHasilSurvey /> */}
    </div>
  );
};

export default HasilSurveyTugasSurveyDashboardSurveyor;

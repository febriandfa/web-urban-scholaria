import React from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import CardGeneral from "../../components/general-components/CardGeneral";
import feedbackData from "../../utils/DaftarFeedbackData";

const FeedbackAdministrator = () => {
  const feedback = feedbackData;

  return (
    <MainPageLayout>
      <h1 className="text-2xl text-brand-500 font-semibold text-center mb-16">Feedback Pemohon</h1>
      <div className="grid grid-cols-3 gap-4">
        {feedback.map((feedbackItem) => (
          <CardGeneral color="bg-neutral-100">
            <p className="text-sm">“{feedbackItem.pesan}”</p>
            <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-3" />
            <h4 className="text-sm text-brand-500 font-semibold">{feedbackItem.user}</h4>
            <p className="text-xs text-neutral-500">{feedbackItem.no}</p>
            <p className="text-[0.5rem] text-neutral-500 text-right mt-2">{feedbackItem.tanggal}</p>
          </CardGeneral>
        ))}
      </div>
    </MainPageLayout>
  );
};

export default FeedbackAdministrator;

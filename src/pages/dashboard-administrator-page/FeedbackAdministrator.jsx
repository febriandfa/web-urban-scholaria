import React, { useEffect, useState } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import CardGeneral from "../../components/general-components/CardGeneral";
import feedbackData from "../../utils/DaftarFeedbackData";
import { userService } from "../../services";
import FormatTanggal from "../../utils/functions/FormatTanggal";
import LoadingPopup from "../../components/popup-components/LoadingPopup";
import { useNavigate } from "react-router-dom";
import CheckTokenExpiry from "../../utils/functions/CheckTokenExpiry";

const FeedbackAdministrator = () => {
  const [feedback, setFeedback] = useState();
  const [loading, setLoading] = useState(false);

  const getFeedbackData = async () => {
    try {
      setLoading(true);
      const response = await userService.getFeedback();
      console.log("Feedbakc Orang-Orang", response);
      setFeedback(response?.data?.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getFeedbackData();
  }, []);

  // const feedback = feedbackData;

  const navigate = useNavigate();

  useEffect(() => {
    CheckTokenExpiry(navigate);
  }, [navigate]);

  return (
    <MainPageLayout>
      <LoadingPopup loading={loading} />
      <h1 className="text-2xl text-brand-500 font-semibold text-center mb-16">Feedback Pemohon</h1>
      <div className="grid grid-cols-3 gap-4">
        {feedback?.map((feedbackItem, index) => (
          <CardGeneral color="bg-neutral-100" key={index}>
            <div className="flex-grow">
              <p className="text-sm">“{feedbackItem?.isi}”</p>
              <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-3" />
              <h4 className="text-sm text-brand-500 font-semibold">{feedbackItem?.nama_lengkap}</h4>
              <p className="text-xs text-neutral-500">{feedbackItem?.nomor_identitas}</p>
              <p className="text-[0.5rem] text-neutral-500 text-right mt-2">{FormatTanggal(feedbackItem?.created_at)}</p>
            </div>
          </CardGeneral>
        ))}
      </div>
    </MainPageLayout>
  );
};

export default FeedbackAdministrator;

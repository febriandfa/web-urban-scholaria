import React from "react";
import LandingPageLayout from "../../layouts/LandingPageLayout";
import { iconQuestion } from "../../assets";
import AccordionFaqLandingPage from "../../components/landing-page-components/AccordionFaqLandingPage";
import pertanyaanFaq from "../../utils/DaftarPertanyaanFaqData";

const Faq = () => {
  const daftarPertanyaanData = pertanyaanFaq;

  return (
    <LandingPageLayout>
      <section className="py-20 px-20">
        <div className="pt-10">
          <div className="flex justify-between items-center mb-14">
            <div>
              <h1 className="text-4xl text-brand-900 font-semibold text-left mb-6">Frequently Asked Questions</h1>
              <p className="text-neutral-800">Hi Scholaria, berikut beberapa informasi yang mungkin kamu butuhkan</p>
            </div>
            <div className="w-52 h-52 bg-brand-50 rounded-full">
              <img className="h-52 mx-auto pr-3" src={iconQuestion} alt="" />
            </div>
          </div>
          <div>
            <AccordionFaqLandingPage item={daftarPertanyaanData} />
          </div>
        </div>
      </section>
    </LandingPageLayout>
  );
};

export default Faq;

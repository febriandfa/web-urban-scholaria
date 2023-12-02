import React from "react";

const TitleLandingPage = ({ subtitle, title, align, width }) => {
  return (
    <div className={`mx-auto w-full ${align}`}>
      <p className="text-brand-500 font-semibold text-base mb-4 uppercase">{subtitle}</p>
      <h1 className={`text-brand-900 font-semibold text-4xl mx-auto mb-12 capitalize ${width}`}>{title}</h1>
    </div>
  );
};

export default TitleLandingPage;

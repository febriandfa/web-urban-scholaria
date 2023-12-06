import React from "react";
import { ClipLoader } from "react-spinners";
import Popup from "reactjs-popup";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const LoadingPopup = ({ loading }) => {
  return (
    <Popup
      open={loading}
      closeOnDocumentClick={false}
      overlayStyle={{
        background: "rgba(128, 128, 128, 0.7)",
        backdropFilter: "blur(5px)",
      }}
    >
      <div className="bg-white p-10 rounded-3xl">
        <ClipLoader color={"#36D7B7"} css={override} size={150} />
      </div>
    </Popup>
  );
};

export default LoadingPopup;

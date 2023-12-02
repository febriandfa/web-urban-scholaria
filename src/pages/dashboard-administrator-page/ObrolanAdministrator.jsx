import React, { useState, useEffect, useRef } from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import { bgHome, logoUrban } from "../../assets";

const ObrolanAdministrator = () => {
  const [pesan, setPesan] = useState([]);
  const [inputPesan, setInputPesan] = useState("");
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });

    const newMessage = {
      text: inputPesan,
      sender: "user",
      time: formattedTime,
    };

    setPesan([...pesan, newMessage]);
    setInputPesan("");
  };

  useEffect(() => {
    const messagesContainer = messagesContainerRef.current;
    const isScrolledToBottom = messagesContainer.scrollHeight - messagesContainer.clientHeight <= messagesContainer.scrollTop + 1;

    if (!isScrolledToBottom) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [pesan]);

  return (
    <MainPageLayout>
      <div className="flex items-center justify-center gap-4">
        <img className="w-6 h-6" src={logoUrban} alt="" />
        <p className="font-semibold text-lg uppercase text-brand-500">Urban Scholaria</p>
      </div>
      <hr className="w-full h-0.5 rounded-full bg-neutral-300 my-6" />
      {/* Tampilan Pesan */}
      <div ref={messagesContainerRef} className="h-[20rem] overflow-y-auto">
        {pesan.map((message, index) => (
          <div className="flex gap-2 items-end px-10" key={index}>
            {message.sender != "user" && <img className="w-6 h-6 rounded-full object-cover object-center" src={bgHome} alt="" />}
            <div className={`p-4 bg-brand_2-100 w-fit rounded-xl my-2 ${message.sender === "user" ? "ml-auto" : "mr-auto"}`}>
              <p className="text-sm mb-3">{message.text}</p>
              <p className="text-neutral-700 text-[0.5rem]">{message.time}</p>
            </div>
            {message.sender === "user" && <img className="w-6 h-6 rounded-full object-cover object-center" src={bgHome} alt="" />}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {/* Tampilan Pesan */}
      <form onSubmit={handleSubmit} className="mt-8 flex items-center gap-4 w-11/12 mx-auto">
        <input className="w-full px-3 h-9 rounded-lg text-sm border border-neutral-400" type="text" value={inputPesan} onChange={(e) => setInputPesan(e.target.value)} placeholder="Ketik pesan..." />
        <button>
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
            <path
              d="M7.63889 15.5233L11.1111 19.9585L15.9722 13.3057L22.2222 22.1761H2.77778M25 23.6545V2.95681C25 1.31578 23.75 0 22.2222 0H2.77778C2.04107 0 1.33453 0.31152 0.813592 0.866031C0.292658 1.42054 0 2.17262 0 2.95681V23.6545C0 24.4387 0.292658 25.1908 0.813592 25.7453C1.33453 26.2998 2.04107 26.6113 2.77778 26.6113H22.2222C22.9589 26.6113 23.6655 26.2998 24.1864 25.7453C24.7073 25.1908 25 24.4387 25 23.6545Z"
              fill="#6F74DA"
            />
          </svg>
        </button>
        <button type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <path
              d="M21.1891 13.5433C21.5843 13.3457 21.834 12.9418 21.834 12.4998C21.834 12.0579 21.5843 11.654 21.1891 11.4564L4.85573 3.28968C4.44192 3.08278 3.94493 3.13995 3.58891 3.43542C3.23289 3.73089 3.0851 4.20883 3.21221 4.65369L4.87887 10.487C5.02197 10.9879 5.47975 11.3332 6.00065 11.3332L11.334 11.3332C11.9783 11.3332 12.5007 11.8555 12.5007 12.4998C12.5007 13.1442 11.9783 13.6665 11.334 13.6665L6.00065 13.6665C5.47976 13.6665 5.02198 14.0118 4.87888 14.5127L3.21221 20.346C3.0851 20.7909 3.23289 21.2688 3.58891 21.5643C3.94493 21.8597 4.44192 21.9169 4.85573 21.71L21.1891 13.5433Z"
              fill="#191D88"
            />
          </svg>
        </button>
      </form>
    </MainPageLayout>
  );
};

export default ObrolanAdministrator;

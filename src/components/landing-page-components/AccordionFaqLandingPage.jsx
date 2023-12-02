import React, { useState } from "react";

const AccordionItem = ({ accordionItem }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="mb-8">
      <div className={`flex justify-between items-center cursor-pointer py-2 px-3 mb-3 ${!isOpen && "border-b-2 border-brand-500"}`} onClick={() => setOpen(!isOpen)}>
        <h3 className="font-semibold">{accordionItem.question}</h3>
        <span>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 37 37" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26.8958 23.7554C26.1893 24.462 25.0437 24.462 24.3371 23.7554L18.3794 17.7977L12.4216 23.7554C11.7151 24.462 10.5695 24.462 9.86293 23.7554C9.15637 23.0488 9.15637 21.9033 9.86293 21.1967L17.1 13.9596C17.8066 13.253 18.9522 13.253 19.6587 13.9596L26.8958 21.1967C27.6024 21.9033 27.6024 23.0488 26.8958 23.7554Z"
                fill="#1E293B"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 37 37" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.86293 13.2487C10.5695 12.5421 11.7151 12.5421 12.4216 13.2487L18.3794 19.2064L24.3371 13.2487C25.0437 12.5421 26.1893 12.5421 26.8958 13.2487C27.6024 13.9552 27.6024 15.1008 26.8958 15.8074L19.6587 23.0445C18.9522 23.751 17.8066 23.751 17.1 23.0445L9.86293 15.8074C9.15637 15.1008 9.15637 13.9552 9.86293 13.2487Z"
                fill="#1E293B"
              />
            </svg>
          )}
        </span>
      </div>
      {isOpen && <div className={`py-2 px-5 text-neutral-600 ${isOpen && "border-b-2 border-brand-500"}`}>{accordionItem.answer}</div>}
    </div>
  );
};

const AccordionFaqLandingPage = ({ item }) => {
  return (
    <>
      {item.map((accordionItem, index) => (
        <AccordionItem key={index} accordionItem={accordionItem} />
      ))}
    </>
  );
};

export default AccordionFaqLandingPage;

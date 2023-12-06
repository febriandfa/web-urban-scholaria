import React from "react";

const PaginationGeneral = ({ totalPages, currentPage, onPageChange }) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="mt-10 flex justify-center items-center w-full gap-6">
      {currentPage != 1 && (
        <button className="rotate-180" onClick={handlePrevPage} disabled={currentPage === 1}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M10.5 5.83342L18.6667 14.0001L10.5 22.1667" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          className={`w-6 h-6 rounded-full flex items-center justify-center text-lg font-semibold ${currentPage === index + 1 ? "bg-brand-500 text-white" : "text-neutral-500"}`}
          key={index}
          onClick={() => onPageChange(index + 1)}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </button>
      ))}
      {currentPage != totalPages && (
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M10.5 5.83342L18.6667 14.0001L10.5 22.1667" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default PaginationGeneral;

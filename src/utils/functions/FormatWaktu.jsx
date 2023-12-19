const FormatWaktu = (dateString) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  const formattedDate = new Date(dateString).toLocaleString("id-ID", options);
  return formattedDate;
};

export default FormatWaktu;

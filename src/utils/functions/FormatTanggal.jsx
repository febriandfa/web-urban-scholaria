const FormatTanggal = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(dateString).toLocaleDateString("id-ID", options);
  return formattedDate;
};

export default FormatTanggal;

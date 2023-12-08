const SalinTeks = (teks) => {
  navigator.clipboard
    .writeText(teks)
    .then(() => {})
    .catch((err) => {
      console.error("Gagal menyalin: ", err);
    });
};

export default SalinTeks;

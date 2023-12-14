const setToken = (token) => localStorage.setItem("TOKEN", token);

const getToken = () => localStorage.getItem("TOKEN");

const removeToken = () => localStorage.removeItem("TOKEN");

const getSuratJenisID = () => localStorage.getItem("SuratJenisID");

const getKategoriPerizinan = () => localStorage.getItem("KategoriPerizinan");

const getIdSuratDiajukan = () => localStorage.getItem("IdSuratDiajukan");

const getIdUser = () => localStorage.getItem("IdPengguna");

export { setToken, getToken, removeToken, getSuratJenisID, getKategoriPerizinan, getIdSuratDiajukan, getIdUser };

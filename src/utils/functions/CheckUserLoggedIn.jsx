const CheckUserLoggedIn = () => {
  const userToken = localStorage.getItem("TOKEN");
  return userToken !== null;
};

export default CheckUserLoggedIn;

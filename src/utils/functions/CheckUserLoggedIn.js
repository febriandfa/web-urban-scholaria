const checkUserLoggedIn = () => {
  const userToken = localStorage.getItem("TOKEN");
  return userToken !== null;
};

export default checkUserLoggedIn;

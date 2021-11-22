const getters = {
  isAuthenticated: (state) => state.isAuthenticated,
  isProgress: (state) => state.isProgress,
  errorsAuth: (state) => state.errorsAuth,
  isRegisterSuccess: (state) => state.isRegisterSuccess,
  userLogin: (state) => {
    const user = {
      ...state.userLogin,
      password: "",
    };
    return user;
  },
  cart: (state) => state.cart,
};

export default getters;

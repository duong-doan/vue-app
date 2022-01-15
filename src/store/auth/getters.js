const getters = {
  isAuthenticated: (state) => state.isAuthenticated,
  isProgress: (state) => state.isProgress,
  errorsAuth: (state) => state.errorsAuth,
  isRegisterSuccess: (state) => state.isRegisterSuccess,
  userLogin: (state) => state.userLogin,
  cart: (state) => state.cart,
  isProgressUpdate: (state) => state.isProgressUpdate,
  processing: (state) => state.processing,
};

export default getters;

const getters = {
  isAuthenticated: (state) => state.isAuthenticated,
  isProgress: (state) => state.isProgress,
  errorsAuth: (state) => state.errorsAuth,
  isRegisterSuccess: (state) => state.isRegisterSuccess,
  userLogin: (state) => state.userLogin,
  isProgressUpdate: (state) => state.isProgressUpdate,
};

export default getters;

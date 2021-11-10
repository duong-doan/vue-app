const getters = {
  isAuthenticated: (state) => state.isAuthenticated,
  isProgress: (state) => state.isProgress,
  errorsRegister: (state) => state.errors,
  isRegisterSuccess: (state) => state.isRegisterSuccess,
};

export default getters;

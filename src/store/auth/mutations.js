const mutations = {
  progress(state) {
    state.isProgress = true;
  },
  addNewUserSuccess(state) {
    state.isProgress = false;
    state.isRegisterSuccess = true;
  },
  addNewUserFail(state, error) {
    state.isProgress = false;
    state.isRegisterSuccess = false;
    state.errorsAuth.register = error;
  },
  loginUserSuccess(state, user) {
    state.cart = user.cart;
    state.isProgress = false;
    state.isAuthenticated = true;
    state.userLogin = user;
  },
  loginUserFail(state, error) {
    state.isProgress = false;
    state.isAuthenticated = false;
    state.errorsAuth.login = error;
  },
  setIsAuthenticated(state, value) {
    state.isAuthenticated = value;
  },
  updateUserRequest(state) {
    state.isProgressUpdate = true;
  },
  updateUserRequestSuccess(state) {
    state.isProgressUpdate = false;
  },
  updateUserRequestFailed(state) {
    state.isProgressUpdate = false;
  },
  addCartUserSuccess(state, data) {
    const { cart } = data;
    state.cart = cart;
  },
  setCart(state, data) {
    state.cart = data;
  },
  setQuantity(state, data) {
    state.cart = data;
  },
};

export default mutations;

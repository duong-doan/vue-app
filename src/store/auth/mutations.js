const mutations = {
  progress(state) {
    state.isProgress = true;
  },
  addNewUserSuccess(state) {
    state.isProgress = false;
    state.isRegisterSuccess = true;
    state.errors = {};
  },
  addNewUserFail(state, error) {
    state.isProgress = false;
    state.isRegisterSuccess = false;
    state.errors.register = error;
  },
};

export default mutations;

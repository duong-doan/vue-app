import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import state from "./state";

const storeAuth = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default storeAuth;

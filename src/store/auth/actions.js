import * as authApi from "../../api/auth";
import { ERRORS } from "../../utils/constants";
import { checkEmailExists, checkLoginUser } from "../../utils/helper";
import useLocalStorage from "../../utils/useLocalStorage";

const { EMAIL_EXISTS, ACCOUNT_ERROR } = ERRORS;

const { setLocalStorage, getLocalStorage } = useLocalStorage();
const actions = {
  progress({ commit }) {
    commit("progress");
  },
  setIsAuthenticated({ commit }, value) {
    commit("setIsAuthenticated", value);
  },
  async addNewUserRequest({ commit }, { email, password }) {
    const dataUsers = await authApi.getUserFromDB();
    const isSame = checkEmailExists(dataUsers, email);
    if (!isSame) {
      await authApi.addNewUserToDB({ email, password }).then((res) => {
        if (res.data) {
          commit("addNewUserSuccess");
        }
      });
    } else {
      commit("addNewUserFail", EMAIL_EXISTS);
    }
  },
  async loginUserRequest({ commit }, { email, password }) {
    const dataUsers = await authApi.getUserFromDB();
    const { isSame, findUser } = checkLoginUser(dataUsers, email, password);

    if (isSame) {
      commit("loginUserSuccess", findUser);
      const customUserLocalStr = {
        ...findUser,
      };
      setLocalStorage("user", customUserLocalStr);
      setLocalStorage("isAuthenticated", true);
    } else {
      commit("loginUserFail", ACCOUNT_ERROR);
      setLocalStorage("isAuthenticated", false);
    }
  },
  async updateUserRequest({ commit }, data) {
    commit("updateUserRequest");
    const { id } = data;
    const res = await authApi.updateUserRequestDB(id, data);
    if (res) {
      setLocalStorage("user", res);
      commit("updateUserRequestSuccess");
      return;
    } else {
      commit("updateUserRequestFailed");
    }
  },
  async addCartUserRequest({commit}, data) {
    const user = getLocalStorage("user")
    const dataRequest = {
      ...user,
      cart: data
    }
    const res = await authApi.updateCartUserRequest(user.id, dataRequest)
    commit("addCartUserSuccess", res.cart)
  }
};

export default actions;

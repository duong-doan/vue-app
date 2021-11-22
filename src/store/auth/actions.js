import * as authApi from "../../api/auth";
import { ERRORS } from "../../utils/constants";
import { checkEmailExists, checkLoginUser } from "../../utils/helper";
import useLocalStorage from "../../utils/useLocalStorage";

const { EMAIL_EXISTS, ACCOUNT_ERROR } = ERRORS;

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
    const { setLocalStorage } = useLocalStorage();
    const dataUsers = await authApi.getUserFromDB();
    const { isSame, findUser } = checkLoginUser(dataUsers, email, password);

    if (isSame) {
      commit("loginUserSuccess", findUser);
      const customUserLocalStr = {
        ...findUser,
        password: "********",
      };
      setLocalStorage("user", customUserLocalStr);
      setLocalStorage("isAuthenticated", true);
    } else {
      commit("loginUserFail", ACCOUNT_ERROR);
      setLocalStorage("isAuthenticated", false);
    }
  },
};

export default actions;

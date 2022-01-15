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
    const dataUsers = await authApi.getUsersFromDB();
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
    const dataUsers = await authApi.getUsersFromDB();
    const { isSame, findUser } = checkLoginUser(dataUsers, email, password);

    if (isSame) {
      commit("loginUserSuccess", findUser);
      setLocalStorage("user", findUser);
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
  async addCartUserRequest({ commit }, data) {
    const user = await getLocalStorage("user");
    const dataRequest = {
      ...user,
      cart: data,
    };
    const res = await authApi.updateCartUserRequest(user.id, dataRequest);
    if (res) {
      delete res["0"];
      commit("addCartUserSuccess", res);
      setLocalStorage("user", res);
    }
  },
  setCart({ commit }, data) {
    const userLocal = getLocalStorage("user");
    const newData = {
      ...userLocal,
      cart: data,
    };
    // const res = await authApi.updateCartUserRequest(newData.id, newData);
    // if (res) {
    setLocalStorage("user", newData);
    commit("setCart", data);
    // }
  },
  async setQuantity({ commit }, data) {
    commit("processingRequest");
    const { type, id, currentQuantity } = data;
    const cartUserLocalStr = getLocalStorage("user").cart;
    cartUserLocalStr.forEach((item) => {
      if (currentQuantity < 1) return;
      switch (type) {
        case "increase":
          if (item.id === id) {
            item.quantity = currentQuantity + 1;
          }
          break;

        default:
          if (item.id === id) {
            item.quantity = currentQuantity - 1;
          }
          break;
      }
    });
    console.log("after", cartUserLocalStr);
    const newData = {
      ...getLocalStorage("user"),
      cart: cartUserLocalStr,
    };
    const res = await authApi.updateCartUserRequest(newData.id, newData);
    if (res) {
      setLocalStorage("user", newData);
      commit("setQuantity", cartUserLocalStr);
      commit("processingSuccess");
    }
  },
};

export default actions;

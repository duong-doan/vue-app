import * as authApi from "../../api/auth";
import useLocalStorage from "../../utils/useLocalStorage";
const { setLocalStorage, getLocalStorage } = useLocalStorage();

const actions = {
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
    setLocalStorage("user", newData);
    commit("setCart", data);
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
    const newData = {
      ...getLocalStorage("user"),
      cart: cartUserLocalStr,
    };
    const res = await authApi.updateCartUserRequest(newData.id, newData);
    if (res) {
      await setLocalStorage("user", newData);
      await commit("setQuantity", cartUserLocalStr);
      await commit("processingSuccess");
    }
  },
};

export default actions;

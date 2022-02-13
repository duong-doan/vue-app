import * as products from "@/api/products";
import { TYPE_SEARCH } from "@/module/category/store/constants";

const actions = {
  async getFilterProducts({ commit }, data) {
    try {
      commit("processing");
      const { type } = data;
      const res = await products.getProducts();
      if (type === TYPE_SEARCH.FILTER) {
        const { brand, price } = data;
        const result = await res.filter((item) => {
          if (item.brand === brand && item.price <= price) {
            return item;
          }
        });
        commit("getProductsSuccess", result);
        return;
      } else {
        const { param } = data;
        const result = await res.filter((item) => {
          if (item.name.toLowerCase().includes(param)) {
            return item;
          }
        });
        commit("getProductsSuccess", result);
        return;
      }
    } catch (error) {
      commit("getProductsFailed");
    }
  },
  clearDataSearch({ commit }) {
    commit("clearDataSearch");
  },
};

export default actions;

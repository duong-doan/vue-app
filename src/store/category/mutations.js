const mutations = {
  processing(state) {
    state.processing = true;
  },
  getProductsSuccess(state, data) {
    state.products = data;
    state.processing = false;
  },
  getProductsFailed(state) {
    state.processing = false;
  },
  clearDataSearch(state) {
    state.products = [];
    state.processing = false;
  },
};

export default mutations;

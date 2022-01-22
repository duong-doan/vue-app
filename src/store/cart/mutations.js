const mutations = {
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
  processingRequest(state) {
    state.processing = true;
  },
  processingSuccess(state) {
    state.processing = false;
  },
};

export default mutations;

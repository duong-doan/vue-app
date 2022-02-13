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
  setStep(state, data) {
    state.step = data;
  },
  setSelectedProduct(state, data) {
    state.selectedProduct = data;
  },
  setOrders(state, data) {
    state.orders = data;
  },
};

export default mutations;

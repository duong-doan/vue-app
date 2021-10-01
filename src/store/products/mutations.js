const mutations = {
    getProductsSuccess(state, data) {
        state.products = data
        state.isProcessing = false
        console.log(state)
    },
    getProductsFail(state, {error}) {
        console.log(error)
    },
    processing(state) {
        state.isProcessing = true
        return state
    }
}

export default mutations
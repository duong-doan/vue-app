const mutations = {
    getProductsSuccess(state, data) {
        console.log(data)
        state.products = data
        state.isProcessing = false
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
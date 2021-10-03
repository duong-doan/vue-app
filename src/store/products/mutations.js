const mutations = {
    progress(state) {
        state.isProgress = true
    },
    getProductsSuccess(state, data) {
        state.products = data
        state.isProcessing = false
    },
    getProductsFail(state, {error}) {
        console.log(error)
    },
    getProductDetailSuccess(state, data) {
        const productDetail = {
            name: data.name,
            image: data.image,
            price: data.price,
            price_discount: data.priceDiscount
        }
        state.product_detail = {
            ...state.product_detail,
            ...productDetail
        }
        state.isProgress = false
    },
    randomRelatedProduct(state, data) {
        state.related_product = data
    },
    increaseQuantity(state) {
        state.quantity_default++
    },
    decreaseQuantity(state) {
        state.quantity_default--
    }
}

export default mutations
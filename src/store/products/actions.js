import * as products from '../../api/products'

const actions = {
    progress({commit}) {
        commit('progress')
    },
    getDataProductsRequest({commit}) {
        products.getProducts().then(data => {
            if(data) {
                commit('getProductsSuccess', data)
            } else {
                commit('getProductsFail', {error: "get data fail"})
            }
        })
    },
    getProductDetailRequest({commit}, id) {
        products.getDetailProduct(id).then(data => {
            if(data) {
                commit('getProductDetailSuccess', data)
            }
        })
    },
    increaseQuantityProduct({commit}) {
        commit('increaseQuantity')
    },
    decreaseQuantityProduct({commit}) {
        commit('decreaseQuantity')
    },
}

export default actions
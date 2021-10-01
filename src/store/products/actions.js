import * as products from '../../api/products'

const actions = {
    processing({commit}) {
        commit('processing')
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
    // getDataProductsSuccess({commit}, payload) {
    //     commit('getProductsSuccess', payload)
    // },
    // getDataProductsFail({commit}, payload) {
    //     commit('GET_PRODUCTS_FAIL', payload)
    // }
}

export default actions
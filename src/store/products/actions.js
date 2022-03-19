import * as products from '../../api/products'
import useLocalStorage from '../../utils/useLocalStorage'

const {setLocalStorage} = useLocalStorage()

const actions = {
    progress({commit}) {
        commit('progress')
    },
    getDataProductsRequest({commit}) {
        products.getProducts().then(data => {
            if(data) {
                commit('getProductsSuccess', data)
                // random related product
                const _randomRelatedProducts = (ar, size) => {
                    let new_arr = [...ar];
                    new_arr.splice(Math.floor(Math.random()*ar.length),1);
                    return ar.length <= (size+1) ? new_arr : _randomRelatedProducts(new_arr, size);
                }
                setLocalStorage('related_products', _randomRelatedProducts(data, 4))
                commit('randomRelatedProduct', _randomRelatedProducts(data, 4))
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
    clearDataProduct({commit}) {
        commit("clearDataProduct")
    }
}

export default actions
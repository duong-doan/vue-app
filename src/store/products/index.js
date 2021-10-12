import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import state from './state'

const storeProducts = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

export default storeProducts
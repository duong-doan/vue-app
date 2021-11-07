const mutations = {
    progress(state) {
        state.isProgress = true
    },
    addNewUserSuccess(state) {
        state.isProgress = false
    },
    addNewUserFail(state, error) {
        state.isProgress = true
        state.errors.register = error
    }
}

export default mutations
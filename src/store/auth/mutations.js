const mutations = {
    progress(state) {
        state.isProgress = true
    },
    addNewUserSuccess(state) {
        state.isProgress = false
    },
    addNewUserFail(state, error) {
        console.log("error", error)
        state.isProgress = true
        state.errors.register = error
        console.log(state)
    }
}

export default mutations
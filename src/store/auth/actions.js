import * as authApi from '../../api/auth'
import {map} from 'lodash'
// import {ERRORS_REGISTER} from '../../utils/constants'

// const {EMAIL_EXISTS} = ERRORS_REGISTER

const actions = {
    progress({commit}) {
        commit('progress')
    },
    async addNewUserRequest({commit}, {email, password}) {
        const dataUsers = await authApi.getUserFromDB()
        console.log("before compare")
        if(dataUsers) {
            console.log('compare')
            map(dataUsers, (user) => {
                if(user.email === email) return
            })
        }
        console.log("after compare success")
        await authApi.addNewUserToDB({email, password})
            .then(res => {
                if (res.data) {
                    commit('addNewUserSuccess')
                } else {
                    commit('addNewUserFail', "")
                }
            })

    },
    getUserRequest() {
        authApi.getUserFromDB()
            .then(data => {
                if(data) {
                    console.log(data)
                }
            })
    }
}

export default actions
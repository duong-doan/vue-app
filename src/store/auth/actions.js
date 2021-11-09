import * as authApi from '../../api/auth'
import {map} from 'lodash'
import {ERRORS_REGISTER} from '../../utils/constants'

const {EMAIL_EXISTS} = ERRORS_REGISTER

const actions = {
    progress({commit}) {
        commit('progress')
    },
    async addNewUserRequest({commit}, {email, password}) {
        const dataUsers = await authApi.getUserFromDB()
        let isSame = false;
        if(dataUsers) {
            map(dataUsers, (user) => {
                if(user.email === email) {
                    isSame = true
                } else {
                    isSame = false
                }
            })
        }
        if(!isSame) {
            await authApi.addNewUserToDB({email, password})
                .then(res => {
                    if (res.data) {
                        commit('addNewUserSuccess')
                    } else {
                        commit('addNewUserFail', "")
                    }
                })
        } else {
            commit('addNewUserFail', EMAIL_EXISTS)
            commit('addNewUserSuccess')
        }

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
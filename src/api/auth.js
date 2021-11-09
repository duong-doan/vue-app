import axios from "../utils/axios";

export const addNewUserToDB = async ({email, password}) => {
    try {
        const res = await axios.post("/auth", {
            email,
            password
        })
        return res
    } catch (e) {
        throw new Error(e)
    }
}

export const getUserFromDB = async () => {
    try {
        const res = await axios.get("/auth")
        return res.data
    } catch (e) {
        throw new Error(e)
    }
}

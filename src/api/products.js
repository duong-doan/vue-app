import axios from "../utils/axios";

export const getProducts = async () => {
    try {
        const res = await axios.get('/products')
        return res.data
    } catch (error) {
        console.log(error)
    }
}
import axios from "../utils/axios";

export const getProducts = async () => {
    try {
        const res = await axios.get('/products')
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getDetailProduct = async (id) => {
    try {
        const res = await axios.get(`/products/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
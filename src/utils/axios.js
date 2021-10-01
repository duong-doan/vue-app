import axios from "axios";

const version = 'v1'
const API_URL = `https://613e18ec94dbd600172abad3.mockapi.io/api/${version}`

axios.defaults.baseURL = API_URL
axios.defaults.headers.common.Accept = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axios

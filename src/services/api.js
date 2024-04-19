import axios from "axios"

const URL = ''

export default axios.create({
    baseURL: URL
})
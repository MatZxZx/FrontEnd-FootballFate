import axios from 'axios'

const URL = import.meta.env.VITE_BACKEND_API

const instance = axios.create({
    baseURL: URL
})

export default instance
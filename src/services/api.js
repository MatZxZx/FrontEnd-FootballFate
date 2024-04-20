import axios from 'axios'

const URL = ''

const instance = axios.create({
    baseURL: URL
})

export default instance
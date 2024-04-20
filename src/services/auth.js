import api from './api.js'

export async function loginRequest(username, password) {
    return await api.post({
        username,
        password
    })
}

export async function registerRequest(username, teamName, email, password) {
    return await api.post({
        username,
        teamName,
        email,
        password
    })
}
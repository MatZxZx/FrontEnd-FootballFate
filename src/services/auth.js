import api from './api.js'


export async function userRequest(name, password){
    const response = 
        api.post({
            name,
            password
        })

    return response
}

export async function registRequest(name, teamName, email, password){
    const response = 
        api.post({
            name,
            teamName,
            email,
            password
        })

    return response
}

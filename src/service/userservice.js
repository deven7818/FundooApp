import axios from "axios"


export const logIn = async (signInObj) => {
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login", signInObj)
    return response
}

export const signUpService = async (signUpObj) => {
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp", signUpObj)
    return response
}


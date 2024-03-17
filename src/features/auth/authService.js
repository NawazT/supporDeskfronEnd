import axios from 'axios'

const API_URL = 'https://supportdeskbackend-dubt.onrender.com/api/users'
const login_API = 'https://supportdeskbackend-dubt.onrender.com/api/users/login'

// Register a new user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data)
    {
        localStorage.setItem('user', 
        JSON.stringify(response.data))
    }
    return response.data
}


//Login User
const login = async(userData) => {
    const response  = await axios.post(login_API ,userData)
    if(response.data)
    {
        localStorage.setItem('user', 
        JSON.stringify(response.data))
    }
    return response.data

}

// Logout user
const logout = () => localStorage.removeItem('user')

const authService = {
    register,
    login,
    logout,
}

export default authService
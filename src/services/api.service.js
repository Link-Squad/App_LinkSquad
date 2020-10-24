import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.withCredentials = true;


//test
export const login = (email, password) => {
    return axios.post('/login', {email, password}).then((res) => res.data)
}
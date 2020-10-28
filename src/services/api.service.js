import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.withCredentials = true;

export const search = (value) => {
    const path = `?game=${value}`;
    console.log(path);
    //http://localhost:3001/games/?game=5f9723b9e28b262b4bc30534
    return axios.get(`/games/${path}`).then((res) => {
        console.log(res.data);
        return res.data
    })
}

//test
export const login = (email, password) => {
    return axios.post('/login', {email, password}).then((res) => res.data)
}

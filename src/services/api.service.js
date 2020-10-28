import axios from 'axios';

/* CONFIG */
const http = axios.create({
	baseURL: process.env.API_URL,
	withCredentials: true
});

http.interceptors.response.use(
	function (response) {
		return response.data;
	},
	function (error) {
		if (error.response?.status === 401) {
			localStorage.clear();
            window.location.assign('/login');
            //send error msg
        }

        return Promise.reject(error);
	}
);

/* REQUESTS */
export const login = (email, password) => {
	return http.post('/login', { email, password }).then((res) => res.data);
};

export const search = (value) => {
    const path = `?game=${value}`;
    return axios.get(`/games/${path}`).then((res) => {
        console.log(res.data);
        return res.data
    })
}

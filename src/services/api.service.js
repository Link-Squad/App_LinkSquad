import axios from 'axios';

/* CONFIG */
const http = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
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
			window.location.state({loginError: 'Please log in'})
		}

		return Promise.reject(error);
	}
);

/* REQUESTS */
export const login = (email, password) => {
	return http.post('/login', { email, password }).then(data => data);
};

export const signup = newUser => {
	const { username, email, password } = newUser;
	return http
		.post('/users', { username, email, password })
		.then(data => data);
};

export const updateUser = updatedUser => {
	const { avatar } = updatedUser;
	const formData = new FormData();
	formData.append('avatar', avatar);

	return Promise.all([
		http.patch('/users', updatedUser).then(data => data),
		http.patch('/users', formData)
	]);
};

export const createUserGame = game => {
	return http.post('/usersgames/new', { game });
};

export const logout = () => {
	return http.get('/logout');
};

export const getGames = () => {
	return http.get('/games');
};

export const getUsersByGame = gameId => {
	return http.get(`/games/${gameId}/users`);
};

export const getUsersByQuery = query => {
	return http.get(`/users${query}`);
};

export const search = value => {
	const gamePath = `?game=${value}`;
	const userPath = `?username=${value}`;
	return Promise.all([
		http.get(`/games/${gamePath}`),
		http.get(`/users/search/${userPath}`)
	]).then(data => data);
};

export const getUserById = id => {
	return http.get(`/users?_id=${id}`).then(data => data[0]);
};

export const getFriends = userId => {
	return http.get(`/friends/${userId}`);
};

export const getFriendshipStatus = friendId => {
	return http.get(`/friends/status/${friendId}`);
};

export const addFriend = friendId => {
	return http.post(`/friends/${friendId}`);
};

export const acceptFriend = friendId => {
	return http.patch(`/friends/${friendId}`);
};

export const deleteFriend = friendshipId => {
	return http.delete(`/friends/${friendshipId}`);
};

export const getOffers = () => {
	return http.get('/offers');
};

export const addProfileView = userId => {
	return http.put(`/users/${userId}/views`);
}

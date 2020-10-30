import React from 'react';
import UserCard from '../userCard/UserCard';

const Home = () => {
	return (
		<main className="">
            Home
			<UserCard user={{username: 'josete', friends: 58, views: 401, id:324234234, img:'https://cdn141.picsart.com/275574803034201.jpg'}} />
		</main>
	);
};

export default Home;

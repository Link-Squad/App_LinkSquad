import React from 'react';
import PlayerOverview from '../playerOverview/PlayerOverview';
import UserCard from '../userCard/UserCard';

const Home = () => {
	return (
		<main className="">
            Home
			<UserCard user={{username: 'josete', friends: 58, views: 401, id:324234234, img:'https://cdn141.picsart.com/275574803034201.jpg'}} />
			<PlayerOverview player={{username: 'bo$$619', friends: 58, views: 401, social:{youtube: 'youtube.com'}, id:324234234, img:'https://www.choiceofgames.com/press-files/screenshots/deathless/ios/iTunesArtwork.png'}} />
		</main>
	);
};

export default Home;

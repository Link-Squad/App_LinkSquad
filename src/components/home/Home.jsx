import React from 'react';
import GameCardDetails from '../gameCardDetails/GameCardDetails';
import PlayerCardDetails from '../playerCardDetails/PlayerCardDetails';
import PlayerCardLong from '../playerCardLong/PlayerCardLong';
import PlayerCardSmall from '../playerCardSmall/PlayerCardSmall';
import UserCard from '../userCard/UserCard';
import './Home.scss';
const player1 = {
	username: 'bo$$619',
	friends: 58,
	views: 401,
	social: { youtube: 'http://www.youtube.com' },
	id: 324234234,
	img:
		'https://www.choiceofgames.com/press-files/screenshots/deathless/ios/iTunesArtwork.png',

	games: [
		{
			name: 'Overwatch',
			logo:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/1200px-Overwatch_circle_logo.svg.png'
		}
	],

	languages: ['Español']
};
const Home = () => {
	return (
		<main className="Home">
			Home
			<UserCard
				user={{
					username: 'josete',
					friends: 58,
					views: 401,
					id: 324234234,
					img: 'https://cdn141.picsart.com/275574803034201.jpg'
				}}
			/>
			<PlayerCardLong player={player1} />
			<PlayerCardSmall
				player={{
					username: 'bo$$619',
					friends: 58,
					views: 401,
					social: { youtube: 'http://www.youtube.com' },
					id: 324234234,
					img:
						'https://www.choiceofgames.com/press-files/screenshots/deathless/ios/iTunesArtwork.png'
				}}
			/>
			<GameCardDetails
				game={{
					date: '20/04/96',
					genre: 'MOBA',
					platforms: [
						'PS4',
						'PC',
						'XBOX One',
						'Wii',
						'Gameboy Color',
						'Commodore 61',
						'Texas instruments calculator'
					],
					logo:
						'https://logos-download.com/wp-content/uploads/2019/06/Dota_2_Logo.png'
				}}
			/>

			<PlayerCardDetails player={player1}/>
		</main>
	);
};

export default Home;

import React from 'react';
import GameCardDetails from '../gameCardDetails/GameCardDetails';
import PlayerCardDetails from '../playerCardDetails/PlayerCardDetails';
import PlayerCardLong from '../playerCardLong/PlayerCardLong';
import PlayerCardSmall from '../playerCardSmall/PlayerCardSmall';
import UserCard from '../userCard/UserCard';
import './Home.scss';

import { user1, user2 } from '../../mocks/users.mock';
import { overwatch } from '../../mocks/games.mock';
import OfferCard from '../offerCard/OfferCard';
import { offer1 } from '../../mocks/offers.mock';

const Home = () => {
	return (
		<main className="Home">
			Home
			<UserCard user={user2} />
			<PlayerCardLong player={user1} />
			<PlayerCardSmall player={user1} />
			<GameCardDetails game={overwatch} />
			<PlayerCardDetails player={user1} />
			<OfferCard offer={offer1} />
		</main>
	);
};

export default Home;

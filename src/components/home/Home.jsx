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
import { useAuthContext } from '../../contexts/AuthContext';

const Home = () => {
	const authContext = useAuthContext();
	const user = authContext.user;

	return (
		<div className="Home">
			<aside className="Home__aside">
				<UserCard user={user} />
				<div>Footer goes here</div>
			</aside>
			<main>
				<section>
					<h2>Friend Suggestions</h2>
					<div className="friend-suggestions">
						<PlayerCardSmall player={user1} />
						<PlayerCardSmall player={user2} />
					</div>
				</section>
				<section>
					<h2>News</h2>
					<OfferCard offer={offer1} />
				</section>
			</main>
		</div>
	);
};

export default Home;

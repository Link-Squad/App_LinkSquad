import React from 'react';
import PlayerCardSmall from '../playerCardSmall/PlayerCardSmall';
import UserCard from '../userCard/UserCard';
import './Home.scss';

import { user1, user2 } from '../../mocks/users.mock';
import { useAuthContext } from '../../contexts/AuthContext';
import News from '../news/News';
import FooterSmall from '../utilities/footerSmall/FooterSmall';

const Home = () => {
	const authContext = useAuthContext();
	const user = authContext.user;

	return (
		<div className="Home">
			<aside className="Home__aside">
				<UserCard user={user} />
				<FooterSmall />
			</aside>
			<main>
				<section>
					<h2>Friend Suggestions</h2>
					<div className="friend-suggestions">
						<PlayerCardSmall player={user1} />
						<PlayerCardSmall player={user2} />
					</div>
				</section>
				<News />
			</main>
		</div>
	);
};

export default Home;

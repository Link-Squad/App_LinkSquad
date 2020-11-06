import React from 'react';
import UserCard from '../userCard/UserCard';
import './Home.scss';

import { useAuthContext } from '../../contexts/AuthContext';
import News from '../news/News';
import FooterSmall from '../utilities/footerSmall/FooterSmall';
import FriendSuggestions from './friendSuggestions/FriendSuggestions';

const Home = () => {
	const authContext = useAuthContext();
	const user = authContext.user;

	return (
		<div className="Home">
			<aside className="Home__aside">
				<UserCard user={user} />
				<FooterSmall />
			</aside>
			<main className="Home__main">
				<FriendSuggestions />
				<News />
			</main>
		</div>
	);
};

export default Home;

import React from 'react';
import UserCard from '../userCard/UserCard';
import './Home.scss';

import { useAuthContext } from '../../contexts/AuthContext';
import Landing from '../landing/Landing'
import News from '../news/News';
import FooterSmall from '../utilities/footerSmall/FooterSmall';
import FriendSuggestions from './friendSuggestions/FriendSuggestions';

const Home = () => {
	const authContext = useAuthContext();
	const user = authContext.user;

	if (!user) {
		return <Landing />
	}

	return (
		<div className="Home content__wrapper">
			<aside className="Home__aside content__aside">
				<UserCard user={user} />
				<FooterSmall />
			</aside>
			<main className="Home__main content__main">
				<FriendSuggestions />
				<News />
			</main>
		</div>
	);
};

export default Home;

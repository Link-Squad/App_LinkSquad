import React from 'react';
import UserCard from '../userCard/UserCard';
import './Home.scss';

import { useAuthContext } from '../../contexts/AuthContext';
import Layout from '../layout/Layout';
import Landing from '../landing/Landing';
import News from '../news/News';
import FooterSmall from '../utilities/footerSmall/FooterSmall';
import FriendSuggestions from './friendSuggestions/FriendSuggestions';

const Home = () => {
	const authContext = useAuthContext();
	const user = authContext.user;

	if (!user) {
		return <Landing />;
	}

	return (
		<Layout withHeader={true}>
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
		</Layout>
	);
};

export default Home;

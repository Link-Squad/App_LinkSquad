import React, { useEffect, useState } from 'react';
import UserCardDetails from '../../userCardDetails/UserCardDetails';
import FooterSmall from '../../utilities/footerSmall/FooterSmall';
import AboutMe from '../aboutMe/AboutMe';
import UserGamesList from '../userGamesList/UserGamesList';
import { getUserById } from '../../../services/api.service';
import './UserProfile.scss';
import Layout from '../../layout/Layout';

const UserProfile = props => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const userId = props.match.params.id;
		getUserById(userId).then(fetchedUser => {
			setUser(fetchedUser);
		});
	}, [props.match]);

	const userProfile = () => (
		<Layout withHeader={true}>
			<div className="UserProfile content content--wrapper">
				<aside className="UserProfile__aside content__aside">
					<UserCardDetails user={user} />
					<FooterSmall />
				</aside>
				<main className="UserProfile__info content__main">
					<AboutMe user={user} />
					<UserGamesList user={user} />
				</main>
			</div>
		</Layout>
	);

	return <>{user ? userProfile() : 'loading...'}</>;
};

export default UserProfile;

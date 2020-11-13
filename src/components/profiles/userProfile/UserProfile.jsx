import React, { useEffect, useState } from 'react';
import UserCardDetails from '../../userCardDetails/UserCardDetails';
import FooterSmall from '../../utilities/footerSmall/FooterSmall';
import AboutMe from '../aboutMe/AboutMe';
import UserGamesList from '../userGamesList/UserGamesList';
import { getUserById } from '../../../services/api.service';
import './UserProfile.scss';

const UserProfile = props => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const userId = props.match.params.id;
		getUserById(userId).then(fetchedUser => {
			setUser(fetchedUser);
		});
	}, []);

	const userProfile = () => (
		<div className="UserProfile">
			<aside className="UserProfile__aside">
				<UserCardDetails user={user} />
				<FooterSmall />
			</aside>
			<main className="UserProfile__info content__main">
				<AboutMe user={user} />
				<UserGamesList user={user} />
			</main>
		</div>
    );

	return <div>{user ? userProfile() : 'loading...'}</div>;
};

export default UserProfile;

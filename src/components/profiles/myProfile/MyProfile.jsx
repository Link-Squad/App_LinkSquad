import React from 'react';
import { useAuthContext } from '../../../contexts/AuthContext';
import AboutMe from '../aboutMe/AboutMe';
import PlayerCardDetails from '../../userCardDetails/UserCardDetails';
import FooterSmall from '../../utilities/footerSmall/FooterSmall';
import './MyProfile.scss';
import UserGamesList from '../userGamesList/UserGamesList';
import Layout from '../../layout/Layout';

const MyProfile = () => {
	const { user } = useAuthContext();

	return (
		<Layout withHeader={true}>
			<div className="MyProfile content content--wrapper">
				<aside className="MyProfile__aside content__aside">
					<PlayerCardDetails user={user} />
					<FooterSmall />
				</aside>

				<main className="MyProfile__info content__main">
					<AboutMe user={user} />
					<UserGamesList user={user} />
				</main>
			</div>
		</Layout>
	);
};

export default MyProfile;

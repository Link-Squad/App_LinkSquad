import React from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import SocialLinks from '../utilities/socialLinks/SocialLinks';
import LogoutLink from '../utilities/logoutLink/LogoutLink';
import './UserCardDetails.scss';
import FriendButton from '../utilities/friendButton/FriendButton';

const UserCardDetails = ({ user }) => {
	return (
		<div className="UserCardDetails card">
			<img
				src={user.avatar}
				alt={`avatar of ${user.name}`}
				className="UserCardDetails__avatar"
			/>
			<article className="UserCardDetails__body">
				<h2 className="UserCardDetails__title title">
					{user.username}
				</h2>
				<p className="UserCardDetails__team">
					{user.team || 'No team'}
				</p>
				<SocialLinks social={user.social} />
				<ul className="UserCardDetails__languages">
					{user.languages?.map(language => (
						<li className="language-box" key={language}>{language}</li>
					))}
				</ul>
				<div className="UserCardDetails__games">
					{user.userGames?.map(userGame => (
						<img
							src={userGame.game.icon}
							alt={`icon of ${userGame.game.name}`}
							key={userGame.id}
						/>
					))}
				</div>
				{/* TODO: check myProfile design to see if it needs to be separate component */}
				{user.id === useAuthContext().user.id ? (
					<LogoutLink />
				) : (
					<FriendButton friendId={user.id} />
				)}
			</article>
		</div>
	);
};

export default UserCardDetails;

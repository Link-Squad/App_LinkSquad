import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "../utilities/socialLinks/SocialLinks";
import "./UserCardLong.scss";

const UserCardLong = ({ user }) => {
	return (
		<div className="UserCardLong card">
			<img
				src={user.img}
				alt="user avatar"
				className="UserCardLong__avatar"
			/>
			<article className="UserCardLong__body">
				<div className="UserCardLong__header">
					<h2 className="UserCardLong__title title">
						{user.username}
					</h2>
					<SocialLinks social={user.social} /> 
				</div>
				<div className="UserCardLong__games-wrapper">
					{user.userGames?.map(game => (
						<img
							src={game.game.icon}
							alt={`icon of ${game.name}`}
							className="UserCardLong__game-icon"
						/>
					))}
				</div>

				<div className="UserCardLong__footer">
					<ul className="PlayerCard__languages-wrapper">
						{user.languages?.map(language => (
							<li className="language-box">{language}</li>
						))}
					</ul>
                    <Link to={`/user/${user.id}`}  className="button--fake button--primary">View Profile </Link>
				</div>
			</article>
		</div>
	);
};

export default UserCardLong;

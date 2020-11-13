import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "../utilities/socialLinks/SocialLinks";
import "./PlayerCardLong.scss";

const PlayerCardLong = ({ player }) => {
	return (
		<div className="PlayerCardLong card">
			<img
				src={player.img}
				alt="player avatar"
				className="PlayerCardLong__avatar"
			/>
			<article className="PlayerCardLong__body">
				<div className="PlayerCardLong__header">
					<h2 className="PlayerCardLong__title title">
						{player.username}
					</h2>
					<SocialLinks social={player.social} /> 
				</div>
				<div className="PlayerCardLong__games-wrapper">
					{player.userGames?.map(game => (
						<img
							src={game.game.icon}
							alt={`icon of ${game.name}`}
							className="PlayerCardLong__game-icon"
						/>
					))}
				</div>

				<div className="PlayerCardLong__footer">
					<ul className="PlayerCard__languages-wrapper">
						{player.languages?.map(language => (
							<li className="language-box">{language}</li>
						))}
					</ul>
                    <Link to={`/user/${player.id}`}  className="button--fake button--primary">View Profile </Link>
				</div>
			</article>
		</div>
	);
};

export default PlayerCardLong;

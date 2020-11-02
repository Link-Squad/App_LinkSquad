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
					{player.social ? <SocialLinks social={player.social} /> : undefined}
				</div>
				<div className="PlayerCardLong__games-wrapper">
					{player.games?.map(game => (
						<img
							src={game.logo}
							alt="game that the player plays"
							className="PlayerCardLong__game-logo"
						/>
					))}
				</div>

				<div className="PlayerCardLong__footer">
					<div className="PlayerCard__languages-wrapper">
						{player.languages?.map(language => (
							<span className="language-box">{language}</span>
						))}
					</div>
                    <Link to={`/users/${player.id}`}  className="button--fake button--primary">View Profile </Link>
				</div>
			</article>
		</div>
	);
};

export default PlayerCardLong;

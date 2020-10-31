import { faDiscord, faTwitch, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./PlayerOverview.scss";

const PlayerOverview = ({ player }) => {
	return (
		<div className="PlayerOverview card">
			<img src={player.img} alt="avatar of the player" className="PlayerOverview__avatar" />
			<article className="PlayerOverview__body">
				<p className="PlayerOverview__name title">{player.username}</p>
				<div className="PlayerOverview__social">
					<Link to={player.social.youtube}>
						<FontAwesomeIcon icon={faTwitter} className="PlayerOverview__icon icon"/>
						<FontAwesomeIcon icon={faDiscord} className="PlayerOverview__icon icon"/>
						<FontAwesomeIcon icon={faTwitch} className="PlayerOverview__icon icon"/>
						<FontAwesomeIcon icon={faYoutube} className="PlayerOverview__icon icon"/>
					</Link>
				</div>
				<Link
					to={`/user/${player.id}`}
					className="PlayerOverview__profile-link button--fake button--primary"
				>
					View Profile
				</Link>
			</article>
		</div>
	);
};

export default PlayerOverview;

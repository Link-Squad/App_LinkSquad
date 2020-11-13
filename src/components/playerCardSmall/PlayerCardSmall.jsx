import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "../utilities/socialLinks/SocialLinks";
import "./PlayerCardSmall.scss";

const PlayerCardSmall = ({ player }) => {
	return (
		<div className="PlayerCardSmall card">
			<img
				src={player.img}
				alt="avatar of the player"
				className="PlayerCardSmall__avatar"
			/>
			<article className="PlayerCardSmall__body">
				<h2 className="PlayerCardSmall__name title">
					{player.username}
				</h2>
				<SocialLinks social={player.social} />
				<Link
					to={`/user/${player.id}`}
					className="PlayerCardSmall__profile-link button--fake button--primary"
				>
					View Profile
				</Link>
			</article>
		</div>
	);
};

export default PlayerCardSmall;

import React from "react";
import {
	faDiscord,
	faTwitch,
	faTwitter,
	faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SocialLinks.scss";

const SocialLinks = ({ social }) => {
	console.log(social);

	return (
		<div className="SocialLinks">
			<a href={social.twitter} className="SocialLinks__icon">
				<FontAwesomeIcon icon={faTwitter} className="icon" />
			</a>
			<a href={social.discord} className="SocialLinks__icon">
				<FontAwesomeIcon icon={faDiscord} className="icon" />
			</a>
			<a href={social.twitch} className="SocialLinks__icon">
				<FontAwesomeIcon icon={faTwitch} className="icon" />
			</a>
			<a href={social.youtube} className="SocialLinks__icon">
				<FontAwesomeIcon icon={faYoutube} className="icon" />
			</a>
		</div>
	);
};

export default SocialLinks;

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

	return (
		<ul className="SocialLinks">
			<a href={`https://${social.twitter}`} className="SocialLinks__icon">
				<FontAwesomeIcon icon={faTwitter} className="icon" />
			</a>
			<a href={`https://${social.discord}`} className="SocialLinks__icon">
				<FontAwesomeIcon icon={faDiscord} className="icon" />
			</a>
			<a href={`https://${social.twitch}`} className="SocialLinks__icon">
				<FontAwesomeIcon icon={faTwitch} className="icon" />
			</a>
			<a href={`https://${social.youtube}`} className="SocialLinks__icon">
				<FontAwesomeIcon icon={faYoutube} className="icon" />
			</a>
		</ul>
	);
};

export default SocialLinks;

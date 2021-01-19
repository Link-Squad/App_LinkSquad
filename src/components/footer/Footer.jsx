import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from '../utilities/socialLinks/SocialLinks';
import './Footer.scss';

const Footer = () => {
	return (
		<footer className="Footer">
			<div className="Footer__content content">
				<nav className="Footer__nav">
					<Link to="/info/conditions">Terms and conditions</Link>
					<Link to="/info/legal">Legal</Link>
					<Link to="/info/privacy">Privacy policy</Link>
					<Link to="/info/cookies">Cookie policy</Link>
					<Link to="/info/help">Help</Link>
				</nav>

				<div className="Footer__info">
					<span>PIP Corporation &#169; 2020</span>
					<SocialLinks social={{ twitter: 'www.twitter.com', youtube: 'www.youtube.com', twitch: 'www.twitch.com', discord: 'www.discord.com' }} />
				</div>
			</div>
		</footer>
	);
};

export default Footer;

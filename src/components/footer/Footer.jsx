import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from '../utilities/socialLinks/SocialLinks';
import './Footer.scss';

const Footer = () => {
	const [isOpen, setIsOpen] = useState({ nav: false, social: false });

	const toggleDropdown = ({ target }) => {
		const elementName = target.getAttribute('aria-controls');

		setIsOpen(prev => {
			return {
				...prev,
				[elementName]: !prev[elementName]
			};
		});
	};

	return (
		<footer className="Footer">
			<div className="Footer__content content">
				<button
					aria-expanded={isOpen.nav}
					aria-controls="nav"
					className="Footer__btn button--fake button--fake-alt nav-toggle"
					onClick={toggleDropdown}
					onBlur={toggleDropdown}
				>
					More
				</button>
				<nav className="Footer__nav dropdown" id="nav">
					<Link to="/info/conditions">Terms and conditions</Link>
					<Link to="/info/legal">Legal</Link>
					<Link to="/info/privacy">Privacy policy</Link>
					<Link to="/info/cookies">Cookie policy</Link>
					<Link to="/info/help">Help</Link>
				</nav>

				<span>PIP Corporation &#169; 2020</span>
				<button
					aria-controls="social"
					aria-expanded={isOpen.social}
					className="Footer__btn button--fake button--fake-alt social-toggle"
					onClick={toggleDropdown}
					onBlur={toggleDropdown}
				>
					Social
				</button>
				<SocialLinks
					social={{
						twitter: 'www.twitter.com',
						youtube: 'www.youtube.com',
						twitch: 'www.twitch.com',
						discord: 'www.discord.com'
					}}
					id="social"
				/>
			</div>
		</footer>
	);
};

export default Footer;

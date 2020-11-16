import React from 'react';
import {Link} from 'react-router-dom';
import './FooterSmall.scss';

const FooterSmall = () => (
	<nav className="FooterSmall">
		<Link to="/info/conditions" className="FooterSmall__link">Terms and conditions</Link>
		<Link to="/info/legal" className="FooterSmall__link">Legal</Link>
		<Link to="/info/privacy" className="FooterSmall__link">Privacy policy</Link>
		<Link to="/info/cookies" className="FooterSmall__link">Cookie policy</Link>
		<Link to="/info/help" className="FooterSmall__link">Help</Link>
	</nav>
);

export default FooterSmall
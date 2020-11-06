import React from 'react';
import {Link} from 'react-router-dom';
import './FooterSmall.scss';

const FooterSmall = () => (
	<nav className="Results__left-side__nav">
		<Link to="/info/conditions">Terms and conditions</Link>
		<Link to="/info/legal">Legal</Link>
		<Link to="/info/privacy">Privacy policy</Link>
		<Link to="/info/cookies">Cookie policy</Link>
		<Link to="/info/help">Help</Link>
	</nav>
);

export default FooterSmall
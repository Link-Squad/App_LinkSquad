import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getOffers } from '../../../../services/api.service';

const AuthNavbar = () => {
	const [results, setResults] = useState();

	useEffect(() => {
		getOffers().then(offers => {
			setResults([[], [], offers]);
		});
	}, []);
	return (
		<nav className="Navbar">
			<Link to={{ pathname: '/results', state: results }}>
				Team offers
			</Link>
			<Link to={{ pathname: '/profile' }}>Profile</Link>
		</nav>
	);
};

export default AuthNavbar;

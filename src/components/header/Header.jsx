import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navBar/Navbar';
import SearchBar from '../utilities/searchBar/Searchbar';
import { useAuthContext } from '../../contexts/AuthContext';
import './Header.scss';

const Header = () => {
	const { user } = useAuthContext();
	return (
		<header className="Header">
			<div className="Header__content content">
				<Link className="Header__logo-wrapper" to="/">
					<img
						src="/logo.png"
						alt="linksquad logo"
						className="Header__logo"
					/>
				</Link>

				{user && <SearchBar />}
				<NavBar />
			</div>
		</header>
	);
};

export default Header;

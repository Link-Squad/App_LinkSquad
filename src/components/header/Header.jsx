import React from 'react';
import NavBar from './navBar/Navbar';
import SearchBar from '../utilities/searchBar/searchbar';
import './Header.scss';
import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {
	const {user} = useAuthContext()
	return (
		<header className="Header">
			<div className="Header__content">
				<img src="logo.png" alt="linksquad logo" />
				{user && <SearchBar />}
				<NavBar />
			</div>
		</header>
	);
};

export default Header;

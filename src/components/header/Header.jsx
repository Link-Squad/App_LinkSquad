import React from 'react';
import NavBar from './navBar/navbar';
import SearchBar from './searchBar/searchbar';
import './Header.scss';

const Header = () => {
	return (
		<header className="Header">
			<div className="Header__content">
				<img src="logo.png" alt="linksquad logo" />
				<SearchBar />
				<NavBar />
			</div>
		</header>
	);
};

export default Header;

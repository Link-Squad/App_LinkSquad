import React from 'react';
import NavBar from './navBar/Navbar';
import SearchBar from '../utilities/searchBar/Searchbar';
import { useAuthContext } from '../../contexts/AuthContext';
import logo from './logo.png'
import './Header.scss';

const Header = () => {
	const {user} = useAuthContext()
	return (
		<header className="Header">
			<div className="Header__content">
				<img src={logo} alt="linksquad logo" />
				{user && <SearchBar />}
				<NavBar />
			</div>
		</header>
	);
};

export default Header;

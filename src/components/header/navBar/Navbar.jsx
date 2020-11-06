import React from 'react';
import { useAuthContext } from '../../../contexts/AuthContext';
import AuthNavbar from './authNavbar/AuthNavbar';
import UnauthNavbar from './unauthNavbar/UnauthNavbar';
import './Navbar.scss';

const NavBar = () => {
	const { user } = useAuthContext();

	const navbar = user ? <AuthNavbar/> : <UnauthNavbar />;

	return navbar;
};

export default NavBar;

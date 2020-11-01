import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import SearchBar from './searchBar/searchbar';

const NavBar = () => {
  return (
    <nav className='Navbar'>
      <div className='Navbar__Container'>
        <img src='logo.png' alt='linksquad logo'/>
        <SearchBar />
        <div>
          <Link to='/login'>Home</Link>
          <Link to='/'>Vacants</Link>
          <Link to='/profile'>Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

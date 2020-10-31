import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import SearchBar from './searchBar/searchbar';

const NavBar = () => {
  return (
    <navbar className='Navbar'>
      <div className='Navbar__Container'>
        <h1>LinkSquad Logo</h1>
        <SearchBar />
        <div>
          <Link to='/login'>Home</Link>
          <Link to='/'>Vacants</Link>
          <Link to='/profile'>Profile</Link>
        </div>
      </div>
    </navbar>
  );
};

export default NavBar;

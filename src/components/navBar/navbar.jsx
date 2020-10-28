import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import SearchBar from './searchBar/searchbar';

const NavBar = () => {
  return (
    <div className='Navbar'>
      <div className='Navbar__Container'>
        <h1>LinkSquad Logo</h1>
        <SearchBar />
        <div>
          <Link to='/'>Inicio</Link>
          <Link to='/'>Vacantes</Link>
          <Link to='/'>Mi Perfil</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

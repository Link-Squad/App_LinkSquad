import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import SearchBar from './searchBar/searchbar';

const NavBar = () => {
  return (
    <div className='Navbar'>
    <SearchBar/>
      <div>
        <Link>Inicio</Link>
        <Link>Vacantes</Link>
        <Link>Mi Perfil</Link>
      </div>
    </div>
  );
};

export default NavBar;

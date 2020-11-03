import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const NavBar = () => {
  return (
    <nav className='Navbar'>
          <Link to='/login'>Home</Link>
          <Link to='/'>Vacants</Link>
          <Link to='/profile'>Profile</Link>
    </nav>
  );
};

export default NavBar;
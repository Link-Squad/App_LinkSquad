import React from 'react';
import { Link } from 'react-router-dom';

const UnauthNavbar = () => (
    <nav className='Navbar'>
          <Link to='/landing'>About</Link>
          <Link to='/contact'>Contact Us</Link>
          <Link to='/login'>Login</Link>
    </nav>
)

export default UnauthNavbar
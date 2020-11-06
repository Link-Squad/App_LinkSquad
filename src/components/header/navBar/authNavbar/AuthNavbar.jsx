import React from 'react';
import { Link } from 'react-router-dom';

const AuthNavbar = () => (
    <nav className='Navbar'>
          <Link to='/'>Home</Link>
          <Link to='/offers'>Team offers</Link>
          <Link to='/profile'>Profile</Link>
    </nav>
)

export default AuthNavbar
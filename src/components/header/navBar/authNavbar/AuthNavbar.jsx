import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../../contexts/AuthContext';



const AuthNavbar = () => {
  const authContext = useAuthContext();
  const currentUser = authContext.user;
  return (
    <nav className='Navbar'>
      <Link to='/'>Home</Link>
      <Link to='/offers'>Team offers</Link>
      <Link to={{ pathname: `/profile/${currentUser.id}` }}>Profile</Link>
    </nav>
  );
};

export default AuthNavbar;

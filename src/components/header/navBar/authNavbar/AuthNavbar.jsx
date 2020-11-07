import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../../contexts/AuthContext';
import { getOffers } from '../../../../services/api.service';



const AuthNavbar = () => {
  const authContext = useAuthContext();
  const currentUser = authContext.user;
  const [results, setResults] = useState();

  useEffect(()=>{
    getOffers()
    .then(offers => {
      setResults([[],[],offers])
    })
  },[])
  return (
    <nav className='Navbar'>
      <Link to='/'>Home</Link>
      <Link to={{ pathname: '/results', query: { results } }}>Team offers</Link>
      <Link to={{ pathname: `/profile/${currentUser.id}` }}>Profile</Link>
    </nav>
  );
};

export default AuthNavbar;

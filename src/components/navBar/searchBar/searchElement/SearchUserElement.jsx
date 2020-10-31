import React from 'react';
import './SearchElement.scss';

const SearchUserElement = ({ user }) => {
  return (
    <div className='SearchElement'>
      <img src={user.img} alt='user logo' />
      <div className='TextContainer'>
        <p>{user.username}</p>
      </div>
    </div>
  );
};

export default SearchUserElement;
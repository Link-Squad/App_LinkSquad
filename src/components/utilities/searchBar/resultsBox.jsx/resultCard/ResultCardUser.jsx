import React from 'react';
import './ResultCard.scss';

const ResultCardUser = ({ user, handleClick }) => {
  const mouseDown = () =>{
    handleClick(user.id);
  }

  return (
    <div className='ResultCard' onMouseDown={mouseDown}>
      <img className='ResultCard__img' src={user.avatar} alt='user logo' />
      <div className='ResultCard__text-container'>
        <p className="ResultCard__title">{user.username}</p>
      </div>
    </div>
  );
};

export default ResultCardUser;
import React from 'react';
import './SearchElement.scss';

const SearchElement = ({ game }) => {
  //console.log(game);
  return (
    <div className='SearchElement'>
      <img src='./MGX_logo.png' alt='movistar gaming experience logo' />
      <div className='TextContainer'>
        <p>{game.name.charAt(0).toUpperCase() + game.name.slice(1)}</p>
        <p>Genre {game.genre}</p>
      </div>
    </div>
  );
};

export default SearchElement;

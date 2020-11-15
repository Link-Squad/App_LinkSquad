import React from 'react';
import './SearchElement.scss';

const SearchGameElement = ({ game }) => {
  return (
    <div className='SearchElement'>
      <img className='SearchElement__img' src={game.img} alt={`${game.name} logo`} />
      <div className='TextContainer'>
        <p>{game.name.charAt(0).toUpperCase() + game.name.slice(1)}</p>
        <p>Genre {game.genre}</p>
      </div>
    </div>
  );
};

export default SearchGameElement;

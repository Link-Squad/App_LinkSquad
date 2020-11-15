import React from 'react';
import './ResultCard.scss';

const ResultCardGame = ({ game }) => {
  return (
    <div className='SearchElement'>
      <img className='SearchElement__img' src={game.icon} alt={`${game.name} icon`} />
      <div className='TextContainer'>
        <p>{game.name}</p>
        <p>Genre {game.genre}</p>
      </div>
    </div>
  );
};

export default ResultCardGame;

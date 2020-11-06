import React from 'react';
import PlayerCardLong from '../../playerCardLong/PlayerCardLong';
import './ResultCard.scss';
import GameCardLong from '../../gameCardLong/GameCardLong';

const ResultCard = ({ game, user }) => {
  console.log({ game, user });
  return (
    <div className='ResultCard'>
      {game ? <GameCardLong game={game} /> : undefined}
      {user ? <PlayerCardLong player={user} /> : undefined}      
    </div>
  );
};

export default ResultCard;

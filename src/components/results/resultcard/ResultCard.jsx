import React from 'react';
import PlayerCardLong from '../../playerCardLong/PlayerCardLong';
import SearchGameElement from '../../header/searchBar/searchElement/SearchGameElement';
import './ResultCard.scss';

const ResultCard = ({ game, user }) => {
  console.log({ game, user });
  return (
    <div className='ResultCard'>
      {game ? <SearchGameElement game={game} /> : undefined}
      {user ? <PlayerCardLong player={user} /> : undefined}
      
    </div>
  );
};

export default ResultCard;

import React from 'react';
import SearchGameElement from '../../navBar/searchBar/searchElement/SearchGameElement';
import PlayerCardLong from '../../playerCardLong/PlayerCardLong';
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

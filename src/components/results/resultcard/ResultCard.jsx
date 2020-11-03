import React from 'react';
import SearchGameElement from '../../header/searchBar/searchElement/SearchGameElement';
import SearchUserElement from '../../header/searchBar/searchElement/SearchUserElement';
import './ResultCard.scss';
const ResultCard = ({ game, user }) => {
  console.log({ game, user });
  return (
    <div className='ResultCard'>
      {game ? <SearchGameElement game={game} /> : undefined}
      {user ? <SearchUserElement user={user} /> : undefined}
    </div>
  );
};

export default ResultCard;

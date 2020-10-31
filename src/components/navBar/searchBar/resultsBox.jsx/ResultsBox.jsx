import React from 'react';
import Button from '../../../utilities/button/Button';
import SearchGameElement from '../searchElement/SearchGameElement';
import SearchUserElement from '../searchElement/SearchUserElement';
import './ResultsBox.scss';

const ResultsBox = ({ results }) => {
  const boxHeight = results.length * 60 + 60;
  const gameResults = results[0];
  const userResults = results[1];
  if (gameResults.length > 0 || userResults.length > 0) {
    //const eventResults = results[2];
    return (
      <div
        className='ResultsBox'
        style={{ height: `${boxHeight.toString()}px` }}
      >
        <hr className='grow'></hr>
        {gameResults
          ? gameResults.map((el, i) => <SearchGameElement key={i} game={el} />)
          : undefined}
        {userResults
          ? userResults.map((el, i) => <SearchUserElement key={i} user={el} />)
          : undefined}
        {results ? <Button text='Ver todos los resultados' /> : undefined}
      </div>
    );
  } else {
    return (
      <div className='ResultsBox-NoResults'>
        <hr></hr>
        <p>No Results</p>
      </div>
    );
  }
};

export default ResultsBox;

import React from 'react';
import { Link } from 'react-router-dom';
import SearchGameElement from '../searchElement/SearchGameElement';
import SearchUserElement from '../searchElement/SearchUserElement';
import './ResultsBox.scss';

const ResultsBox = ({ results, onClickShowResults }) => {
  const gameResults = results[0];
  const userResults = results[1];
  //const boxHeight = (gameResults.length + userResults.length) * 60 + 60;
  if (gameResults.length > 0 || userResults.length > 0) {
    //const eventResults = results[2];
    return (
      <div
        className='ResultsBox'
        //style={{ maxHeight: `${boxHeight.toString()}px` }}
      >
        <hr className='grow'></hr>
        {gameResults
          ? gameResults.map((el, i) => <SearchGameElement key={i} game={el} />)
          : undefined}
        {userResults
          ? userResults.map((el, i) => <SearchUserElement key={i} user={el} />)
          : undefined}
        {results ? <Link to={{pathname: '/results',query: {results}}} className='button--primary button--fake' onClick={onClickShowResults}>Show All Results</Link> : undefined}
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

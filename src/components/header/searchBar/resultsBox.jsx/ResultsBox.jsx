import React, { useEffect } from 'react';
import { useRef } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import SearchGameElement from '../searchElement/SearchGameElement';
import SearchUserElement from '../searchElement/SearchUserElement';
import './ResultsBox.scss';

const ResultsBox = ({ results, onClickShowResults, onClickOutsideBox }) => {
  const userResults = results[1].slice(0,2);
  const gameResults = userResults.length < 2 ?results[0].slice(0,2) : [];
  const history = useHistory();

  const handleUserClick = (id) => {
    history.push(`/profile/${id}`);
  }

  useEffect(() => {

    document.addEventListener('click', onClickOutsideBox);

    return () => {
      document.removeEventListener('click', onClickOutsideBox);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (gameResults.length > 0 || userResults.length > 0) {
    return (
      <div className='ResultsBox' id='ResultsBox'>
        <hr className='grow'></hr>
        {gameResults
          ? gameResults.map((el, i) => <SearchGameElement key={i} game={el} />)
          : undefined}
        {userResults
          ? userResults.map((el, i) => <SearchUserElement key={i} user={el} handleClick={handleUserClick}/>)
          : undefined}
          {console.log(results)}
        {results ? (
          <Link
            to={{ pathname: '/results', query: { results } }}
            className='button--primary button--fake'
            onClick={onClickShowResults}
          >
            Show All Results
          </Link>
        ) : undefined}
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

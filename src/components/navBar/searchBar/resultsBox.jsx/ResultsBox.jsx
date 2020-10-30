import React from 'react';
import Button from '../../../utilities/button/Button';
import SearchElement from '../searchElement/SearchElement';
import './ResultsBox.scss';

const ResultsBox = ({ results }) => {
  if (results.length > 0) {
    const boxHeight = results.length * 60 + 60;
    return (
      <div
        className='ResultsBox'
        style={{ height: `${boxHeight.toString()}px` }}
      >
        {results ? results.map((el) => <SearchElement game={el} />) : undefined}
        {results ? <Button text='Ver todos los resultados' /> : undefined}
      </div>
    );
  } else {
    return (
      <div className='ResultsBox-NoResults'>
        No Results
      </div>
    );
  }
};

export default ResultsBox;

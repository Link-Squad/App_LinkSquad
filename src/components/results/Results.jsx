import React from 'react';
import { Redirect } from 'react-router-dom';
import UserCard from '../userCard/UserCard';
import FilterBox from './filter/FilterBox';
import ResultCard from './resultcard/ResultCard';
import './Results.scss';
const Results = (props) => {
  if (props.location.query === undefined) {
    return <Redirect to='/' />;
  }
  const results = props.location.query.results;
  console.log(results);
  const gameResults = results[0];
  const userResults = results[1];

  return (
    <div className='Results'>
      <div className='Results__left-side'>
        <UserCard
          user={{
            username: 'josete',
            friends: 58,
            views: 401,
            id: 324234234,
            img: 'https://cdn141.picsart.com/275574803034201.jpg'
          }}
        />
        <FilterBox />
        <p>Legal Stuff</p>
      </div>
      <div className='Results__content'>
        {gameResults.length > 0
          ? gameResults.map((el, i) => <ResultCard key={i} game={el} />)
          : undefined}
        {userResults.length > 0
          ? userResults.map((el, i) => <ResultCard key={i} user={el} />)
          : undefined}
      </div>
    </div>
  );
};

export default Results;

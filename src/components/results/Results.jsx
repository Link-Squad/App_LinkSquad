import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import UserCard from '../userCard/UserCard';
import FilterBox from './filter/FilterBox';
import ResultCard from './resultcard/ResultCard';
import './Results.scss';
const Results = (props) => {
  const [filters, setFilters] = useState();
  const [filteredResults, setFilteredResults] = useState(
    props.location.query.results
  );
  console.log(filteredResults);
  const ApplyFilter = (filters) => {
    setFilters(filters);
  };

  useEffect(() => {
    console.log(filters === undefined);
    const tempFilteredGameResults =
      filters === undefined || filters.games === undefined
        ? props.location.query.results[0]
        : [];
    const tempFilteredUserResults =
      filters === undefined || filters.users === undefined
        ? props.location.query.results[1]
        : [];
    console.log([tempFilteredGameResults, tempFilteredUserResults]);
    setFilteredResults([tempFilteredGameResults, tempFilteredUserResults]);
  }, [filters]);

  if (props.location.query?.results === undefined) {
    return <Redirect to='/' />;
  } else {
    return (
      <div className='Results'>
        <div className='Results__left-side'>
          <h2>Filter:</h2>
          <FilterBox />
          <hr></hr>
          <nav className='Results__left-side__nav'>
            <Link to='/info/conditions'>Terms and conditions</Link>
            <Link to='/info/legal'>Legal</Link>
            <Link to='/info/privacy'>Privacy policy</Link>
            <Link to='/info/cookies'>Cookie policy</Link>
            <Link to='/info/help'>Help</Link>
          </nav>
          <div className='Results__left-side__info'>
            <span>PIP Corporation &#169; 2020</span>
          </div>
        </div>
        <div className='Results__content'>
          {filteredResults[0].length > 0
            ? filteredResults[0].map((el, i) => (
                <ResultCard key={i} game={el} />
              ))
            : undefined}
          {filteredResults[1].length > 0
            ? filteredResults[1].map((el, i) => (
                <ResultCard key={i} user={el} />
              ))
            : undefined}
        </div>
      </div>
    );
  }
};

export default Results;

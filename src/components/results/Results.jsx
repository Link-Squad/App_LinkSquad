import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import OfferCard from '../offerCard/OfferCard';
import UserCard from '../userCard/UserCard';
import FilterBox from './filter/FilterBox';
import ResultCard from './resultcard/ResultCard';
import './Results.scss';
const Results = (props) => {
  const [filters, setFilters] = useState();
  const [filteredResults, setFilteredResults] = useState(
    props.location.query?.results
  );
  const ApplyFilter = (filters) => {
    setFilters(filters);
  };

  useEffect(() => {
    console.log(filters);
    const query = props.location.query;
    if (query && query.results) {
      const gamesResults = query.results[0];
      const usersResults = query.results[1];
      const offerResults = query.results[2];
      const tempFilteredGameResults =
        filters === undefined || filters.Games === true ? gamesResults : [];
      const tempFilteredUserResults =
        filters === undefined || filters.Players === true
          ? usersResults
          : [];
      const tempFilteredVacantsResults =
        filters === undefined || filters.Vacants === true
          ? offerResults
          : [];
      console.log([
        tempFilteredGameResults,
        tempFilteredUserResults,
        tempFilteredVacantsResults
      ]);
      setFilteredResults([
        tempFilteredGameResults,
        tempFilteredUserResults,
        tempFilteredVacantsResults
      ]);
    }
  }, [filters, props.location.query?.results]);

  if (!props.location.query || props.location.query?.results === undefined) {
    return <Redirect to='/' />;
  } else {
    return (
      <div className='Results'>
        <div className='Results__left-side'>
          <h2 className='Results__left-side__title'>Filter:</h2>
          <FilterBox onApplyFilter={ApplyFilter} />
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
          {filteredResults[2].length > 0
            ? filteredResults[2].map((offer, i) => (
              <OfferCard offer={offer} key={offer.id}/>
              ))
            : undefined}
        </div>
      </div>
    );
  }
};

export default Results;

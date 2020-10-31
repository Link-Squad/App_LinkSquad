import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
import { search } from '../../../services/api.service.js';
import './searchbar.scss';
import ResultsBox from './resultsBox.jsx/ResultsBox.jsx';
const useSearch = () => {
  const [value, setValue] = useState('');
  const [results, setResults] = useState('');
  const intervalId = useRef();
  const onChange = (e) => {
    setResults('');
    setValue(e.target.value);
  };

  useEffect(() => {
    window.clearTimeout(intervalId.current);

    if (value.length <= 3) {
      return;
    }

    intervalId.current = window.setTimeout(() => {
      search(value).then((res) => {
        console.log(res);
        setResults(res);
      });
    }, 1500);
  }, [value]);

  return { value, onChange, results };
};

const SearchBar = () => {
  const { value, onChange, results } = useSearch();
  return (
    <div className='SearchBar'>
      <FontAwesomeIcon icon={faSearch} />
      <input
        type='test'
        onChange={onChange}
        value={value}
        className='form-control'
        placeholder=''
      />
      {results ? <ResultsBox results={results.flat()} /> : undefined}
    </div>
  );
};

export default SearchBar;
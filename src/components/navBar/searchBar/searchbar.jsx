import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
import { search } from '../../../services/api.service.js';
import './searchbar.scss';
const useSearch = () => {
  const [value, setValue] = useState('');
  const intervalId = useRef();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    window.clearTimeout(intervalId.current);

    if (value.length <= 3) {
      return;
    }

    intervalId.current = window.setTimeout(() => {
      search(value);
    }, 2000);
  }, [value]);

  return [value, onChange];
};

const SearchBar = () => {
  const [value, onChange] = useSearch();

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

      {value}
    </div>
  );
};

export default SearchBar;

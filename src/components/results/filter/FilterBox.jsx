import React, { useRef } from 'react';
import './FilterBox.scss';
import Button from '../../utilities/button/Button';
import DropDownFilter from './dropDownFilter/DropDownFilter';

const FilterBox = ({ onApplyFilter }) => {
  const filters = useRef({});
  const handleChange = (e) => {
    const name = e.target.name;

    if(filters.current === undefined) {
      filters.current = {};
    }

    if (filters.current?.hasOwnProperty(`${name}`) === false) {
      filters.current[name] = true;
      console.log(filters.current)
    } else {
      delete filters.current[name];
    }
    if(Object.keys(filters.current).length === 0) {
      console.log(' 0 length filters')
      filters.current = undefined;
    }
  };

  const handleButtonClick = (e) => {
    onApplyFilter(filters.current);
  };

  return (
    <div className='FilterBox'>
      <DropDownFilter
        text='What are you looking for?'
        handleChange={handleChange}
        options={['Players', 'Games', 'Vacants']}
      />
      <hr></hr>

      <DropDownFilter
        text='What platform?'
        handleChange={handleChange}
        options={['PC', 'Playstation 4', 'XBOX One', 'Switch']}
      />
      <hr></hr>

      <DropDownFilter
        text='What team role?'
        handleChange={handleChange}
        options={['Tank', 'Support', 'Damage', 'Jungle']}
      />

      <Button
        className='Button--primary'
        text='Apply Filter'
        handleClick={handleButtonClick}
      />
    </div>
  );
};

export default FilterBox;

import React, { useRef } from 'react';
import './FilterBox.scss';
import Button from '../../utilities/button/Button';
import DropDownFilter from './dropDownFilter/DropDownFilter';

const FilterBox = ({ OnApplyFilter }) => {
  const filters = useRef({});
  const handleChange = (e) => {
    console.log(e.target.name);
    filters.current.hasOwnProperty(`${e.target.name}`)
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
        handleClick={OnApplyFilter}
      />
    </div>
  );
};

export default FilterBox;

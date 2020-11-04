import React from 'react';
import './FilterBox.scss';
import Button from '../../utilities/button/Button';
import DropDownFilter from './dropDownFilter/DropDownFilter';

const FilterBox = () => {
  const handleChange = () => {};

  return (
    <div className='FilterBox'>
      <DropDownFilter
        text='What are you looking for?'
        handleChange={handleChange}
        options={['Players', 'Games', 'Vacants', 'News']}
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

      <Button className='Button--primary' text='Apply Filter' />
    </div>
  );
};

export default FilterBox;

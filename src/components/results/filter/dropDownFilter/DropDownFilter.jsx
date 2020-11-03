import React, { useState } from 'react';
import './DropDownFilter.scss';
import Checkbox from '../../../utilities/checkbox/Checkbox';

const DropDownFilter = ({ text,handleChange, value}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className='DropDownFilter' onClick={handleClick}>
      <p>{text}</p>
      {open === true ? (
        <div className='DropDownFilter_open_container'>
          <Checkbox handleChange={handleChange} value={value} text='Players'/>
        </div>
      ) : undefined}
      <hr></hr>
    </div>
  );
};

export default DropDownFilter;

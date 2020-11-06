import React, { useState } from 'react';
import './DropDownFilter.scss';
import Checkbox from '../../../utilities/checkbox/Checkbox';

const DropDownFilter = ({ text, handleChange, options }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className='DropDownFilter'>
      <p onClick={handleClick}>{text}</p>
      {open === true ? (
        <div className='DropDownFilter_open_container'>
          {options.map((element) => {
            return (
              <Checkbox
                name={element}
                handleChange={handleChange}
                value={false}
                text={element}
              />
            );
          })}
        </div>
      ) : undefined}
    </div>
  );
};

export default DropDownFilter;

import React, { useState } from 'react';

const DropDownFilter = ({ text }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div className='DropDown' onClick={handleClick}>
      <h6>{text}</h6>
      {open === true ? (
        <div className='DropDown_open_container'></div>
      ) : undefined}
      <hr></hr>
    </div>
  );
};

export default DropDownFilter;

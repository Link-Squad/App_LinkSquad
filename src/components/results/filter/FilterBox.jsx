import React from 'react';
import './FilterBox.scss'
import Button from '../../utilities/button/Button'
import DropDownFilter from './dropDownFilter/DropDownFilter';

const FilterBox = () => {
    return (
        <div className='FilterBox'>
            <DropDownFilter text='What are you looking for?'/>
            <Button className='Button--primary' text='Apply Filter'/>
        </div>
    )
}

export default FilterBox;
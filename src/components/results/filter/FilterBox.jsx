import React from 'react';
import './FilterBox.scss'
import Button from '../../utilities/button/Button'

const FilterBox = () => {
    return (
        <div className='FilterBox'>
            <p>Filter Box</p>
            <Button className='Button--primary' text='Apply Filter'/>
        </div>
    )
}

export default FilterBox;
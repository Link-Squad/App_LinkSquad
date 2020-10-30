import React from 'react';
import './Checkbox.scss';

const Checkbox = ({name, value, handleChange}) => (
    <div className="Checkbox">
			<input type="checkbox" className="Checkbox__input" id="Checkbox__input" name={name} value={value} onChange={handleChange}></input>
			<label htmlFor="Checkbox__input" className="Checkbox__label"></label>
    </div>
)

export default Checkbox
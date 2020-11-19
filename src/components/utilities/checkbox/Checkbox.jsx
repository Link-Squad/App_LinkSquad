import React from 'react';
import './Checkbox.scss';

const Checkbox = ({name, value, handleChange, text, isChecked}) => (
    <div className="Checkbox">
			<input type="checkbox" className="Checkbox__input" id={`Checkbox__input_${value}`} name={name} value={value} checked={isChecked} onChange={handleChange}></input>
			<label htmlFor={`Checkbox__input_${value}`} className="Checkbox__label">{text}</label>
    </div>
)

export default Checkbox
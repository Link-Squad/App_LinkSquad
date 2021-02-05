import React from 'react';
import './RadioButton.scss';

const RadioButton = ({ name, value, handleClick }) => {
	return (
		<div className="Checkbox">
			<input
				type="radio"
				name={name}
				value={value}
				className="RadioButton__input Checkbox__input"
				onClick={handleClick}
                id={`Radio__input-${value}`}
			></input>
			<label className="Checkbox__label" htmlFor={`Radio__input-${value}`}>{value}</label>
		</div>
	);
};

export default RadioButton;

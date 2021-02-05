import React from 'react';
import RadioButton from  './RadioButton/RadioButton'
import './RadioGroup.scss'

const RadioGroup = ({ name, values, handleClick, text }) => {
	const radioInputs = values.map(value =>
		<RadioButton name={name} value={value} handleClick={handleClick}/>
	);
	return (
		<fieldset className="RadioGroup">
			<legend className="RadioGroup__legend">{text || name}</legend>
			{radioInputs}
		</fieldset>
	);
};

export default RadioGroup
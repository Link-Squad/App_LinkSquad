import React from 'react';
import './InputWithLabel.scss';

const InputWithLabel = ({
	name,
	label,
	value,
	handleBlur,
	handleChange,
	placeholder,
	type
}) => {
	return (
		<div className="InputWithLabel">
			<label className="InputWithLabel__label" for={name}>
				{label}
			</label>
			<input
				className="InputWithLabel__input"
				id={name}
				name={name}
				value={value}
				onChange={handleChange}
				onBlur={handleBlur}
				placeholder={placeholder || ''}
				type={type || 'text'}
			></input>
		</div>
	);
};

export default InputWithLabel
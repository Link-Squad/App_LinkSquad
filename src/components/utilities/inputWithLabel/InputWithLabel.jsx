import React from 'react';
import './InputWithLabel.scss';

const InputWithLabel = ({
	name,
	value,
	handleBlur,
	handleChange,
	placeholder,
	type,
	error
}) => {
	return (
		<div className="InputWithLabel">
			<div className="InputWithLabel__label-wrapper">
				<label className="InputWithLabel__label" htmlFor={name}>
					{name}
				</label>
				<p className="InputWithLabel__error small">{error}</p>
			</div>
			<input
				className="InputWithLabel__input"
				id={name}
				name={name}
				value={value || ''}
				onChange={handleChange}
				onBlur={handleBlur}
				placeholder={placeholder || ''}
				type={type || 'text'}
			></input>
		</div>
	);
};

export default InputWithLabel;

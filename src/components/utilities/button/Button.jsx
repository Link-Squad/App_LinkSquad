import React from 'react';
import './Button.scss';

const Button = ({ text, handleClick, value, alt, isDisabled}) => {
	return (
		<button
			className={alt ? 'Button Button--alt' : 'Button Button--primary'}
			value={value}
			onClick={handleClick}
			disabled={isDisabled}
		>
			{text}
		</button>
	);
};

export default Button;

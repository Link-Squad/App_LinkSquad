import React from 'react';
import './Button.scss';

const Button = ({ text, handleClick, value, alt}) => {
	return (
		<button
			className={alt ? 'Button Button--alt' : 'Button Button--primary'}
			value={value}
			onClick={handleClick}
		>
			{text}
		</button>
	);
};

export default Button;

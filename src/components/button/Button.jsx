import React from 'react';
import './Button.scss';

const Button = ({ text, handleClick, value, type, alt}) => {
	return (
		<button
			className={alt ? 'Button Button--alt' : 'Button Button--primary'}
			type={type || 'button'}
			value={value}
			onClick={handleClick}
		>
			{text}
		</button>
	);
};

export default Button;

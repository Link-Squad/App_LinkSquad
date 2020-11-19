import React, { useState } from 'react';
import Checkbox from '../checkbox/Checkbox';
import './DropDownOptions.scss';

const DropDownFilter = ({ text, field, handleChange, options, areChecked }) => {
	const [open, setOpen] = useState(false);
	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<div className="DropDownFilter">
			<p onClick={handleClick}>{text}</p>
			{open === true ? (
				<div className="DropDownFilter_open_container">
					{options.map(option => {
						return (
							<Checkbox
								key={option}
								name={field}
								handleChange={handleChange}
								value={option}
								text={option}
								isChecked={areChecked[option]}
							/>
						);
					})}
				</div>
			) : undefined}
		</div>
	);
};

export default DropDownFilter;

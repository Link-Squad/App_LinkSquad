import React, { useState } from 'react';
import Button from '../../utilities/button/Button';
import DropDownFilter from '../../utilities/dropDownOptions/DropDownOptions';
import GamesFilterOptions from './gamesFilterOptions/GamesFilterOptions';
import './ResultsFilter.scss';

const FilterBox = ({ handleSubmit }) => {
	/*FILTER OPTIONS SHOULD BE SERVED FROM API*/
	const [type, setType] = useState({
		players: false,
		games: false,
		offers: false
	});

	const [filters, setFilters] = useState({});

	const changeType = e => {
		const { value, checked } = e.target;
		setType(prev => {
			return {
				...prev,
				[value]: checked
			};
		});
	};

	const handleChange = e => {
		const { name, value, checked } = e.target;

		setFilters(prev => {
			return {
				...prev,
				[name]: {
					...prev[name],
					[value]: prev[name] ? !prev[name][value] : true
				}
			};
		});
	};



	return (
		<form className="ResultsFilter">
			<DropDownFilter
				text="What are you looking for?"
				handleChange={changeType}
				options={['players', 'games', 'offers']}
			/>

			{type.games && <GamesFilterOptions handleChange={handleChange}/>}

			<Button
				className="Button--primary"
				text="Apply Filter"
				handleClick={e => handleSubmit(e, filters)}
			/>
		</form>
	);
};

export default FilterBox;

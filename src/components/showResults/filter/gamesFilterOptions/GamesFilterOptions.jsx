import React from 'react';
import DropDownOptions from '../../../utilities/dropDownOptions/DropDownOptions';
import { filterOptions } from '../../../../constants/filters.constants';

const GamesFilterOptions = ({ handleChange, areChecked }) => {
	return (
		<div className="GamesFilterOptions">
			<DropDownOptions
				text="What platform?"
				handleChange={handleChange}
				field="platforms"
				options={filterOptions.game.platforms}
				areChecked={areChecked.platforms}
			/>

			<DropDownOptions
				text="What genre?"
				handleChange={handleChange}
				field="genre"
				options={filterOptions.game.genres}
				areChecked={areChecked.genre}
			/>
		</div>
	);
};

export default GamesFilterOptions;

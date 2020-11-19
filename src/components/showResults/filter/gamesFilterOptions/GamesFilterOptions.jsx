import React from 'react';
import DropDownOptions from '../../../utilities/dropDownOptions/DropDownOptions';
import {filterFn, filterOptions} from '../../../../constants/filters.constants'


const GamesFilterOptions = ({handleChange, areChecked}) => {
	return (
		<div className="GamesFilterOptions">
			<DropDownOptions
				text="What platform?"
				handleChange={handleChange}
				field="platform"
				options={filterOptions.game.platforms}
				areChecked={areChecked.platform}
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

export default GamesFilterOptions
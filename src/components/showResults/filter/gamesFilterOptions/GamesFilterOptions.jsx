import React from 'react';
import DropDownOptions from '../../../utilities/dropDownOptions/DropDownOptions';
import {filterFn, filterOptions} from '../../../../constants/filters.constants'


const GamesFilterOptions = ({handleChange}) => {
	return (
		<div className="GamesFilterOptions">
			<DropDownOptions
				text="What platform?"
				handleChange={handleChange}
				field="platform"
                fn={filterFn.game.platform}
				options={filterOptions.game.platforms}
			/>

			<DropDownOptions
				text="What team role?"
				handleChange={handleChange}
				field="role"
				options={['Tank', 'Support', 'Damage', 'Jungle']}
			/>
		</div>
	);
};

export default GamesFilterOptions
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useSearch from '../../../hooks/useSearch';
import DropDownSearchResults from './resultsBox.jsx/DropDownSearchResults.jsx';
import './Searchbar.scss';

const SearchBar = () => {
	const { value, onChange, results, resetSearchBar } = useSearch();

	return (
		<div className="SearchBar__container" onBlur={() => resetSearchBar()}>
						
			<div className="SearchBar">
				<label className="SearchBox">
					<FontAwesomeIcon
						icon={faSearch}
						className="SearchBox__icon"
					/>
					<input
						type="test"
						onChange={onChange}
						value={value}
						className="SearchBox__input"
					/>
					{results && <hr className="SearchBox__hr"></hr>}
				</label>
				{results ? (
					<DropDownSearchResults
						results={results}
					/>
				) : undefined}
			</div>
		</div>
	);
};

export default SearchBar;

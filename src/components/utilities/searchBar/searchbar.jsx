import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useSearch from '../../../hooks/useSearch';
import ResultsBox from './resultsBox.jsx/ResultsBox.jsx';
import './searchbar.scss';



const SearchBar = () => {
	const { value, onChange, results, resetSearchBar } = useSearch();

	return (
		<div className="SearchBar">
			<FontAwesomeIcon icon={faSearch} />
			<input
				type="test"
				onChange={onChange}
				value={value}
				className="form-control"
				placeholder=""
			/>
			{results ? (
				<ResultsBox
					results={results}
					onClickShowResults={resetSearchBar}
					onClickOutsideBox={resetSearchBar}
				/>
			) : undefined}
		</div>
	);
};

export default SearchBar;
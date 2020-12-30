import { useState, useRef, useEffect } from 'react';
import { search } from '../services/api.service.js';

const useSearch = () => {
	const [value, setValue] = useState('');
	const [results, setResults] = useState('');
	const intervalId = useRef();

	const onChange = e => {
		setResults('');
		setValue(e.target.value);
	};

	const resetSearchBar = e => {
		setTimeout(() => {
			setResults('');
			setValue('');
		}, 200);
	};

	useEffect(() => {
		window.clearTimeout(intervalId.current);

		if (value.length <= 1) {
			return;
		}

		intervalId.current = window.setTimeout(() => {
			search(value).then(res => {
				setResults(res);
			});
		}, 500);
	}, [value]);

	return { value, onChange, results, resetSearchBar };
};

export default useSearch;

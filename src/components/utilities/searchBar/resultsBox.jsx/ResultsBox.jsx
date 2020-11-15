import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ResultCardGame from './resultCard/ResultCardGame';
import ResultCardUser from './resultCard/ResultCardUser';
import './ResultsBox.scss';

const ResultsBox = ({ results, onClickShowResults, onClickOutsideBox }) => {
	const [gameResults, userResults] = results;
	const combinedResults = results.flat();

	useEffect(() => {
		document.addEventListener('click', onClickOutsideBox);

		return () => {
			document.removeEventListener('click', onClickOutsideBox);
		};
	}, []);

	const usersToRender = amount => {
		return userResults
			.slice(0, amount)
			.map(user => <ResultCardUser key={user.id} user={user} />);
	};

	const gamesToRender = amount => {
		return gameResults
			.slice(0, amount)
			.map(game => <ResultCardGame key={game.id} game={game} />);
	};

	return (
		<div className="ResultsBox" id="ResultsBox">
			<hr className="grow"></hr>

			{gamesToRender(1)}
			{usersToRender(2)}

			{combinedResults.length ? (
				<Link
					to={{ pathname: '/results', query: { results } }}
					className="button--primary button--fake"
					onClick={onClickShowResults}
				>
					Show All Results
				</Link>
			) : (
				<p>No results</p>
			)}
		</div>
	);
};

export default ResultsBox;

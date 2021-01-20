import React from 'react';
import { Link } from 'react-router-dom';
import ResultCardGame from './resultCard/ResultCardGame';
import ResultCardUser from './resultCard/ResultCardUser';
import './DropDownSearchResults.scss';

const DropDownSearchResults = ({ results }) => {
	const [gameResults, userResults] = results;
	const combinedResults = results.flat();

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
		<div className="DropDownSearchResults">
			{gamesToRender(1)}
			{usersToRender(2)}

			{combinedResults.length ? (
				<Link
					to={{ pathname: '/results', state: results }}
					className="button--fake DropDownSearchResults__button"
				>
					Show All Results ({combinedResults.length})
				</Link>
			) : (
				<p>No results</p>
			)}
		</div>
	);
};

export default DropDownSearchResults;

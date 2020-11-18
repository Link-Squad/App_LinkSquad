import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import OfferCard from '../offerCard/OfferCard';
import GameCardLong from '../gameCardLong/GameCardLong';
import UserCardLong from '../userCardLong/UserCardLong';
import FilterBox from './filter/ResultsFilter';
import FooterSmall from '../utilities/footerSmall/FooterSmall';
import './ShowResults.scss';

const ShowResults = ({ location }) => {
	const [games, users, offers] = location?.state || [];
	const [filterFn, setFilterFn] = useState();

	const filterGames = (e, newFilter) => {
		e.preventDefault();
		setFilterFn(newFilter);
	};

	return (
		<div className="Results">
			<aside className="Results__aside">
				<h2 className="Results__title title">Filter:</h2>
				<FilterBox handleSubmit={filterGames} />
				<FooterSmall />
			</aside>
			<main className="Results__main content__main">
				{games.map(g => (
					<GameCardLong game={g} key={g.id} />
				))}
				{users.map(u => (
					<UserCardLong user={u} key={u.id} />
				))}
			</main>
		</div>
	);
};

export default ShowResults;

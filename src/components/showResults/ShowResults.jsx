import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import OfferCard from '../offerCard/OfferCard';
import GameCardLong from '../gameCardLong/GameCardLong';
import UserCardLong from '../userCardLong/UserCardLong';
import FooterSmall from '../utilities/footerSmall/FooterSmall';
import DropDownOptions from '../utilities/dropDownOptions/DropDownOptions';
import Button from '../utilities/button/Button';
import GamesFilterOptions from './filter/gamesFilterOptions/GamesFilterOptions';
import {filterFn} from '../../constants/filters.constants';
import './ShowResults.scss';
import Checkbox from '../utilities/checkbox/Checkbox';

const ShowResults = ({ location }) => {
	const [games, users, offers] = location?.state || [];

	const [toRender, setToRender] = useState({
		gamesToRender: games,
		usersToRender: users,
		offersToRender: offers
	});

	const [type, setType] = useState({
		users: false,
		games: false,
		offers: false
	});

	const [gameFilters, setGameFilters] = useState({
		platform: {
			PC: false,
			PS: false,
			XBOX: false,
			SWITCH: false
		},
		genre: {
			FPS: false,
			MOBA: false,
			MMORPG: false,
			ACTION: false
		}
	});

	const changeType = e => {
		const { value, checked } = e.target;
		setType(prev => {
			return {
				...prev,
				[value]: checked
			};
		});
	};

	const handleGamesFilter= e => {
		const { name, value, checked } = e.target;

		setGameFilters(prev => {
			return {
				...prev,
				[name]: {
					...prev[name],
					[value]: checked
				}
			};
		});
	};

	const filterResults = e => {
		e.preventDefault();

		
		const filterGames = () => {
			const platform = gameFilters.platform.entries.filter(e => e[1])
		}

		const usersToRender = type.users ? users : [];
		const gamesToRender = type.games ? games : [];
		const offersToRender = type.offers ? offers : [];

		setToRender({ usersToRender, gamesToRender, offersToRender });
	};

	const { gamesToRender, usersToRender, offersToRender } = toRender;

	return (
		<div className="Results">
			<aside className="Results__aside">
				<h2 className="Results__title title">Filter:</h2>
				<form className="ResultsFilter">
					<DropDownOptions
						text="What are you looking for?"
						handleChange={changeType}
						options={['users', 'games', 'offers']}
						areChecked={type}
					/>

					{type.games && (
						<GamesFilterOptions
							handleChange={handleGamesFilter}
							areChecked={gameFilters}
						/>
					)}

					<Button
						className="Button--primary"
						text="Apply Filter"
						handleClick={filterResults}
					/>
				</form>
				<FooterSmall />
			</aside>
			<main className="Results__main content__main">
				{gamesToRender.map(g => (
					<GameCardLong game={g} key={g.id} />
				))}
				{usersToRender.map(u => (
					<UserCardLong user={u} key={u.id} />
				))}
			</main>
		</div>
	);
};

export default ShowResults;

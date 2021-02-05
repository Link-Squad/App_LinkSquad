import React, { useEffect, useState } from 'react';
import OfferCard from '../offerCard/OfferCard';
import GameCardLong from '../gameCardLong/GameCardLong';
import UserCardLong from '../userCardLong/UserCardLong';
import FooterSmall from '../utilities/footerSmall/FooterSmall';
import Button from '../utilities/button/Button';
import GamesFilterOptions from './filter/gamesFilterOptions/GamesFilterOptions';
import { returnTruthyProperties } from '../../helpers/helpers';
import './ShowResults.scss';
import Layout from '../layout/Layout';
import RadioGroup from '../utilities/RadioGroup/RadioGroup';

const ShowResults = ({ location }) => {
	useEffect(() => {
		const [games, users, offers] = location?.state || [];
		setSearchResults({ games, users, offers });
		setToRender({
			gamesToRender: games || [],
			usersToRender: users || [],
			offersToRender: offers || []
		});
	}, [location]);

	const [searchResults, setSearchResults] = useState({});
	const { games, users, offers } = searchResults;

	const [toRender, setToRender] = useState({});

	const [type, setType] = useState();

	const [gameFilters, setGameFilters] = useState({
		platforms: {
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

	const handleRadio = e => {
		const { value } = e.target;
		setType(value);
	};

	const handleGamesFilter = e => {
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
			const selectedPlatforms = returnTruthyProperties(
				gameFilters.platforms
			);
			const selectedGenres = returnTruthyProperties(gameFilters.genre);

			if (![...selectedGenres, ...selectedPlatforms].length) {
				return games;
			}

			const filteredGames = games.filter(g => {
				if (selectedPlatforms.some(sP => g.platforms.includes(sP))) {
					return true;
				} else if (selectedGenres.some(sG => g.genre.includes(sG))) {
					return true;
				} else {
					return false;
				}
			});

			return filteredGames;
		};

		const usersToRender = type.users ? users : [];
		const gamesToRender = type.games ? filterGames() : [];
		const offersToRender = type.offers ? offers : [];

		setToRender({ usersToRender, gamesToRender, offersToRender });
	};

	const { gamesToRender, usersToRender, offersToRender } = toRender || null;

	return (
		<Layout withHeader={true}>
			<div className="Results content content--wrapper">
				<aside className="Results__aside content__aside">
					<h2 className="Results__title title">Filter:</h2>
					<form className="ResultsFilter">

					<RadioGroup name="type" values={["users", "games", "offers"]} handleClick={handleRadio} text="What are you looking for?"/>

						{type === 'games' && (
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
					{gamesToRender?.map(g => (
						<GameCardLong game={g} key={g.id} />
					))}
					{usersToRender?.map(u => (
						<UserCardLong user={u} key={u.id} />
					))}

					{offersToRender?.map(o => (
						<OfferCard offer={o} key={o.id} />
					))}
				</main>
			</div>
		</Layout>
	);
};

export default ShowResults;

import React from 'react';
import { Link } from 'react-router-dom';
import EventCalendar from '../utilities/eventCalendar/eventCalendar';
import './GameCardLong.scss';

const GameCardLong = ({ game }) => {
	return (
		<div className="GameCardLong card">
			<img
				className="GameCardLong__logo"
				alt="logo of the game"
				src={game.logo}
			/>
			<article className="GameCardLong__body">
				<div className="GameCardLong__content">
					<h2 className="GameCardLong__header">{game.name}</h2>
					<div className="GameCardLong__info">
						<h3 className="GameCardLong__title">Genre: </h3>
						<span>{game.genre}</span>
					</div>
					<div className="GameCardLong__info">
						<h3 className="GameCardLong__title">Platforms</h3>
						<ul className="GameCardLong__platforms-list">
							{game.platforms?.map(platform => (
								<li key={platform}>{platform}</li>
							))}
						</ul>
					</div>
					<EventCalendar whose="game's" />
				</div>
				<Link
					to={`/games/${game.id}`}
					className="GameCardLong__link button--fake"
				>
					View details
				</Link>
			</article>
		</div>
	);
};

export default GameCardLong;

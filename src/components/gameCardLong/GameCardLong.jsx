import React from 'react';
import { Link } from 'react-router-dom';
import EventCalendar from '../utilities/eventCalendar/eventCalendar';
import './GameCardLong.scss';

const GameCardLong = ({ game }) => {
    return (
		<div className="GameCardLong card">
			<img className="GameCardLong__avatar" alt="logo of the game" src={game.img}/>
			<article className="GameCardLong__body">
				<div className="GameCardLong__info">
					<h3 className="GameCardLong__title">Genre: </h3>
					<span>{game.genre}</span>
				</div>
				<div className="GameCardLong__info">
					<h3 className="GameCardLong__title">Platforms</h3>
					<ul className="GameCardLong__platforms-list">{game.platforms?.map(platform =><li>{platform}</li>)}</ul>
				</div>
				<div className="GameCardLong__info">
					<h3 className="GameCardLong__title">Release date</h3>
					<p>{game.date}</p>
				</div>
				<EventCalendar whose="game's"/>

				<Link to={`/games/${game.id}`} className="GameCardLong__link button--fake">View details</Link>
			</article>
		</div>
	);
};

export default GameCardLong;

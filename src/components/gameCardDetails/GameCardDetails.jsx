import React from "react";
import { Link } from "react-router-dom";
import EventCalendar from "../utilities/eventCalendar/eventCalendar";
import "./GameCardDetails.scss";

const GameCardDetails = ({ game }) => {
	return (
		<div className="GameCardDetails card">
			<img className="GameCardDetails__logo" alt="logo of the game" src={game.logo}/>
			<article className="GameCardDetails__body">
				<div className="GameCardDetails__info">
					<h3 className="GameCardDetails__title">Genre: </h3>
					<span>{game.genre}</span>
				</div>
				<div className="GameCardDetails__info">
					<h3 className="GameCardDetails__title">Platforms</h3>
					<ul className="GameCardDetails__platforms-list">{game.platforms?.map(platform =><li>{platform}</li>)}</ul>
				</div>
				<div className="GameCardDetails__info">
					<h3 className="GameCardDetails__title">Release date</h3>
					<p>{game.date}</p>
				</div>
				<EventCalendar whose="game's"/>

				<Link to={`/games/${game.id}`} className="GameCardDetails__link button--fake">View details</Link>
			</article>
		</div>
	);
};

export default GameCardDetails;

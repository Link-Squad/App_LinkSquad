import React from "react";
import EventCalendar from "../utilities/eventCalendar/eventCalendar";
import "./GameCardDetails.scss";

const GameCardDetails = ({ game }) => {
	return (
		<div className="GameCardDetails card">
			<img className="GameCardDetails__logo" alt="logo of the game" />
			<article className="GameCardDetails__body">
				<div className="GameCardDetails__info">
					<h3 className="GameCardDetails__title">Genre: </h3>
					<span>{game.genre}</span>
				</div>
				<div className="GameCardDetails__info">
					<h3 className="GameCardDetails__title">Platforms</h3>
					<p>{game.platforms}</p>
				</div>
				<div className="GameCardDetails__info">
					<h3 className="GameCardDetails__title">Release date</h3>
					<p>{game.date}</p>
				</div>
				<EventCalendar whose="game's"/>
			</article>
		</div>
	);
};

export default GameCardDetails;

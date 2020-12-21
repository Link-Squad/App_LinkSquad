import React from 'react';
import './ResultCard.scss';

const ResultCardGame = ({ game }) => {
	return (
		<div className="ResultCard">
			<img
				className="ResultCard__img"
				src={game.icon}
				alt={`${game.name} icon`}
			/>
			<div className="ResultCard__text-container">
				<h2 className="ResultCard__title">{game.name}</h2>
				<p className="ResultCard__details">
					<b className="ResultCard__property-name">Genre: </b> {game.genre}
				</p>
			</div>
		</div>
	);
};

export default ResultCardGame;

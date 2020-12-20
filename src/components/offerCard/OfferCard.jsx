import React, { useState } from 'react';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../utilities/button/Button';
import OfferDropdown from './offerDropdown/OfferCardDropdown';
import './OfferCard.scss';

const OfferCard = ({ offer }) => {
	const [isDropDown, setDropdown] = useState();

	return (
		<div className="OfferCard card">
			<div className="OfferCard__content">
				<img
					className="OfferCard__img"
					alt="game"
					src={offer.img || './img/gaming1.jpg'}
				/>
				<article className="OfferCard__body">
					<h2 className="OfferCard__header title">Wanted</h2>
					<div className="OfferCard__requirement-wrapper">
						<div className="OfferCard__requirement-field">
							<img
								src={`/roles/${offer.role}.png`}
								alt="offer role"
								className="requirements__imgs"
							/>
							<p>{offer.role}</p>
						</div>

						<div className="OfferCard__requirement-field">
							<img
								src={`/ranks/${offer.rank}.png`}
								alt="offer rank"
								className="requirements__imgs"
							/>
							<p>Rank</p>
						</div>
					</div>

					<Button
						text={isDropDown ? 'See less' : 'See offer'}
						handleClick={() => setDropdown(!isDropDown)}
					/>
				</article>
			</div>
			<div className="OfferCard__footer">
				<FontAwesomeIcon icon={faShareAlt} />
				<p>Share</p>
			</div>

			{isDropDown && <OfferDropdown offer={offer} />}
		</div>
	);
};

export default OfferCard;

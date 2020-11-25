import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Link } from 'react-router-dom';
import './OfferCard.scss';

const OfferCard = ({ offer }) => {
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
							/>
							<p>{offer.role}</p>
						</div>

						<div className="OfferCard__requirement-field">
							<img src={`/ranks/${offer.rank}.png`} alt="offer rank"/>
							<p>Rank</p>
						</div>
					</div>

                    <Link to={`/offers/${offer.id}`} className="button--fake">See offer</Link>
				</article>
			</div>
			<div className="OfferCard__footer">
				<FontAwesomeIcon icon={faShareAlt} />
                <p>Share</p>
            </div>
		</div>
	);
};

export default OfferCard
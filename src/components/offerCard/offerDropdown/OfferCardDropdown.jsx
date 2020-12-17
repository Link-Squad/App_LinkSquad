import React from 'react';
import Button from '../../utilities/button/Button';
import './OfferCardDropdown.scss';

const OfferDropdown = ({ offer }) => {
    const { title, description, logo, languages, role, rank } = offer;
    
    const logoPlaceholder = 'https://images.vexels.com/media/users/3/163626/raw/921af6b74a5a31274a5c6877b343bebc-gaming-team-logo.jpg';

	return (
		<div className="OfferCardDropdown card">
			<h2 className="OfferCardDropdown__title title">{title}</h2>
			<img
				className="OfferCardDropdown__img"
				src={logo || logoPlaceholder}
				alt="team logo"
			/>
			<p className="OfferCardDropdown__description">{description}</p>
			<div className="OfferCardDropdown__details">
				<div className="OfferCardDropdown__requirements-wrapper">
					<div>
						<img
							src={`/roles/${role}.png`}
							alt="offer role"
							className="requirements__imgs"
						/>
						<p>{role}</p>
					</div>
					<div>
						<img
							src={`/ranks/${rank}.png`}
							alt="offer rank"
							className="requirements__imgs"
						/>
						<p>Rank</p>
					</div>
				</div>
				<p>
					{languages.map(l => (
						<span className="language-box">{l}</span>
					))}
				</p>
				<Button
					text="Contact"
					handleClick={() =>
						window.alert(
							'This is a WIP feature, be sure to check it out when it is done   :)'
						)
					}
				/>
			</div>
		</div>
	);
};

export default OfferDropdown;

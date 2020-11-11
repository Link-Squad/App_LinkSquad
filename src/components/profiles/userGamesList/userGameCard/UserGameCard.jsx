import React from 'react';
import './UserGameCard.scss';

const UserGameCard = ({game}) => {
    return (
        <div className="UserGameCard card"> 
                <img src={game.logo || game.img} alt={`logo of ${game.name}`} className="UserGameCard__logo"/>

            <div className="UserGameCard__body">
                <img src="https://cdn130.picsart.com/269116153010211.png?r1024x1024" alt={`user level in ${game.name}`} className="UserGameCard__user-level"/>
            </div>
        </div>
    )
}

export default UserGameCard
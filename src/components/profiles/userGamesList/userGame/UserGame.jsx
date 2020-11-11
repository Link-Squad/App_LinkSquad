import React from 'react';
import './UserGame.scss';

const UserGame = ({game}) => {
    return (
        <div className="UserGame card"> 
                <img src={game.logo || game.img} alt={`logo of ${game.name}`} className="UserGame__logo"/>

            <div className="UserGame__body">
                <img src="https://cdn130.picsart.com/269116153010211.png?r1024x1024" className="UserGame__user-level"/>
            </div>
        </div>
    )
}

export default UserGame
import React from 'react';
import './UserGame.scss';

const UserGame = (game) => {
    return (
        <section className="UserGame"> 
            <div className="UserGame__logo">
                <img src={game.logo} alt={`logo of ${game.name}`}/>
            </div>

            <div className="UserGame__body">
                Hello I'm an icon who does nothing
            </div>
        </section>
    )
}
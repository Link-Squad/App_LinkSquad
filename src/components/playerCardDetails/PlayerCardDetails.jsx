import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from '../utilities/socialLinks/SocialLinks';
import './PlayerCardDetails.scss';

const PlayerCardDetails = ({player}) => {

    return (
        <div className="PlayerCardDetails card">
            <img src={player.img} alt='avatar of the player' className="PlayerCardDetails__avatar"/>
            <article className="PlayerCardDetails__body">
                <h2 className="PlayerCardDetails__title title">{player.username}</h2>
                <p className="PlayerCardDetails__team">{player.team || 'No team'}</p>
                <SocialLinks social={player.social}/>
                <ul className="PlayerCardDetails__languages">{player.languages?.map(language =><li className="language-box">{language}</li>)}</ul>
                <div className="PlayerCardDetails__games">{player.games?.map(game => <img src={game.game.icon} alt={`icon of ${game.name}`}/>)}</div>
                <Link to={`/users/${player.id}`} className="PlayerCardDetails__link button--fake">View Profile </Link>
            </article>
        </div>
    )
}

export default PlayerCardDetails
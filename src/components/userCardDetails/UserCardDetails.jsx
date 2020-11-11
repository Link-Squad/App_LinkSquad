import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import SocialLinks from '../utilities/socialLinks/SocialLinks';
import LogoutLink from '../utilities/logoutLink/LogoutLink';
import './UserCardDetails.scss';

const UserCardDetails = ({user}) => {

    return (
        <div className="UserCardDetails card">
            <img src={user.img} alt={`avatar of ${user.name}`} className="UserCardDetails__avatar"/>
            <article className="UserCardDetails__body">
                <h2 className="UserCardDetails__title title">{user.username}</h2>
                <p className="UserCardDetails__team">{user.team || 'No team'}</p>
                <SocialLinks social={user.social}/>
                <ul className="UserCardDetails__languages">{user.languages?.map(language =><li className="language-box">{language}</li>)}</ul>
                <div className="UserCardDetails__games">{user.userGames?.map(game => <img src={game.game.icon} alt={`icon of ${game.name}`}/>)}</div>
                {/* TODO: check myProfile design to see if it needs to be separate component */}
                {user.id === useAuthContext().user.id ? <LogoutLink />: <button className="button--fake">Connect</button>}
            </article>
        </div>
    )
}

export default UserCardDetails
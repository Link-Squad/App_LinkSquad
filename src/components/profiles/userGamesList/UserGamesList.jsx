import React from 'react';
import UserGame from './userGame/UserGame';
import './UserGamesList.scss';

const UserGamesList = ({user}) => (
    <section className="UserGamesList">
        {user.userGames?.map(uG => <UserGame game={uG.game}/>)}
    </section>
)

export default UserGamesList
import React from 'react';
import UserGame from './userGameCard/UserGameCard';
import './UserGamesList.scss';

const UserGamesList = ({user}) => (
    <section className="UserGamesList">
        {user.userGames?.map(uG => <UserGame game={uG.game} key={uG.id}/>)}
    </section>
)

export default UserGamesList
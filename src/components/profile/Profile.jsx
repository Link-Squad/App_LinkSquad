import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import { getUserById } from '../../services/api.service';
import LogoutLink from '../utilities/logoutLink/LogoutLink';
import AboutMe from './aboutMe/AboutMe';
import './Profile.scss';
import UserGameProfile from './userGameProfile/UserGameProfile';
import { getRandomElementFromArray } from '../../helpers/helpers.js';

const Profile = (props) => {
  const [user, setUser] = useState();
  const authContext = useAuthContext();
  const currentUser = authContext.user;

  useEffect(() => {
    const userId = props.match.params.id;
    getUserById(userId).then((res) => {
      console.log(res[0]);
      setUser(res[0]);
    });
  }, []);
  return (
    <div className='Profile'>
      {user ? (
        <div className='Profile__left-side'>
          {currentUser.id === user.id ? <h2>My Profile</h2> : undefined}
          <UserGameProfile profileUser={user} />
          {currentUser.id === user.id ? <LogoutLink className='Button-fake Button-primary' /> : undefined}
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {user ? (
        <div className='Profile__content'>
          <AboutMe user={user} />
          {user.userGames.map((game) => {
            console.log(game.game)
            return (
              <article className='Profile__content__liked-game card'>
                <img src={`/icons/${game.game.name}.png`} alt='game icon' />
                <img src={`/ranks/${getRandomElementFromArray([0,1,2,3,4,5,6,7])}.png`} alt='game icon' />
              </article>
            );
          })}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;

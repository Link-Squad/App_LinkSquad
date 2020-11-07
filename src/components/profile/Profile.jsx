import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import { getUserById } from '../../services/api.service';
import LogoutLink from '../utilities/logoutLink/LogoutLink';
import AboutMe from './aboutMe/AboutMe';
import './Profile.scss';
import UserGameProfile from './userGameProfile/UserGameProfile';

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
          <UserGameProfile user={user} currentUser={currentUser}/>
          <LogoutLink className='Button-fake Button-primary' />
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {user ? (
        <div className='Profile__content'>
          <AboutMe user={user}/>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;

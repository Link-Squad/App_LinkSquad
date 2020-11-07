import React, { useEffect, useRef, useState } from 'react';
import { useAuthContext } from '../../../contexts/AuthContext.js';
import SocialLinks from '../../utilities/socialLinks/SocialLinks';
import './UserGameProfile.scss';
import Button from '../../utilities/button/Button';
import {
  createFriendship,
  getUserById,
  updateFriendship
} from '../../../services/api.service';

const UserGameProfile = ({ profileUser }) => {
  const isFriend = useRef();
  const authContext = useAuthContext();
  let user = authContext.user;

  const [handleButtonClick, setHandleButtonClick] = useState();
  const [buttonText, setButtonText] = useState();
  const [filterFriendship, setFilteredFriendship] = useState();

  const getFriendship = (otherUser) => {
    console.log(user);
    if (user.friendship === undefined) {
      return undefined;
    }
    const currentFriendship = user.friendship;
    for (let i = 0; i < currentFriendship.length; i++) {
      const usersID = [
        currentFriendship[i].users[0].id,
        currentFriendship[i].users[1].id
      ];
      const acceptedID = [
        currentFriendship[i].accepted[0]?.id,
        currentFriendship[i].accepted[1]?.id
      ];

      if (usersID.includes(otherUser.id)) {
        const tempfriendship = {
          users: usersID,
          accepted: acceptedID.filter((el) => el !== undefined)
        };
        console.log('friendship exists');
        setFilteredFriendship(tempfriendship);
        return;
      }
    }
    console.log('no friends');
    setFilteredFriendship(undefined);

  };

  const addFriend = () => {
    console.log(user);
    console.log(user.id);
    if (filterFriendship !== undefined && filterFriendship.length !== 0) {
      console.log('filter not undefinded or length 0');
      updateFriendship(user.id).then(() => {
        getUserById(user.id).then((userUpdated) => {
          console.log(userUpdated[0]);
          authContext.update(userUpdated[0]);
          user = userUpdated[0];
          getFriendship(profileUser);
        });
      });
    } else {
      console.log('createFriendship');

      createFriendship(profileUser.id).then(() => {
        getUserById(user.id).then((userUpdated) => {
          console.log(userUpdated[0]);
          authContext.update(userUpdated[0]);
          user = userUpdated[0];
          getFriendship(profileUser);
        });
      });
    }
  };

  const removeFriend = () => {
    console.log('removing friend');

    if (filterFriendship !== undefined && filterFriendship.length !== 0) {
      updateFriendship(profileUser.id).then(() => {
        getUserById(user.id).then((userUpdated) => {
          console.log(userUpdated[0]);
          authContext.update(userUpdated[0]);
          user = userUpdated[0];
          getFriendship(profileUser);
        });
      });
    }
  };

  const checkIfFriend = () => {
    console.log(user);
    console.log(filterFriendship);
    if (filterFriendship === undefined || filterFriendship.length === 0) {
      isFriend.current = false;
      setButtonText('Add Friend');
      setHandleButtonClick(() => addFriend);
      return;
    }
    if (filterFriendship.accepted.length === 2) {
      console.log('friendship both accepted');
      isFriend.current = true;
    } else {
      if (filterFriendship.accepted.includes(user.id)) {
        console.log('i accepted, other didnt');
        isFriend.current = true;
      } else if (filterFriendship.accepted.includes(profileUser.id)) {
        console.log('i didnt accept, other accepted');
        isFriend.current = false;
      } else {
        console.log('empty friendship');
        isFriend.current = false;
      }
    }
    console.log(isFriend.current)
    if (isFriend.current === true) {
      setButtonText('Remove Friend');
      setHandleButtonClick(() => removeFriend);
    } else {
      setButtonText('Add Friend');
      setHandleButtonClick(() => addFriend);
    }
  };
  useEffect(() => {
    if(!filterFriendship) {
      return;
    }
    checkIfFriend();
  }, [filterFriendship]);

  useEffect(() => {
    getFriendship(profileUser);
    checkIfFriend();
  }, []);

  return (
    <div className='UserGameProfile card'>
      <img
        className='UserGameProfile__avatar'
        src={profileUser.img}
        alt='user profile logo'
      />
      <div className='UserGameProfile__body'>
        <h2>{profileUser.username}</h2>
        <SocialLinks social={profileUser.social} />
        <ul className='PlayerCard__languages-wrapper'>
          {profileUser.languages?.map((language, index) => (
            <li key={index} className='language-box'>
              {language}
            </li>
          ))}
        </ul>
        {profileUser?.userGames.map((game, index) => {
          return <img key={index} src={`/icons/${game.game.name}.png`} alt='icon' />;
        })}
      </div>
      {user === undefined || user.id === profileUser.id ? undefined : (
        <Button
          handleClick={handleButtonClick}
          className='button--fake button--primary'
          text={buttonText}
        />
      )}
    </div>
  );
};

export default UserGameProfile;

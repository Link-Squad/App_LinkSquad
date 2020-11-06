import React from 'react';
import SocialLinks from '../../utilities/socialLinks/SocialLinks';
import './UserGameProfile.scss';
import { useAuthContext } from '../../../contexts/AuthContext';
import Button from '../../utilities/button/Button';
import { createFriendship, getUserById, updateFriendship } from '../../../services/api.service';

const UserGameProfile = ({ user }) => {
  const authContext = useAuthContext();
  const currentUser = authContext.user;


  const checkIfFriend = (user) => {
    console.log(currentUser);
    const filterFriendship = currentUser.filterFriendship?.filter((friend) => {
    console.log(friend);

      return friend.users.includes({id: `${user.id}`})
    })
    if(filterFriendship === undefined || filterFriendship.length === 0) {
      return false
    }

    if(filterFriendship.users.includes(user.id) && filterFriendship.accepted.includes(user.id)) {
      if(filterFriendship.accepted.length === 2) {
        return true;
      } else {
        if(filterFriendship.accepted.includes(currentUser.id)) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  }

  const addFriend = () => {
    const filterFriendship = currentUser.friendship?.filter((friend) => {
      return friend.users.includes(user.id)
    })

    if( filterFriendship !== undefined && filterFriendship.length !== 0) {
      console.log('filter not undefinded or length 0');
      updateFriendship(currentUser.id)
      .then(() =>{
        getUserById(currentUser.id)
        .then((userUpdated) => {
          console.log(userUpdated);
          authContext.update(userUpdated);
        })
      })
    } else {
    console.log('createFriendship')

      createFriendship(user.id)
      .then(() => {
        getUserById(currentUser.id)
        .then((userUpdated) => {
          console.log(userUpdated);
          authContext.update(userUpdated);
        })
      })
    }
  }

  const removeFriend = () => {
    console.log('removing friend')
    const filterFriendship = currentUser.friendship?.filter((friend) => {
      return friend.users.includes(user.id)
    })

    console.log(filterFriendship);
    if(filterFriendship !== undefined && filterFriendship.length !== 0) {
      updateFriendship(user.id)
      .then(() =>{
        getUserById(currentUser.id)
        .then((userUpdated) => {
          console.log(userUpdated);
          authContext.update(userUpdated);
        })
      })
    }    
  }

  const initializeButton = () => {
    if(checkIfFriend(user)) {
      return (<Button handleClick={removeFriend} className='button--fake button--primary' text='Remove Friend'/>);
    } else {
      return (<Button handleClick={addFriend} className='button--fake button--primary' text='Add Friend'/>);
    }
  }
  return (
    <div className='UserGameProfile card'>
      <img
        className='UserGameProfile__avatar'
        src={user.img}
        alt='user profile logo'
      />
      <div className='UserGameProfile__body'>
        <h2>{user.username}</h2>
        <SocialLinks social={user.social} />
        <ul className='PlayerCard__languages-wrapper'>
          {user.languages?.map((language) => (
            <li className='language-box'>{language}</li>
          ))}
        </ul>
        {user?.userGames.map((game) => {
          console.log(game.game.img);
          return <img src={game.game.img} alt='icon' />;
        })}
      </div>
      {currentUser.id === user.id ? undefined: initializeButton()}
      
    </div>
  );
};

export default UserGameProfile;

import React, { useEffect, useState } from 'react';
import SocialLinks from '../../utilities/socialLinks/SocialLinks';
import './UserGameProfile.scss';
import { useAuthContext } from '../../../contexts/AuthContext';
import Button from '../../utilities/button/Button';
import { createFriendship, getUserById, updateFriendship } from '../../../services/api.service';

const UserGameProfile = ({ user,currentUser }) => {
  const authContext = useAuthContext();
  const [filterFriendship,setFilteredFriendship] = useState(undefined);

  useEffect(()=>{
    console.log('get friendship');
    console.log(currentUser);
    getFriendship(user);
  },[])

  const getFriendship = (user) => {
    if(currentUser.friendship === undefined) {
      return undefined;
    }

    const currentFriendship = currentUser.friendship;
    for(let i = 0; i < currentFriendship.length ; i++) {
      const usersID  = [currentFriendship[i].users[0].id,currentFriendship[i].users[1].id]
      const acceptedID  = [currentFriendship[i].accepted[0]?.id,currentFriendship[i].accepted[1]?.id]
      
      if(usersID.includes(user.id)){
        const tempfriendship = { 
          users: usersID,
          accepted: acceptedID.filter((el) => el !== undefined)
        }
        console.log(tempfriendship);
        setFilteredFriendship(tempfriendship)
        break;
      }
    }
  }

  const checkIfFriend = (user) => {
    console.log(currentUser);
    console.log(filterFriendship);
    if(filterFriendship === undefined || filterFriendship.length === 0) {
      return false
    }

    if(filterFriendship.accepted.includes(user.id)) {
      if(filterFriendship.accepted.length === 2) {
        console.log('friendship both accepted');

        return true;
      } else {
        if(filterFriendship.accepted.includes(currentUser.id)) {
          console.log('i accepted, other didnt');
          return true;
        } else {
          console.log('other accepted, i didnt');
          return false;
        }
      }
    } else {
      console.log('other accepted, i didnt');
      return false;
    }
  }

  const addFriend = () => {

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
      { currentUser.id === user.id || filterFriendship === undefined ? undefined: initializeButton()}
      
    </div>
  );
};

export default UserGameProfile;

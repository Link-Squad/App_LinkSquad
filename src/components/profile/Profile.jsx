import React from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import UserCard from '../userCard/UserCard';

const Profile = () => {
  const authContext = useAuthContext();
  const currentUser = authContext.user;

	return (
		<div>
			<h2>My profile</h2>
      <UserCard user={currentUser}/>
		</div>
	);
};

export default Profile;

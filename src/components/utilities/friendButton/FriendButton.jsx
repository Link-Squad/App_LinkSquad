import React, { useEffect, useState } from 'react';
import {
	addFriend,
	acceptFriend,
	deleteFriend,
	getFriendshipStatus
} from '../../../services/api.service';
import './FriendButton.scss';

const FriendButton = ({ friendId }) => {
	const [friendshipStatus, setFriendshipStatus] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getFriendshipStatus(friendId)
			.then(status => {
				setLoading(false);
				setFriendshipStatus(status);
			})
			.catch(e => console.error(e));
	}, [friendId]);

	const buttonParams = {
		none: {
			text: 'Add friend',
			fn: addFriend
		},
		pending: {
			text: 'Accept friend request',
			fn: acceptFriend
		},
		sent: {
			text: 'Cancel friend request',
			fn: deleteFriend
		},
		friends: {
			text: 'Delete from friends',
			fn: deleteFriend
		}
	};

    /*REFACTOR*/
	const handleClick = () => {
		buttonParams[friendshipStatus].fn(friendId).then(() => {
			getFriendshipStatus(friendId).then(status => {
				setFriendshipStatus(status);
			});
		});
	};

	return (
		<div>
			{loading ? (
				'loading'
			) : (
				<button onClick={handleClick} className="button--fake">
					{buttonParams[friendshipStatus]?.text}
				</button>
			)}
		</div>
	);
};

export default FriendButton;

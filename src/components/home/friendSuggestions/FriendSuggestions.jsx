import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../../contexts/AuthContext';
import { getRandomElementFromArray } from '../../../helpers/helpers';
import { getUsersByQuery, getUsersByGame } from '../../../services/api.service';
import PlayerCardSmall from '../../playerCardSmall/PlayerCardSmall';
import './FriendSuggestions.scss';

const FriendSuggestions = () => {
	const { user } = useAuthContext();
	const [fetchedUsers, setFetchedUsers] = useState();
	const [usersToDisplay, setUsersToDisplay] = useState();
	const [seeMore, setSeeMore] = useState(0)

	useEffect(() => {
		const max = 3;
		const randNumber = Math.floor(
			Math.random() * (fetchedUsers?.length - max) + max
		);

		const end = randNumber + max;
		const userSlice = fetchedUsers?.slice(randNumber, end);
		setUsersToDisplay(userSlice);
	}, [fetchedUsers, seeMore]);

	/*REFACTOR*/
	useEffect(() => {
		// this could be abstracted in createRequests() function
		const getUsersRequests = []
		const {languages, userGames} = user;

		if (languages.length) {
			const randomLanguage = getRandomElementFromArray(user.languages);
			const languageQuery = `?languages=${randomLanguage}`;
			const byLanguageRequest = getUsersByQuery(languageQuery)

			getUsersRequests.push(byLanguageRequest);
		}

		if (userGames.length) {
			const userGames = user.userGames?.map(ug => ug.game.id);
			const randomGame = getRandomElementFromArray(userGames);
			const byGameRequest = getUsersByGame(randomGame);
			
			getUsersRequests.push(byGameRequest);
		}

		if (!getUsersRequests.length) {
			//not very scalable
			const allUsersRequest = getUsersByQuery('');

			getUsersRequests.push(allUsersRequest)
		}
		// till here
		

		Promise.all(getUsersRequests).then(
			(response) => {
				const users = response.flat()
				const removeUserFromArray = (array, userId) => array.filter(u => u.id !== userId)
				
				setFetchedUsers(removeUserFromArray(users, user.id));
			}
		);
	}, []);

	const handleClick = (e) => {
		setSeeMore(prev => prev + 1)
	}

	return (
		<section className="FriendSuggestions">
			<h2 className="FriendSuggestions__title title">Friend Suggestions</h2>
			<div className="FriendSuggestions__container">
				<div className="FriendSuggestions__list">
					{usersToDisplay?.map(suggestedUser => (
						<PlayerCardSmall
							player={suggestedUser}
							key={suggestedUser.id}
						/>
					)) || 'You have too many friends already, go out'}
				</div>
				<button onClick={handleClick}> {'>'} </button>
			</div>
		</section>
	);
};

export default FriendSuggestions;

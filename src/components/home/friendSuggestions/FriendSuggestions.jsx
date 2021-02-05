import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { useAuthContext } from '../../../contexts/AuthContext';
import {
	getRandomElementFromArray,
	removeUserFromArray
} from '../../../helpers/helpers';
import { getUsersByQuery, getUsersByGame } from '../../../services/api.service';
import UserCardSmall from '../../userCardSmall/UserCardSmall';
import './FriendSuggestions.scss';

const FriendSuggestions = () => {
	const { user } = useAuthContext();

	const fetchedUsers = useRef([]);
	const [usersToDisplay, setUsersToDisplay] = useState();
	const [userPagination, setUserPagination] = useState(0);
	const [usersAmount, setUsersAmount] = useState(3)

	useEffect(() => {
		const updateUsersAmount = () => {
			const {innerWidth: width} = window

			if (width < 620) {
				setUsersAmount(1)
			} else if (width > 620 && width < 900) {
				setUsersAmount(2)
			} else {
				setUsersAmount(3)
			}
		};

		window.addEventListener('resize', updateUsersAmount);
		updateUsersAmount();

		return () => window.removeEventListener('resize', updateUsersAmount);
	}, []);

	useEffect(() => {
		const getUsersRequests = [];
		const { languages, userGames } = user;

		if (languages.length) {
			const randomLanguage = getRandomElementFromArray(user.languages);
			const languageQuery = `?languages=${randomLanguage}`;
			const byLanguageRequest = getUsersByQuery(languageQuery);

			getUsersRequests.push(byLanguageRequest);
		}

		if (userGames.length) {
			const userGames = user.userGames?.map(ug => ug.game.id);
			const randomGame = getRandomElementFromArray(userGames);
			const byGameRequest = getUsersByGame(randomGame);

			getUsersRequests.push(byGameRequest);
		}

		if (!getUsersRequests.length) {
			const allUsersRequest = getUsersByQuery('');

			getUsersRequests.push(allUsersRequest);
		}

		Promise.all(getUsersRequests).then(response => {
			const users = removeUserFromArray(response.flat(), user.id);

			fetchedUsers.current = users;
			setUsersToDisplay(users.slice(0, usersAmount));
		});
	}, [user]);

	useEffect(() => {
		const sliceStart = userPagination * usersAmount;
		const sliceEnd = sliceStart + usersAmount;

		setUsersToDisplay(fetchedUsers.current.slice(sliceStart, sliceEnd));
	}, [userPagination, usersAmount]);

	const handleClick = e => {
		setUserPagination(prev => {
			if (
				prev * usersAmount.current +
					usersAmount.current >=
				fetchedUsers.current.length
			)
				return 0;
			return ++prev;
		});
	};

	return (
		<section className="FriendSuggestions">
			<h2 className="FriendSuggestions__title title">
				Friend Suggestions
			</h2>
			<div className="FriendSuggestions__container">
				<div className="FriendSuggestions__list">
					{usersToDisplay?.map(suggestedUser => (
						<UserCardSmall
							user={suggestedUser}
							key={suggestedUser.id}
						/>
					)) || 'loading...'}
				</div>
				<button onClick={handleClick}> <FontAwesomeIcon icon={faCaretRight}/> </button>
				
			</div>
		</section>
	);
};

export default FriendSuggestions;

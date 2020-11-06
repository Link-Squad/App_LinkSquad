import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../../contexts/AuthContext';
import { getRandomElementFromArray } from '../../../helpers/helpers';
import { getUsers, getUsersByGame } from '../../../services/api.service';
import PlayerCardSmall from '../../playerCardSmall/PlayerCardSmall';
import './FriendSuggestions.scss';

const FriendSuggestions = () => {
	const { user } = useAuthContext();
	const [suggestedUsers, setSuggestedUsers] = useState();
	const [usersToDisplay, setUsersToDisplay] = useState();
	const [seeMore, setSeeMore] = useState(0)

	useEffect(() => {
		const max = 3;
		const randNumber = Math.floor(
			Math.random() * (suggestedUsers?.length - max) + max
		);

		const end = randNumber + max;
		const userSlice = suggestedUsers?.slice(randNumber, end);
		setUsersToDisplay(userSlice);
	}, [suggestedUsers, seeMore]);

	useEffect(() => {
		const randomLanguage = getRandomElementFromArray(user.languages);
		const languageQuery = `languages=${randomLanguage}`;
		const userGames = user.userGames?.map(ug => ug.game.id);

		if(user.userGames.length || user.languages.length) {
			return
		}

		const randomGame = getRandomElementFromArray(userGames);
		Promise.all([getUsersByGame(randomGame), getUsers(languageQuery)]).then(
			([usersByGame, usersByLanguage]) => {
				setSuggestedUsers([...usersByLanguage, ...usersByGame]);
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

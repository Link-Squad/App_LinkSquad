import {
	faDiscord,
	faTwitch,
	faTwitter,
	faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getGames, update } from '../../services/api.service';
import Button from '../utilities/button/Button';
import './FillDetails.scss';

const LANGUAGES = ['spanish', 'english', 'french', 'arabic', 'russian'];
const SOCIAL_MEDIA = ['twitch', 'twitter', 'youtube', 'discord'];

const FillDetails = () => {
	const history = useHistory();
	const [pageNumber, setPageNumber] = useState(1);
	const [gamesIds, setGamesIds] = useState();
	const [state, setState] = useState({
		data: {
			languages: LANGUAGES.reduce(
				(o, key) => Object.assign(o, { [key]: false }),
				{}
			),
			games: [],
			bio: '',
			social: SOCIAL_MEDIA.reduce(
				(o, key) => Object.assign(o, { [key]: '' }),
				{}
			)
		}
	});

	const maxPageNumber = 5;
	const progress = (pageNumber / maxPageNumber) * 100 + '%';
	const progressBarWidth = { width: progress };
	const { data } = state;

	const handleSocial = e => {
		const { value, name } = e.target;
		setState(prev => {
			return {
				...prev,
				data: {
					...prev.data,
					social: {
						...prev.data.social,
						[name]: value
					}
				}
			};
		});
	};

	const handleInputChange = e => {
		const { value, name } = e.target;
		setState(prev => {
			return {
				...prev,
				data: {
					...prev.data,
					[name]: value
				}
			};
		});
	};

	const changePage = e => {
		const value = parseInt(e.target.value);
		const currentPage = pageNumber + value;

		if (currentPage <= 0) {
			setPageNumber(1);
		} else if (currentPage > maxPageNumber) {
			setPageNumber(maxPageNumber);
		} else {
			setPageNumber(currentPage);
		}
	};

	useEffect(() => {
		getGames()
			.then(gamesArray => {
				const gamesObj = gamesArray.reduce(
					(o, game) => Object.assign(o, { [game.name]: false }),
					{}
				);

				setGamesIds(
					gamesArray.reduce(
						(o, game) => Object.assign(o, { [game.name]: game.id }),
						{}
					)
				);
				setState(prev => {
					return {
						...prev,
						data: {
							...prev.data,
							games: gamesObj
						}
					};
				});
			})
			.catch(e => console.error(e));
	}, []);

	const handleCheckbox = e => {
		const { name, value } = e.target;
		setState(prev => {
			return {
				...prev,
				data: {
					...prev.data,
					[value]: {
						...prev.data[value],
						[name]: !prev.data[value][name]
					}
				}
			};
		});
	};

	const handleSubmit = e => {
		const languages = Object.keys(data.languages).filter(
			l => data.languages[l]
		);
		const games = Object.keys(data.games)
			.filter(g => data.games[g])
			.map(selectedGame => gamesIds[selectedGame]);
		//validate links!
		const social = data.social;
		const bio = data.bio;

		const userData = { languages, games, social, bio };
		e.preventDefault();
		update(userData)
			.then(r => {
				history.push('/');
			})
			.catch(e => console.error(e));
	};

	/* DECLARATIONS */

	const itemsToRender = source => {
		const sourceArr = Object.keys(data[source]);
		return sourceArr.map(el => (
			<div className={`Form__item`} key={el}>
				<label
					htmlFor={el}
					className={data[source][el] ? `Form__item--selected` : ''}
				>
					{el}
				</label>
				<input
					type="checkbox"
					id={el}
					name={el}
					value={source}
					onChange={handleCheckbox}
				/>
			</div>
		));
	};

	const renderOptionsList = (field, question) => (
		<div className="Form__page">
			<h2 className="Form__title">{question}</h2>

			<div className="Form__options">{itemsToRender(field)}</div>
		</div>
	);

	const renderSocialMediaItem = socialName => {
		const socialIcons = {
			twitch: faTwitch,
			twitter: faTwitter,
			youtube: faYoutube,
			discord: faDiscord
		};

		return (
			<div className="social-media__item" key={socialName}>
				<label htmlFor={socialName} className="social-media__icon">
					<FontAwesomeIcon icon={socialIcons[socialName]} />
				</label>
				<input
					className="social-media__input"
					type="url"
					placeholder={socialName}
					onChange={handleSocial}
					name={socialName}
					id={socialName}
					value={data.social[socialName]}
				></input>
			</div>
		);
	};

	const renderSocialMedia = () => (
		<div className="Form__page">
			<h2 className="Form__title">
				You can link your social media <b>here</b>
			</h2>
			<div className="social-media">
				{SOCIAL_MEDIA.map(social => renderSocialMediaItem(social))}
			</div>
		</div>
	);

	const renderBio = () => (
		<div className="Form__page">
			<h2 className="Form__title">Write something about yourself</h2>
			<textarea
				className="TextArea"
				placeholder="max 200 characters"
				maxLength={200}
				onChange={handleInputChange}
				value={data.bio}
				name="bio"
			></textarea>
		</div>
	);

	const renderAvatarUpload = () => (
		<div className="Form__page">
			<h2 className="Form__title">Upload your avatar here</h2>
			<input
				type="file"
				id="avatar"
				name="avatar"
				accept="image/png, image/jpeg"
				default=""
			className="input-image"></input>

		<div className="Form__submit-button">
			<Button type="submit" text="Done!" />
		</div>

		</div>
	);

	const content = {
		1: renderOptionsList('languages', 'What languages do you speak?'),
		2: renderOptionsList('games', 'What are your favourite games?'),
		3: renderSocialMedia(),
		4: renderBio(),
		5: renderAvatarUpload()
	};

	return (
		<main className="FillDetails__wrapper">
			<div className="FillDetails__title">
				<h2 className="title">Are you ready?</h2>
				<h3>Help us find you better gaming partners</h3>
				<div className="FillDetails__progress">
					<div className="ProgressBar__container">
						<div
							className="ProgressBar__content"
							style={progressBarWidth}
						>
							<FontAwesomeIcon
								icon={faUser}
								className="ProgressBar__icon"
							/>
						</div>
					</div>
					<span className="FillDetails__progress-number">
						{(pageNumber / maxPageNumber) * 100}
					</span>
				</div>
			</div>
			<form className="FillDetails__form" onSubmit={handleSubmit}>
				{content[pageNumber]}
			</form>

			<footer className="FillDetails__footer">
				<Button
					text="<"
					alt="true"
					value={-1}
					handleClick={changePage}
				/>
				<Link to="/">Complete later</Link>
				<Button
					text=">"
					alt="true"
					value={1}
					handleClick={changePage}
				/>
			</footer>
		</main>
	);
};

export default FillDetails;

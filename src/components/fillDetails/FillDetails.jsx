import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../utilities/button/Button';
import './FillDetails.scss';

const LANGUAGES = ['spanish', 'english', 'french', 'arabic', 'russian'];

const FillDetails = () => {
	const [pageNumber, setPageNumber] = useState(1);
	const [state, setState] = useState({
		data: {
			languages: LANGUAGES.reduce(
				(o, key) => Object.assign(o, { [key]: false }),
				{}
			)
		},
		isHidden: {
			languages: false,
			games: true
		}
	});

	const maxPageNumber = 4;
	const hidden = { display: 'none' };
	const progress = (pageNumber / maxPageNumber) * 100 + '%';
	const progressBarWidth = { width: progress };
	const { data, isHidden } = state;

	const handleChange = e => {
		const { value } = e.target;
	};

	const changePage = e => {
		const value = parseInt(e.target.value);
		setPageNumber(pageNumber + value);
	};

	const useEffect =
		(() => {
			if (pageNumber <= 0) {
				console.log('eskere');
				//make it right
			} else if (pageNumber > maxPageNumber) {
				//also make it right
			}
		},
		[pageNumber]);

	const handleCheckbox = e => {
		const { name } = e.target;
		setState(prev => {
			return {
				...prev,
				data: {
					...prev.data,
					languages: {
						...prev.data.languages,
						[name]: !prev.data.languages[name]
					}
				}
			};
		});
	};

	const languagesToRender = LANGUAGES.map(language => (
		<div className="Form__languages-list">
			<label
				for={language}
				className={
					data.languages[language] ? 'Form__languages--selected' : ''
				}
			>
				{language}
			</label>
			<input
				type="checkbox"
				id={language}
				name={language}
				onChange={handleCheckbox}
			/>
		</div>
	));

	return (
		<main className="FillDetails__wrapper">
			<div className="FillDetails__title">
				<h2 className="title">Are you ready?</h2>
				<h3>Help us find you better gaming partners</h3>
				<div className="FillDetails__progress">
					<div className="ProgressBar__container">
						<div className="ProgressBar__content" style={progressBarWidth}><FontAwesomeIcon icon={faUser} className="ProgressBar__icon"/></div>
					</div>
					<span className="FillDetails__progress-number">
						{(pageNumber / maxPageNumber) * 100}
					</span>
				</div>
			</div>
			<form className="FillDetails__form">
				<div
					style={isHidden.languages ? hidden : {}}
					className="Form__languages"
				>
					<h2 className="Form__title">
						What languages do you speak?
					</h2>
					<div className="Form__languages-list">
						{languagesToRender}
					</div>
				</div>

				<select
					id="suggestion"
					name="altFruit"
					className=""
					style={isHidden.games ? hidden : {}}
				>
					<option>Apple</option>
					<option>Banana</option>
					<option>Blackberry</option>
					<option>Blueberry</option>
					<option>Lemon</option>
					<option>Lychee</option>
					<option>Peach</option>
					<option>Pear</option>
				</select>
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

import React from 'react';
import {Link} from 'react-router-dom';
import './TermsAndConditions.scss';

const TermsAndConditions = () => {
	return (
		<div className="TermsAndConditions">
			<input type="checkbox" className="TermsAndConditions__input" id="TermsAndConditions__input"></input>
			<label for="TermsAndConditions__input" className="TermsAndConditions__label"></label>
			<Link to="#" className="TermsAndConditions__link small">
				I have read and accept the terms and conditions
			</Link>
		</div>
	);
};

export default TermsAndConditions
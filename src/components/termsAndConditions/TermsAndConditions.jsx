import React from 'react';
import {Link} from 'react-router-dom';
import './TermsAndConditions.scss';

const TermsAndConditions = () => {
	return (
		<div className="TermsAndConditions">
			<input type="checkbox" className="TermsAndConditions__input"></input>
			<Link to="#" className="TermsAndConditions__link">
				I have read and accept the terms and conditions
			</Link>
		</div>
	);
};

export default TermsAndConditions
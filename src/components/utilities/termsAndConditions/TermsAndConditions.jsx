import React from 'react';
import {Link} from 'react-router-dom';
import Checkbox from '../checkbox/Checkbox';
import './TermsAndConditions.scss';

const TermsAndConditions = ({handleChange}) => {
	return (
		<div className="TermsAndConditions">
			<Checkbox handleChange={handleChange}/>
			<Link to="#" className="TermsAndConditions__link small">
				I have read and accept the terms and conditions
			</Link>
		</div>
	);
};

export default TermsAndConditions
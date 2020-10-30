import React, { useState } from 'react';
import InputWithLabel from '../utilities/inputWithLabel/InputWithLabel';
import Button from '../utilities/button/Button';
import './LoginForm.scss';
import { Link } from 'react-router-dom';
import { login } from '../../services/api.service';
import TermsAndConditions from '../utilities/termsAndConditions/TermsAndConditions';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault(); 
		console.log({ email, password }); 
		login(email, password)
			.then((user) => console.log(user)) 
			.catch((e) => {
				console.log(e);
				setError(e);
			});
	};

	return (
		<form className="Login" onSubmit={handleSubmit}>
			<div className="Login__body">
				<InputWithLabel
					name="email"
					type="email"
					value={email}
					handleChange={(e) => setEmail(e.target.value)}
				/>
				<InputWithLabel
					name="password"
					type="password"
					value={password}
					handleChange={(e) => setPassword(e.target.value)}
				/>
				<Link to="#" className="Login__reset-password small">
					Forgot your password?
				</Link>
			</div>

			{error && <p>There was an error: {error.message} </p>}

			<TermsAndConditions />
			<Button text="Log In" className="Login__submit-button" />
		</form>
	);
};

export default LoginForm;

import React, { useState } from 'react';
import InputWithLabel from '../utilities/inputWithLabel/InputWithLabel';
import Button from '../utilities/button/Button';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { login } from '../../services/api.service';
import { useAuthContext } from '../../contexts/AuthContext';
import useForm from '../../hooks/useForm';
import './LoginForm.scss';

const LoginForm = () => {
	/*STATE & HOOKS */
	const authContext = useAuthContext();
	const location = useLocation();
	const history = useHistory();

	const [loginError, setLoginError] = useState(location?.state?.loginError);
	const {
		inputs,
		errors,
		handleInput,
		handleSubmit,
		isFormValid
	} = useForm();

	const { email, password } = inputs;

	/* HANDLERS */
	const doLogin = () => {
		login(email, password)
			.then(user => {
				authContext.login(user);
				history.push('/');
			})
			.catch(e => {
				setLoginError('Wrong credentials');
			});
	};

	/* RENDER */
	return (
		<form className="Login" onSubmit={e => handleSubmit(e, doLogin)}>
			<div className="Login__body">
				<InputWithLabel
					name="email"
					type="email"
					value={email}
					handleChange={handleInput}
					error={errors.email && '* Invalid email'}
				/>
				<InputWithLabel
					name="password"
					type="password"
					value={password}
					handleChange={handleInput}
					error={errors.password && '* Invalid password'}
				/>
				<p className="Login__reset-password">
					<Link to="#" className="small">
						Forgot your password?
					</Link>
				</p>
			</div>

			{loginError && (
				<p style={{ color: 'red', marginBottom: '1rem' }}>
					{loginError}
				</p>
			)}

			<Button
				text="Log In"
				className="Login__submit-button"
				isDisabled={!isFormValid}
			/>
		</form>
	);
};

export default LoginForm;

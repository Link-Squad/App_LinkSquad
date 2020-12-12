import React, { useState } from 'react';
import InputWithLabel from '../utilities/inputWithLabel/InputWithLabel';
import Button from '../utilities/button/Button';
import { Link,  useHistory, useLocation } from 'react-router-dom';
import { login } from '../../services/api.service';
import validationsFn from '../../constants/validations.constants';
import { useAuthContext } from '../../contexts/AuthContext';
import './LoginForm.scss';
import useForm from '../../hooks/useForm';

const LoginForm = () => {
	/*STATE & HOOKS */
	const authContext = useAuthContext();
	const location = useLocation();
	const history = useHistory();

	const [loginError, setLoginError] = useState(location?.state?.loginError);
	const { inputs, errors, handleInput, handleSubmit} = useForm();

	
	const { email, password } = inputs;
	const isFormValid = Object.values(errors).every(err => !err);

	/* HANDLERS */
	const doLogin = () => {
		login(email, password)
			.then(user => {
				authContext.login(user);
				history.push('/')
			})
			.catch(e => {
				setLoginError(e.response?.data?.message);
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
					error={
						errors.password && '* Invalid password'
					}
				/>
				<Link to="#" className="Login__reset-password small">
					Forgot your password?
				</Link>
			</div>

			

			{loginError && <p style={{ color: 'red' }}>{loginError}</p>}

			<Button
				text="Log In"
				className="Login__submit-button"
				isDisabled={!isFormValid}
			/>
		</form>
	);
};

export default LoginForm;

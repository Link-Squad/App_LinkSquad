import React, { useState } from 'react';
import InputWithLabel from '../utilities/inputWithLabel/InputWithLabel';
import Button from '../utilities/button/Button';
import { Link } from 'react-router-dom';
import { login } from '../../services/api.service';
import TermsAndConditions from '../utilities/termsAndConditions/TermsAndConditions';
import validationsFn from '../../constants/validations.constants';
import { useAuthContext } from '../../contexts/AuthContext';
import './LoginForm.scss';

const LoginForm = () => {
	/*STATE & HOOKS */
	const [state, setState] = useState({
		data: {
			email: '',
			password: ''
		},
		error: {
			email: true,
			password: true
		},
		touch: {}
	});
	const [isAccepted, setIsAccepted] = useState(false);
	const [loginError, setLoginError] = useState(null);

	const authContext = useAuthContext();

	const { data, error, touch } = state;
	const { email, password } = data;
	const isFormValid = isAccepted && Object.values(error).every(err => !err);

	/* HANDLERS */
	const handleSubmit = e => {
		e.preventDefault();
		login(email, password)
			.then(user => authContext.login(user))
			.catch(e => {
				setLoginError(e.response?.data?.message);
			});
	};

	const handleChange = e => {
		const { name, value } = e.target;
		const isValid = validationsFn(name, value);

		setState(prev => {
			return {
				...prev,
				data: {
					...prev.data,
					[name]: value
				},
				error: {
					...prev.error,
					[name]: !isValid
				}
			};
		});
	};

	const handleBlur = e => {
		const { name } = e.target;

		setState(prev => {
			return {
				...prev,
				touch: {
					...touch,
					[name]: true
				}
			};
		});
	};

	/* RENDER */
	return (
		<form className="Login" onSubmit={handleSubmit}>
			<div className="Login__body">
				<InputWithLabel
					name="email"
					type="email"
					value={email}
					handleChange={handleChange}
					handleBlur={handleBlur}
					error={error.email && touch.email && '* Invalid email'}
				/>
				<InputWithLabel
					name="password"
					type="password"
					value={password}
					handleChange={handleChange}
					handleBlur={handleBlur}
					error={
						error.password && touch.password && '* Invalid password'
					}
				/>
				<Link to="#" className="Login__reset-password small">
					Forgot your password?
				</Link>
			</div>

			<TermsAndConditions
				handleChange={() => setIsAccepted(!isAccepted)}
				handleBlur={handleBlur}
			/>
			
					{loginError && <p>{loginError}</p>}

			<Button
				text="Log In"
				className="Login__submit-button"
				isDisabled={!isFormValid}
			/>
		</form>
	);
};

export default LoginForm;

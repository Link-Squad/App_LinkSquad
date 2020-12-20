import React, { useState } from 'react';
import InputWithLabel from '../utilities/inputWithLabel/InputWithLabel';
import Button from '../utilities/button/Button';
import TermsAndConditions from '../utilities/termsAndConditions/TermsAndConditions';
import useForm from '../../hooks/useForm';
import { useHistory, useLocation } from 'react-router-dom';
import { login, signup } from '../../services/api.service';
import { useAuthContext } from '../../contexts/AuthContext';
import './SignupForm.scss';

const SignupForm = () => {
	/*STATE & HOOKS */
	const {
		inputs,
		errors,
		handleInput,
		handleSubmit,
		isFormValid
	} = useForm();
	const location = useLocation();
	const [isAccepted, setIsAccepted] = useState(false);
	const [signupError, setSignupError] = useState(
		location?.state?.signupError
	);

	const authContext = useAuthContext();
	const history = useHistory();

	const { email, password, username } = inputs;

	/* HANDLERS */
	const doSignup = e => {
		signup(inputs)
			.then(() => {
				login(email, password).then(user => {
					authContext.login(user);
					history.push('/fill-details');
				});
			})
			.catch(e => {
				setSignupError(e.response?.data?.message);
			});
	};

	/* RENDER */
	return (
		<form className="Signup" onSubmit={(e) => handleSubmit(e, doSignup)}>
			<div className="Signup__body">
				<InputWithLabel
					name="username"
					type="text"
					value={username}
					handleChange={handleInput}
					error={errors.username && 'This username is not valid'}
				/>
				<InputWithLabel
					name="email"
					type="email"
					value={email}
					handleChange={handleInput}
					error={errors.email && 'This email is not valid'}
				/>

				<InputWithLabel
					name="password"
					type="password"
					value={password}
					handleChange={handleInput}
					error={errors.password && 'Password must be over 5 characters'}
				/>
			</div>

			<TermsAndConditions
				handleChange={() => setIsAccepted(!isAccepted)}
			/>

			{signupError && <p style={{ color: 'red' }}>{signupError}</p>}

			<Button
				text="Create an account"
				className="Signup__submit-button"
				isDisabled={!(isFormValid && isAccepted)}
			/>
		</form>
	);
};

export default SignupForm;

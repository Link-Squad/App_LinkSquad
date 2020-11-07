import React, { useState } from 'react';
import InputWithLabel from '../utilities/inputWithLabel/InputWithLabel';
import Button from '../utilities/button/Button';
import { useHistory, useLocation } from 'react-router-dom';
import { login, signup } from '../../services/api.service';
import TermsAndConditions from '../utilities/termsAndConditions/TermsAndConditions';
import validationsFn from '../../constants/validations.constants';
import { useAuthContext } from '../../contexts/AuthContext';
import './SignupForm.scss';

const SignupForm = () => {
	/*STATE & HOOKS */
	const [state, setState] = useState({
		data: {
			username: '',
			email: '',
			password: ''
		},
		error: {
			username: true,
			email: true,
			password: true
		},
		touch: {}
	});
	const location = useLocation();
	const [isAccepted, setIsAccepted] = useState(false);
	const [signupError, setSignupError] = useState(
		location?.state?.signupError
	);

	const authContext = useAuthContext();
	const history = useHistory();

	const { data, error, touch } = state;
	const { email, password, username } = data;
	const isFormValid = isAccepted && Object.values(error).every(err => !err);

	/* HANDLERS */
	const handleSubmit = e => {
		e.preventDefault();
		signup(data)
			.then(() => {
				login(data.email, data.password).then((user) => {
					authContext.login(user);
					history.push('/fill-details');
				});
			})
			.catch(e => {
				setSignupError(e.response?.data?.message);
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
		<form className="Signup" onSubmit={handleSubmit}>
			<div className="Signup__body">
				<InputWithLabel
					name="username"
					type="text"
					value={username}
					handleChange={handleChange}
					handleBlur={handleBlur}
					error={
						error.username && touch.username && '* Invalid username'
					}
				/>
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
			</div>

			<TermsAndConditions
				handleChange={() => setIsAccepted(!isAccepted)}
				handleBlur={handleBlur}
			/>

			{signupError && <p style={{ color: 'red' }}>{signupError}</p>}

			<Button
				text="Create an account"
				className="Signup__submit-button"
				isDisabled={!isFormValid}
			/>
		</form>
	);
};

export default SignupForm;

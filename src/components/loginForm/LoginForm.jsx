import React, { useState } from "react";
import InputWithLabel from "../utilities/inputWithLabel/InputWithLabel";
import Button from "../utilities/button/Button";
import "./LoginForm.scss";
import { Link } from "react-router-dom";
import { login } from "../../services/api.service";
import TermsAndConditions from "../utilities/termsAndConditions/TermsAndConditions";
import validationsFn, {
	validationFn
} from "../../constants/validations.constants";

const LoginForm = () => {
	/*STATE & HOOKS */
	const [state, setState] = useState({
		data: {
			email: "",
			password: ""
		},
		error: {
			email: "",
			password: "",
		},
		touch: {}
	});
	const [isAccepted, setIsAccepted] = useState(false);
	const [loginError, setLoginError] = useState(null);

	const { data, error, touch } = state;
	const { email, password } = data;
	const isError = !isAccepted && Object.values(error).some(err => err)

	/* HANDLERS */
	const handleSubmit = e => {
		e.preventDefault();
		login(email, password)
			.then(user => console.log(user))
			.catch(e => {
				setLoginError(e.response?.data?.message);
			});
	};

	const handleChange = e => {
		const { name, value } = e.target;
		const isValid = validationsFn(value);

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

	return (
		<form className="Login" onSubmit={handleSubmit}>
			<div className="Login__body">
				<InputWithLabel
					name="email"
					type="email"
					value={email}
					handleChange={handleChange}
					handleBlur={handleBlur}
				/>
				<InputWithLabel
					name="password"
					type="password"
					value={password}
					handleChange={handleChange}
					handleBlur={handleBlur}
				/>
				<Link to="#" className="Login__reset-password small">
					Forgot your password?
				</Link>
			</div>

			{error && <p>There was an error: {error.message} </p>}

			<TermsAndConditions
				handleChange={() => setIsAccepted(!isAccepted)}
				handleBlur={handleBlur}
			/>
			<Button text="Log In" className="Login__submit-button" isDisabled={isError} />
		</form>
	);
};

export default LoginForm;

import React, { useState } from 'react';
import Layout from '../layout/Layout';
import LoginForm from '../loginForm/LoginForm';
import SignupForm from '../signupForm/SignupForm';
import Button from '../utilities/button/Button';
import './Auth.scss';

const Auth = () => {
	const [formToDisplay, setFormToDisplay] = useState('login');

	const handleClick = e => {
		const { value } = e.target;
		setFormToDisplay(value);
	};

	return (
		<Layout withFooter={true} withHeader={true}>
			<main className="Auth form">
				{formToDisplay === 'login' ? <LoginForm /> : <SignupForm />}
					<div className="Auth__buttons">
						<Button
							text="Log In"
							alt={formToDisplay !== 'login'}
							value={'login'}
							handleClick={handleClick}
						/>
						<Button
							text="Sign Up"
							alt={formToDisplay === 'login'}
							value={'signup'}
							handleClick={handleClick}
						/>
					</div>
					<img
						className="Auth__img"
						src="/img/controller.png"
						alt="controller logo"
					/>
			</main>
		</Layout>
	);
};

export default Auth;

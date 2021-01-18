import React, { useState } from 'react';
import Layout from '../layout/Layout';
import LoginForm from '../loginForm/LoginForm';
import SignupForm from '../signupForm/SignupForm';
import Button from '../utilities/button/Button';
import './Auth.scss';

const Auth = () => {
	const [hasAccount, setHasAccount] = useState('true');

	const handleClick = e => {
		const { value } = e.target;
		setHasAccount(value);
	};

	return (
		<Layout withFooter={true} withHeader={true}>
				<main className="Auth form">
					<section className="Auth__form">
						{hasAccount === 'true' ? <LoginForm /> : <SignupForm />}
					</section>
					<section className="Auth__nav-wrapper">
						<div className="Auth__nav-buttons">
							<Button
								text="Log In"
								alt={hasAccount !== 'true'}
								value={'true'}
								handleClick={handleClick}
							/>
							<Button
								text="Sign Up"
								alt={hasAccount === 'true'}
								value={'false'}
								handleClick={handleClick}
							/>
						</div>
						<img
							className="Auth__img"
							src="/img/controller.png"
							alt="controller logo"
						/>
					</section>
				</main>
		</Layout>
	);
};

export default Auth;

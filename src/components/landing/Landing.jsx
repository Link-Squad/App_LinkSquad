import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../loginForm/LoginForm';
import './Landing.scss';

const Landing = () => {
	return (
		<main className="Landing">
			<section className="Landing__form">
					<LoginForm />
			</section>
			<section className="Landing__nav-wrapper">
				<div className="Landing__nav-links">
					<Link
						to="/login"
						className="button--fake"
					>
						Log in
					</Link>
					<Link
						to="/signup"
						className="button--fake-alt"
					>
						Sign up
					</Link>
				</div>
					<img
						className="Landing__img"
						src="/img/controller.png"
						alt="controller logo"
					/>
			</section>
		</main>
	);
};

export default Landing;

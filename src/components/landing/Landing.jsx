import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import LoginForm from '../loginForm/LoginForm';
import './Landing.scss';

const Landing = () => {
	return (
		<main className="Landing">
			<nav className="Landing__nav">
				<Link to="/login" className="Button Button--primary Button--fake small">
					Log in
				</Link>
				<Link to="/signup" className="Button Button--alt Button--fake small">
					Sign up
				</Link>
			</nav>
			<section className="Landing__body">
				<div className="Landing__form">
					<LoginForm />
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

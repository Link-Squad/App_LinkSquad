import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../loginForm/LoginForm";
import "./Landing.scss";

const Landing = () => {
	return (
		<main className="Landing">
			<nav className="Landing__nav">
				<Link to="/login" className="Button Button--primary Button--fake small">Log in</Link>
				<Link to="/signup" className="Button Button--alt Button--fake small">Sign up</Link>
			</nav>
			<section className="Landing__body">
				<div className="Landing__form">
					<LoginForm />
				</div>
				<div className="Landing__sidebar">
					<img className="Landing__img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Controller.svg/1024px-Controller.svg.png" height="265" width="265" alt="controller logo"/>
				</div>
			</section>
		</main>
	);
};

export default Landing;

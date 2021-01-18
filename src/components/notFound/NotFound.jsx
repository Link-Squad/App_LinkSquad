import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';
import './NotFound.scss';

const NotFound = () => (
	<Layout>
		<article className="NotFound card">
			<h1 className="NotFound__title title">404 - Not Found!</h1>
			<p className="NotFound__text">
				The page you requested was not found
			</p>
			<Link to="/" className="NotFound__link button--fake">
				Go Back
			</Link>
		</article>
	</Layout>
);

export default NotFound;

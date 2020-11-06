import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContext';

const RedirectToHome = () => (
	<Redirect
		to={{
			pathname: '/home'
		}}
	/>
);

const UnauthenticatedRoute = props => {
    const { user } = useAuthContext();

	return (
		<Route
			{...props}
			component={!user ? props.component : RedirectToHome}
		/>
	);
};

export default UnauthenticatedRoute;

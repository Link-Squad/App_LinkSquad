import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './components/auth/Auth';
import NotFound from './components/notFound/NotFound';
import UserProfile from './components/profiles/userProfile/UserProfile';
import ShowResults from './components/showResults/ShowResults';
import AuthenticatedRoute from './components/utilities/authenticatedRoute/AuthenticatedRoute';
import UnauthenticatedRoute from './components/utilities/unauthenticatedRoute/UnauthenticatedRoute';
import FillDetails from './components/fillDetails/FillDetails';
import MyProfile from './components/profiles/myProfile/MyProfile';
import HomeRedirect from './components/homeRedirect/HomeRedirect';
import './App.scss';

const App = () => {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={HomeRedirect} />
				<UnauthenticatedRoute exact path="/login" component={Auth} />
				<AuthenticatedRoute
					exact
					path="/user/:id"
					component={UserProfile}
				/>
				<AuthenticatedRoute
					exact
					path="/profile"
					component={MyProfile}
				/>
				<AuthenticatedRoute
					exact
					path="/fill-details"
					component={FillDetails}
				/>
				<Route exact path="/results" component={ShowResults} />
				<Route component={NotFound} />
			</Switch>
		</div>
	);
};

export default App;

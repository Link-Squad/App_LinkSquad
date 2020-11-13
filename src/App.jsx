import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './components/auth/Auth';
import Header from './components/header/Header';
import Home from './components/home/Home';
import NotFound from './components/notFound/NotFound';
import UserProfile from './components/profiles/userProfile/UserProfile';
import Results from './components/results/Results';
import Footer from './components/footer/Footer';
import AuthenticatedRoute from './components/utilities/authenticatedRoute/AuthenticatedRoute';
import UnauthenticatedRoute from './components/utilities/unauthenticatedRoute/UnauthenticatedRoute';
import FillDetails from './components/fillDetails/FillDetails';
import MyProfile from './components/profiles/myProfile/MyProfile';
import './App.scss';

const App = () => {
	return (
		<div className="App">
			<Header />
			<div
				className="App__container"
				style={{ backgroundImage: 'url(./background.png)' }}
			>
				<div className="App__content">
					<Switch>
						<AuthenticatedRoute exact path="/" component={Home} />
						<UnauthenticatedRoute
							exact
							path="/login"
							component={Auth}
						/>
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
						<Route exact path="/results" component={Results} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</div>

			<Switch>
				<Route exact path="/login" component={Footer} />
			</Switch>
		</div>
	);
};

export default App;

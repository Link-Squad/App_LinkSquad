import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import NotFound from "./components/notFound/NotFound";
import Profile from "./components/profile/Profile";
import './App.scss';

const App = () => {
	return (
		<div className="App">
			<Header />
      <div className='App__container' style={{backgroundImage: 'url(./background.png)'}}>
        <div className="App__content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Landing} />
            <Route exact path="/profile" component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
		</div>
	);
};

export default App;

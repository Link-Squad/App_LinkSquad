import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Header from './components/header/Header';
import Home from './components/home/Home';
import NotFound from './components/notFound/NotFound';
import LoginForm from './components/loginForm/LoginForm';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/landing' component={Landing} />
        <Route component={NotFound} />
      </Switch>
      <LoginForm />
    </div>
  );
}

export default App;

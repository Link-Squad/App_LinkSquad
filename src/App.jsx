import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Header from './components/header/Header';
import Home from './components/home/Home';
import NotFound from './components/notFound/NotFound';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/' component={Landing} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

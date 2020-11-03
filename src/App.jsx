import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Header from './components/header/Header';
import Home from './components/home/Home';
import NotFound from './components/notFound/NotFound';
import Profile from './components/profile/Profile';
import './App.scss';
import Results from './components/results/Results';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <div
        className='App__container'
        style={{ backgroundImage: 'url(./background.png)' }}
      >
        <div className='App__content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Landing} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/results' component={Results} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>

     <Switch>
      <Route exact path='/login' component={Footer} />
     </Switch> 
    </div>
  );

};

export default App;

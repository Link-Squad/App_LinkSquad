import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss'

 const NotFound = () => (
  <main className="NotFound card">
    <h1 className="NotFound__title title">404 - Not Found!</h1>
    <p className="NotFound__text">
      The page you requested was not found
    </p>
    <Link to="/" className="NotFound__link">
      Go Back
    </Link>
  </main>
);

export default NotFound;
import React from 'react';
import './AboutMe.scss';

const AboutMe = ({ user }) => {
  
  return (
    <article className='AboutMe card'>
      <h2>About Me</h2>
      <div className='AboutMe__body'>
        <p>{user.bio || 'This is an awesome bio!'}</p>
      </div>
    </article>
  );
};

export default AboutMe;

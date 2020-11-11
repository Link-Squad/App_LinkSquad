import React from 'react';
import './AboutMe.scss';

const AboutMe = ({ user }) => {
  
  return (
    <section className='AboutMe card'>
      <h2 className="AboutMe__title">About Me</h2>
        <p className="AboutMe__body">{user.bio || 'This is an awesome bio!'}</p>
    </section>
  );
};

export default AboutMe;

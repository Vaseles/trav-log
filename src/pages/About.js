import React from 'react';
import Content from '../components/Content';
import Menu from '../components/Menu';

function About() {
  return (
    <>
    <div className='about'>
      <div className='container'>
        <div class = "about__item">
          <div className='about__menu'>
            < Menu/>
            </div>
          <div className='about__content'>
            <Content />
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
import React from 'react';
import stars from '../stars.mp4';

function Header(props) {
  const { data } = props;
  const { name, description, social } = data;
  const networks = social.map((network) => (
    <li key={network.name}>
      <a href={network.url}>
        <i className={network.className}></i>
      </a>
    </li>
  ));

  return (
    <header id='home'>
      {/*
      <nav id='nav-wrap'>
        <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
          Show navigation
        </a>
        <a className='mobile-btn' href='#home' title='Hide navigation'>
          Hide navigation
        </a>
        <ul id='nav' className='nav'>
          <li className='current'>
            <a className='smoothscroll' href='#home'>
              Home
            </a>
          </li>
          <li>
            <a className='smoothscroll' href='#about'>
              About
            </a>
          </li>
          <li>
            <a className='smoothscroll' href='#portfolio'>
              Projects
            </a>
          </li>
          <li>
            <a className='smoothscroll' href='#contact'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      */}
              <video className="myVideo" loop autoPlay muted>
         <source src={stars} type='video/mp4' />
         <source src={stars} type='video/ogg' />
         Your browser does not support the video tag.
       </video>
      <div className='row banner'>
        <div className='banner-text'>
          <h1 className='responsive-headline'>Greetings, I'm {name.first}.</h1>
          <h3>
            {description}
          </h3>
          <hr />
          <ul className='social'>{networks}</ul>
        </div>
      </div>
      {/*
      <p className='scrolldown'>
        <a className='smoothscroll' href='#about'>
          <i className='icon-down-circle'></i>
        </a>
      </p> */}
    </header>
  );
}

export default Header;

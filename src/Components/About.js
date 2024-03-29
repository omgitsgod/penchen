import React from 'react';

function About(props) {
  const { data } = props;
  const { name, image, bio, address, email } = data;
  const { city, state } = address;
  const profilepic = `images/${image}`;

  return (
    <section id='about'>
      <div className='row'>
        <div className='three columns'>
          <img
            className='profile-pic'
            src={profilepic}
            alt='Ryans Profile Pic'
          />
        </div>
        <div className='nine columns main-col'>
          {bio && (
            <div>
              <h2>About Me</h2>
              <p>{bio}</p>
            </div>)}
          <div className='row'>
            <div className='columns contact-details'>
              <h2>Contact Details</h2>
              <p className='address'>
                <span>{name.full}</span>
                <br />
                <span>
                  {city}, {state}
                </span>
                <br />
                <span>{email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

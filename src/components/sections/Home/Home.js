import React from 'react';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/front.jpg';
import Link from '../../UI/Link/Link';

const home = () => {
  return (
    <Section id='home'>
      <div>
        <div
          className='home-content p-5'
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className='intro container text-center text-light'>
            <h1 className='title'>Short-Term Rental Management</h1>
            <h2 className='sub-title mb-4'>
              We manage your Airbnb so you don't have to.<br></br>
              Pass the Keys eliminate all the hassle out of Airbnb.
            </h2>
            <Link target='contact' classes='btn btn-danger rounded-3 mr-2 color'>
              Easy start
            </Link>
            <Link target='about' classes='btn btn-light text-dark rounded-3'>
              Our clients
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default home;

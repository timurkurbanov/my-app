import React from 'react';
import Logo_Airbnb from '../../../assets/img/Logo_Airbnb.svg';
import Logo_Booking from '../../../assets/img/Logo_Booking.svg';
import Logo_Expedia from '../../../assets/img/Logo_Expedia.svg';
import Logo_Homeaway from '../../../assets/img/Logo_Homeaway.svg';
import Section from '../../../HOC/Section';
import aboutImage from '../../../assets/img/about.jpg';

const about = () => {
  return (
    <Section id='about'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
          <span>Start to Finish</span> We take care of it!<br></br> Bookings, cleaning, laundry.
          </h3>
          <div className="HowWeDoIt-Prop">            
            <div className="HowWeDoIt-logo"><h4>Our properties are featured on</h4></div>
            <div className="HowWeDoIt-Hero pt-5 pb-5">
                <div><img className="HowWeDoIt-img" src={Logo_Airbnb}/></div>
                <div><img className="HowWeDoIt-img" src={Logo_Booking}/></div>
                <div><img className="HowWeDoIt-img" src={Logo_Expedia}/></div>
                <div><img className="HowWeDoIt-img" src={Logo_Homeaway}/></div>
            </div>
            </div>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-12 col-lg-6 mb-3'>
              <div className='aboutImage'>
                <img src={aboutImage} alt='about company' />
              </div>
            </div>
            <div className='col-md-12 col-lg-6'>
              <h3 className='about-title'>About us</h3>
              <div className='about-description'>
                <p>
                We are the Canada's leading short-let property management company.
                </p>
                <p>
                Toronto is one of the world’s most dynamic and fascinating cities, and therefore it should come as no surprise that it is the second most popular city in the world for Airbnb and other short-letting platforms.
                </p>
                <p>
                Every property owner is paired with a dedicated account manager who'll create your property listing, answer any questions you may have and offer proactive advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default about;

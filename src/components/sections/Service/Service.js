import React from 'react';
import Section from '../../../HOC/Section';

const Service = () => {
  return (
    <Section id='services'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
          <span>Start to Finish</span> We take care of it!<br></br> Bookings, cleaning, laundry.
          </h3>
        </div>
        <div className='section-content'>
          <div className='row'>
            
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='far fa-paper-plane' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Earn 80-100% more income!</h5>
                  <p className='service-description'>
                  We maximize your nightly rates so you can earn more than with traditional property rentals.
                  </p>
                    <ul>
                        <li>Growth Analytics</li>
                        <li>Competitor price monitoring</li>
                        <li>Promotions for recurring guests</li>
                        <li>Personal touch to Guests Experience</li>
                    </ul>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-gem' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>We are Airbnb super hosts!</h5>
                  <p className='service-description'>
                  Our approach to hosting goes beyond cleaning by reimagining what’s possible for customer experience.
                  </p>
                        <ul>
                            <li>Guest screening</li>
                            <li>Professional photography</li>
                            <li>Guest communication</li>
                            <li>24/7 check-in</li>
                            <li>Cleaning</li>
                            <li>Laundry</li>
                        </ul>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='far fa-life-ring' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Maximum Occupancy of your property</h5>
                  <p className='service-description'>
                  We use dynamic pricing to fill any open dates to get the most out of your property. 
                  </p>
                  <ul>
                        <li>Daily price checking</li>
                        <li>Discounts for longer stays</li>
                        <li>Local events promotions</li>
                        <li>Special offers</li>
                        <li>Excellent customer service</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Service;

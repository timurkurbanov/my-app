import React from 'react';

import Link from '../Link/Link';

const footer = () => {
  return (
    <footer className=''>
      <div className='container text-light pt-5'>
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-lg-4 mb-5'>
            <div className='footer-title'>
              <h6>About Us</h6>
            </div>
            <div className='footer-content'>
              <p>
                <small className='text-muted'>
                We are a full service operation property management company.  We give homeowners the ability to increase short-term rental income without any hassle. 
                We list and fully manage your property on short-letting sites like Airbnb, so you don't have to.
                </small>
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-2 mb-5'>
            <div className='footer-title'>
              <h6>Quick Links</h6>
            </div>
            <div className='footer-content'>
              <ul className='list-group quick-links'>
                <li>
                  <Link target='home' offset={-120}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link target='about'>About</Link>
                </li>
                <li>
                  <Link target='services'>Services</Link>
                </li>
                <li>
                  <Link target='blog'>Our Clients</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Contact Us</h6>
            </div>
            <div className='footer-content'>
              <p className='text-muted'>
                <small>Phone : +1 647 803 6515</small>
              </p>
              <p className='text-muted'>
                <small>E-mail : contact@passthekeys.ca</small>
              </p>
              <div className='social-media mt-4'>
                <a href='!#' className='text-light'>
                  <i className='fab fa-facebook-f mr-4' />
                </a>
                <a href='!#' className='text-light'>
                  <i className='fab fa-twitter mr-4' />
                </a>
                <a href='!#' className='text-light'>
                  <i className='fab fa-instagram mr-4' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-footer pt-3 pb-3 text-center'>
        <small>© All Right Reserved. Design By <a href="https://timkurbanov.ca">timkurbanov.ca</a></small>
      </div>
    </footer>
  );
};

export default footer;

import React from 'react';

const topBar = () => {
  return (
    <div className='top-bar pt-1 pb-1'>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex pt-2 pb-2'>
            <div className='d-flex align-item-center mr-3'>
              <i className='fas fa-phone-alt mr-2' />
              <small>+1 647 803 6515</small>
            </div>
            <div className='d-flex align-item-center'>
              <i className='fas fa-envelope mr-2' />
              <small>contact@passthekeys.ca</small>
            </div>
          </div>
          <div className='d-flex pt-2 pb-2'>
            <div className='social-media d-flex align-item-center'>
              <a href='!#' className='text-light'>
                <i className='fab fa-facebook-f mr-4' />
              </a>
              <a href='!#' className='text-light'>
                <i className='fab fa-twitter mr-4' />
              </a>
              <a href='https://www.instagram.com/passthekeys/' className='text-light'>
                <i className='fab fa-instagram mr-4' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default topBar;

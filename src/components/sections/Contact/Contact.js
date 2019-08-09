import React from 'react';

import Section from '../../../HOC/Section';

const contact = () => {
  return (
    <Section id='contact'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Contact </span>Us
          </h3>
          <p>We always love to hear from you...</p>
          <p>Share your ideas (the wackier the better!),<br></br>
          pick our brain, or if you would like to become our client<br></br>
          do get in touch.</p>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-9 col-lg-7 mr-auto ml-auto'>
              <form action="https://formspree.io/1tkurbanov@gmail.com" method="POST">
                <div className='form-group'>
                  <input
                    type='text'
                    name="name"
                    className='form-control rounded-0'
                    aria-describedby='emailHelp'
                    placeholder='Name'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    name="name"
                    className='form-control rounded-0'
                    aria-describedby='emailHelp'
                    placeholder='Email'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='phone'
                    name="name"
                    className='form-control rounded-0'
                    aria-describedby='emailHelp'
                    placeholder='Phone number'
                  />
                </div>
                <div className='form-group'>
                  <textarea
                    name="name"
                    className='form-control rounded-0'
                    rows='5'
                    placeholder="What's the chat? (there's no work limit so knock yourself out - jokes and life stories welcome!)"
                  />
                </div>
                <div className='form-group text-center'>
                  <button className='btn btn-block btn-danger rounded-3 mr-auto ml-auto'>
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default contact;

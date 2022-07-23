import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='headBg'>
            <section className='head'>
                 <div className='container flexSB'>
                      <div className='logo'>
                          <h1>EASY ACADEMIA</h1>
                          <span>ONLINE EDUCATION & LEARNING</span>
                       </div>
                       <div className='social'>
                           <i className='fab fa-facebook-f icon'></i>
                           <i className='fab fa-twitter icon'></i>
                           <i className='fab fa-google icon'></i>
                           <i className='fab fa-instagram icon'></i>
                           <i className='fab fa-linkedin-in icon'></i>
                        </div>
                  </div>
                  <div className='header'>
                        <nav>
                             <a href="/">Home</a>
                             <a href="/">Courses</a>
                             <a href="/">About</a>
                             <a href="/">Team</a>
                             <a href="/">Pricing</a>
                              <a href="/">Journal</a>
                              <a href="/">Contact</a>
                              <div className='start'>Get started</div>
                        </nav>
                  </div>
            </section>
        </div>
    );
};

export default Header;
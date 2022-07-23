import React from 'react';
import './About.css';
import pic from '../../images/about.jpg';
const About = () => {
    return (
        <div>
           <div className='about'>
              <div className='container flexSB'>
                    <div className='leftRow'>
                      <img src={pic} alt='' />
                    </div>
                    <div className='rightRow'>
                        <h5>Learn Anything</h5>
                        <h1>Benefit About Online Learning Expertise</h1>
                        <div className='items'>
                           <div className='item flexSB'>
                              <div className='img'>
                                  <img src='	https://img.icons8.com/dotty/80/000000/storytelling.png' alt='' />
                                </div>
                               <div className='text'>
                                  <h2>Online courses</h2>
                                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                           </div>
                           <div className='item flexSB'>
                              <div className='img'>
                                  <img src='https://img.icons8.com/ios/80/000000/diploma.png' alt='' />
                                </div>
                               <div className='text'>
                                  <h2>Earn A Certificate</h2>
                                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                           </div>
                           <div className='item flexSB'>
                              <div className='img'>
                                  <img src='	https://img.icons8.com/ios/80/000000/athlete.png' alt='' />
                                </div>
                               <div className='text'>
                                  <h2>Learn With Expert</h2>
                                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default About;
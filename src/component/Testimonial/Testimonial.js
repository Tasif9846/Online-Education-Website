import React from 'react'
import './Testimonial.css';
export const Testimonial = () => {
  return (
    <div>
        <div className="Testimonial">
            <div className="container flexSB">
                <div className="Test_head">
                    <h5>TESTIMONIAL</h5>
                    <h1>Our Successful Students</h1>
                </div>
            </div>
            <div className="testimonialCard">
              <div className="grid2">
                   <div className='items'>
                       <div className='content flex'>
                           <div className='left'>
                              <div className='img'>
                                 <img src='https://scintillating-smakager-860376.netlify.app/images/testo/t1.webp' alt='' />
                                 <i className='fa fa-quote-left icon'></i>
                              </div>
                           </div>
                           <div className='Name'>
                               <h2>ROGER SCOTT</h2>
                               <span>Marketing Manager</span>
                           </div>
                        </div>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div className='items'>
                       <div className='content flex'>
                           <div className='left'>
                              <div className='img'>
                                 <img src='https://scintillating-smakager-860376.netlify.app/images/testo/t2.webp' alt='' />
                                 <i className='fa fa-quote-left icon'></i>
                              </div>
                           </div>
                           <div className='Name'>
                               <h2>ROGER SCOTT</h2>
                               <span>Marketing Manager</span>
                           </div>
                        </div>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div className='items'>
                       <div className='content flex'>
                           <div className='left'>
                              <div className='img'>
                                 <img src='https://scintillating-smakager-860376.netlify.app/images/testo/t3.webp' alt='' />
                                 <i className='fa fa-quote-left icon'></i>
                              </div>
                           </div>
                           <div className='Name'>
                               <h2>ROGER SCOTT</h2>
                               <span>Marketing Manager</span>
                           </div>
                        </div>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
              </div>
         </div>
        </div>
    </div>
  )
}

import React from 'react'
import './Newsletter.css'
export const Newsletter = () => {
  return (
    <div>
        <div className='Newsletter'>
              <div className='container flexSB'>
                    <div className='leftRow'>
                      <h1>Newsletter - Stay tune and get the latest update</h1>
                      <span>Far far away, behind the word mountains</span>
                    </div>
                    <div className='rightRow'>
                        <input type='text' placeholder='Enter your email' />
                        <i className='fa fa-paper-plane'></i>
                    </div>
                </div>
           </div>
           <div className='footer'>
              <p>Copyright ©2022 All rights reserved | This template is made with 
                <i className='fa fa-heart'></i>  "by me"</p>
           </div>
    </div>
  )
}

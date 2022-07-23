import React from 'react';
import './Body.css';
const Body = () => {
    return (
        <div>
            <div className='Body'>
                <div className='container'>
                    <div className='row'>
                        <h5>Welcome to Easy Academia</h5>
                        <h1>Best Online Education <span>Expertise</span></h1>
                        <p>Far far away,behind the word mountains, far from the countries there live the blind texts </p>
                        <div className='button'>
                            <button className='primary_btn'>
                                Get started Now <i className='fa fa-long-arrow-alt-right'></i>
                            </button>
                            <button>
                               View courses <i className='fa fa-long-arrow-alt-right'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Body;
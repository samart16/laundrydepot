import React from 'react'
// import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div  id='footer' className='footer-container'>
        <section className='footer-subscription'>
        <h2>Laundry Depot <i className='fa fa-eercast'></i></h2>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                <a
                        role='button'
                        className='btn btn-link'
                        href='tel:+1+19726855540'
                    >
                        <i className='fa fa-phone' /> 1-972-685-5540
                    </a>
                    <br />
                    <a
                        role='button'
                        className='btn btn-link'
                        href='mailto:laundrydepottx@gmail.com'
                    >
                        <i className='fa fa-envelope-o' /> laundrydepottx@gmail.com
                    </a>
                    <br />
                    <a
                        role='button'
                        className='btn btn-link'
                        href='https://goo.gl/maps/W7tFrixdWMqHoGuA6'
                    >
                        <i className='fa  fa-address-card'></i>

                        2840 N Buckner Blvd
                        <br />
                        Dallas, TX 75228
                        <br />
                        U.S.A.
                    </a>
                     
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
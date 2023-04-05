import React from 'react'
// import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div  id='footer' className='footer-container'>
        <section className='footer-subscription'>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About us</h2>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About us</h2>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
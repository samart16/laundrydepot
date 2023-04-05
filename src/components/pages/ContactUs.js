import React from 'react';
import '../ContactUs.css'
import CardItem from '../CardItem';

function FeedbackForm() {

    return (
        <div className='contact-container'>
            <div className='contact-row'>
                <div className='contact-col'>
                    <h1>Contact Us</h1>
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
            )
}

            export default FeedbackForm;
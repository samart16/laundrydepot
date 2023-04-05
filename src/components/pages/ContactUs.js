import React from 'react';
import '../ContactUs.css'

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
                        href='//https://www.google.com/maps/place/Laundry+Depot/@32.8107488,-96.684367,16.48z/data=!4m6!3m5!1s0x864ea15fe3b7d985:0xe732e883edd14303!8m2!3d32.8115156!4d-96.6849155!16s%2Fg%2F11f08dhbr9'
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
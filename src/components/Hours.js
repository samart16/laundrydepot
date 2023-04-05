import React from 'react'
import './Hours.css'

const Hours = () => {

    return (
        <div className='home-container'>
            <div className='home-row'>
                <section className='home-col'>
                    <h1>Location</h1>
                    <br />
                    <p>We are conveniently located in northeast Dallas
                    in between  N Buckner Blvd and Peavy Road and we're open 7 days
                    a week!</p>
                    <br/>
                    <address>
                    2840 N Buckner Blvd
                    Dallas, Tx 75228
                    </address>
                </section>
                <section className='home-col'>
                    <h1>Hours of Operation </h1>
                    <br />
                    {/* <h2>Hours</h2> */}
                    <div className="hours-row">
                        <div id='hours-col'>
                            <p>Tues. - Thurs.</p>
                            <ul>
                                <li>7:30am - 9pm</li>
                                <li>Last Wash: 8pm</li>
                            </ul>
                        </div>
                        <div id='hours-col'>
                            <p>Fri. - Mon.</p>
                            <ul>
                                
                                <li>7:30am - 10pm</li>
                                <li>Last Wash: 9pm</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Hours; 
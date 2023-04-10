import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

const Cards = () => {
    return (
        <div className='cards'>
            <h1>Our Services</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/washers.jpeg'
                            text='Enjoy a clean, fast, and affordable experience in our facility. 
                            We offer highly efficient equipment with frequent availability.'
                            label='Self Service'
                            path='/' />
                        <CardItem
                            src='images/foldingclothes.jpg'
                            text='Drop off your laundry and we will wash, dry, and fold it for you in a timely manner 
                            while you handle your daily tasks.'
                            label='Drop Off Service'
                            path='/' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
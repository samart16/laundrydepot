import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import FirstSec from '../FirstSec';
import Hours from '../Hours';


const Home = () => {
    return (
        <>
            <FirstSec />
            <Hours/>
            <Cards/>
        </>
    );
}

export default Home;
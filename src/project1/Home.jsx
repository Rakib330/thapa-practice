import React from 'react';
import Common from './Common';
import web from './Images/1b.png';

const Home =()=>{
    return(
        <>
            <Common name="Grow Up Your Business With" imgsrc={web} visit="/service" btnname="Get Started"/>
        </>
    );
};

export default Home;
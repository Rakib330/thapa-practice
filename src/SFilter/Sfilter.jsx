import React, { useState } from 'react';
import './sfilter.css';

const Sfilter = ()=>{
    const [data,setdata]=useState('');
    const search = (event)=>{
        const info = event.target.value;
        setdata(info);
    };
    const img = `https://source.unsplash.com/featured/?${data}`;
    return (
        <>
            <div className="sfilter">
            <h3>Image Search Filter App, সার্চ করুন ছবি দেখুন...</h3>
                <input type="text" onChange={search} value={data} placeholder="Search Anything..."/>
                {data === '' ? null :
                <img src={img} alt="search Image"/>}
            </div>
        </>
    );
};
export default Sfilter;
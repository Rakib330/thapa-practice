import React, { useEffect, useState } from 'react';
import './useeff.css';

const UseEff =()=>{
    const [num,setnum] =useState(0);
    useEffect(()=>{
        document.title=`You clicked me ${num} times`;
    });
    const clikk = ()=>{
        setnum(num+1);
    };
    return(
        <>
            <div className="useeff">
                <h1>useEffect() এর ব্যবহার!</h1>
                <p>টাইটেলে লক্ষ করুন...</p>
                <button onClick={clikk}>  Click {num}</button>
            </div>
        </>
    );
};
export default UseEff;
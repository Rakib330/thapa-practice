import React, { useState } from 'react';
import './inc.css';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Button from '@material-ui/core/Button';


const Inc = () =>{
    const [single,setsingle] =useState(0);
    // const incr = () =>{
    //     if(single >= 0){
    //         setsingle(single +1);
    //     }
    //     else{
    //         setsingle(0);
    //     }
    // };

    const incr = () =>{
        return (single >= 0) ? setsingle(single +1) : setsingle(0);
    };
        
    const decr = () =>{
        if(single === 0){
            setsingle("আর কত নিচে নামবা😒");
        }else if(single > 0){
            setsingle(single -1);
        }else{
            setsingle(0);
        }
    };
    return(
        <>
            <div className="inc">
                <div className="card">
                    <h1>{single}</h1>
                    <div className="btn">
                        <Button onClick={incr}><ArrowUpwardIcon/></Button>
                        <Button onClick={decr}><ArrowDownwardIcon/></Button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Inc;
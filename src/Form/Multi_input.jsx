import React, { useState } from 'react';
import './multi_input.css';

const Multi_input = () =>{
    const [fullname ,setfullname] = useState({
        fname:'',
        lname:'',
        email:'',
        number:''
    });

    const evento = (evinto) =>{
            console.log(evinto.target.value);
            console.log(evinto.target.name);
        const {value,name} = evinto.target;
        setfullname((old) =>{
            return{
                ...old,
                [name]:value,
            };
        });
    };
    const getit = (tasu) =>{
        tasu.prevenDefault();
    };
    
    return(
    <div className="form-main">
        <h1>I am, {fullname.fname} {fullname.lname}</h1>
        <p>{fullname.email}</p>
        <p>{fullname.number}</p>
        <form onSubmit={getit}>
            <input onChange={evento} name='fname' type="text" value={fullname.fname} placeholder="Type Your First Name"/>
            <input onChange={evento} name='lname' type="text" value={fullname.lname} placeholder="Type Your Last Name"/>
            <input onChange={evento} name='email' type="email" value={fullname.email} placeholder="Type Your Email"/>
            <input onChange={evento} name='number' type="number" value={fullname.number} placeholder="Type Your Number"/>
            <button>Enter</button>
        </form>
    </div>
    );
};
export default Multi_input;
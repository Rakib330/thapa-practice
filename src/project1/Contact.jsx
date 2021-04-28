import React, { useState } from 'react';

const Contact =()=>{
    const [data,setdata] =useState({
        fullname:'',
        phone:'',
        email:'',
        msg:''
    });
    const inputEvent = (event)=>{
        const {name,value} = event.target;
        setdata((preVal)=>{
            return{
                ...preVal,
                [name] : value,
            };
        });
    };
    const formSubmit = (e)=>{
        e.preventDefault();
        alert(`You are ${data.fullname}. Your Mobile ${data.phone} and Your Email is ${data.email}. You Say ${data.msg}...`);
    };
    return(
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter Your Name"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Phone</label>
                        <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Enter Your Mobile"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="Enter Your Email"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={inputEvent} rows="3"></textarea>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-outline-primary" type="submit">Submit</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Contact;
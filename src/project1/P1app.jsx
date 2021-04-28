import React from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from './Navbar';
import './p1app.css';
import { Redirect, Route, Switch } from 'react-router';
import Footer from './Footer';

const P1app =()=>{
    return(
        <>
        <div className="pProject">
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/service" component={Services}/>
            <Route exact path="/contact" component={Contact}/>
            <Redirect to='/'/>
        </Switch>
        <Footer/>
        </div>
        </>
    );
};

export default P1app;
import React, { useState } from 'react';
import './RoUte.css';
import A from './A';
import B from './B';
import Dd from './Error';
import Astar from './Astar';
import Menu from './Menu';
import {Switch,Route,Redirect}from 'react-router-dom';

const RoUte = () =>{

    return(
        <>
            <div className="RoUte">
            <h2>React Router</h2>
            <Menu/>
            <Switch>
                <Route exact path='/' component={Astar}/>
                <Route exact path='/a' render={()=><A data="A"/>}/>
                <Route exact path='/a/:name' render={()=><A data="A"/>}/>
                <Route exact path='/a/:name/:taha' render={()=><A data="A"/>}/>
                <Route exact path='/b' render={()=><B data="B"/>}/>
                <Redirect to="/"/>
                {/* <Route component={Dd}/> */}
            </Switch>
            </div>
        </>
    );
};
export default RoUte;
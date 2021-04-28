import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu =()=>{
    return(
        <>
            <ul>
                <li><NavLink exact className="link" activeClassName="active" to='/'>Home</NavLink></li>
                <li><NavLink exact className="link" activeClassName="active" to='/a/ahar/1'>URL A</NavLink></li>
                <li><NavLink exact className="link" activeClassName="active" to='/b'>URL B</NavLink></li>
            </ul>
        </>
    );
};
export default Menu;
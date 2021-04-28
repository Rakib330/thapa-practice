import React from 'react';
import {useParams,useLocation,useHistory} from 'react-router-dom';

const A =(props)=>{
    const { name,taha } = useParams('');
    const location = useLocation();
    const History =useHistory();
    return(
        <>
            <h4>Type on URL :- '<span style={{color:'red'}}>/a/ahar/</span>' for fun</h4>
            <p>Your path is :- {location.pathname}</p>
            <h1>You are in :- {props.data}_{name}_{taha}.jsx</h1>
            {location.pathname === '/a/ahar/' ?
            <>
            <button onClick={()=> History.goBack()}>Go Back</button>
            <button onClick={()=> History.push('/')}>Go Home</button>
            <button onClick={()=> alert('You have Done Your Work...')}>Message</button>
            </>
            
             : null}
        </>
    );
};
export default A;
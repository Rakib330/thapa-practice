import React from 'react';

const Note = (props) =>{
    const haza = ()=>{
        props.thebtn(props.id);
    }
return(
    <>
        <div className="card"  style={{width:'15rem'}}>
            <div className="card-body">
                <h3>{props.titla}</h3>
                <p>{props.contenta}</p>
                <button onClick={haza} className="btn btn-danger">Bye</button>
            </div>
        </div>
        
    </>
);
};

export default Note;
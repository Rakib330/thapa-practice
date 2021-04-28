import React from 'react';

const TodoComp = (props) =>{
    
    return (
    <>
    <div className="list">
        <span onClick={()=>{
            props.onSelect(props.id);
        }}>+</span>
        <li>{props.data}</li>
    </div>
    </>
    );
};
export default TodoComp;

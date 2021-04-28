import React, { useState } from 'react';
import './todo.css';
import TodoComp from './TodoComp';

const Todo = () =>{
const [li_add,setli_add] = useState();
const [all,setall] = useState([]);
const dhukau = (addvl) =>{
    console.log(addvl.target.value);
     let data = addvl.target.value;
     setli_add(data);
}
const insert = () =>{
    setall((olddata)=>{
    return[li_add,...olddata];  
    });
    setli_add('');
}

const godelete = (id ) =>{
    setall((purana)=>{
return purana.filter((arrname,arrid) =>{
return arrid !== id;
});
    });
};

    return(
        <div className="main">

        <div className="todo">
            <h1>Todo List</h1>
            <input onChange={dhukau} type="text" name="add" placeholder="Add List" value={li_add}/>
            <button onClick={insert}>+</button>
            <ul>
            {all.map((kakka,index) =>{
                return <TodoComp
                        key={index}
                        id={index}
                        data={kakka}
                        onSelect={godelete}
                       />;    
            })}
            </ul>
        </div>

        </div>
    );
        
};
export default Todo;
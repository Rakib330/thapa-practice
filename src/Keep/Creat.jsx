import React, { useState } from 'react';

const Creat = (props) =>{
    const [zakka,setzakka] =useState(false);
    const [all,setall] = useState({
        title:'',
        content:''
    });
    const addevent = (event) =>{
        const {value,name} = event.target;
        setall((old)=>{
            return{
            ...old,
            [name]:value,
            };
        });
    };
    const doAdd = () =>{
        props.tmacin(all);
        setall({
            title:'',
            content:''
        });
    };
    const kaha = () =>{
        zakka?setzakka(false):setzakka(true)
    }
return(
    <>
    <div className="card m-auto"  style={{width:'18rem'}}>
        <div className="card-body">
            <div className="form-group">
            { zakka?
            <input onChange={addevent} name='title' value={all.title} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" autoComplete='off'/>:null}
            <textarea onClick={kaha} onChange={addevent} name='content' value={all.content} className="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Type your Note..."></textarea>
            </div>
            {zakka?
            <button onClick={doAdd} className="btn btn-primary">Submit</button>:null}
        </div>
    </div>
    </>
);
};

export default Creat;
import React,{useState} from 'react';
import './todo.css';
import AddIcon from '@material-ui/icons/Add';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Comp from './Comp';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Todo = () =>{
    const classes = useStyles();
    const [list,setlist] = useState();
    const [lists,setlists] = useState([]);
    const addto = (tottho) =>{
        setlist(tottho.target.value);
    };
    const adhar = () =>{
        setlists((k)=>{
            return [list ,...k];
        });
        setlist('');
    };
    
    

return(
    <>
    <div className={classes.root}>
        <div className="todom">
            <div className="card">
                <h1>ToDO Materials</h1>
                <div className="inputt">
                    <input type="text" onChange={addto} value={list} placeholder="Add Lists"/>
                    <Button onClick={adhar}><AddIcon/></Button>
                </div>
                <ul>
                    {
                        lists.map((val,index)=>{
                            return <Comp val = {val} index = {index}/>;
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
    </>
);
};

export default Todo;
import React,{useState} from 'react';
import CancelIcon from '@material-ui/icons/Cancel';

const Comp = (props) =>{
    const [line,setline] =useState(false);
    const cut = () =>{
        (line === false)?setline(true):setline(false);
    };
    return(
        <>
        <div>
            <li><CancelIcon onClick={cut}/><span style={{textDecoration: line ? 'line-through':'none'}}>{props.val}</span></li>
        </div>
        </>
    );
};
export default Comp;
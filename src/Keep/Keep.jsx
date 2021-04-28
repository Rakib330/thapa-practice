import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Creat from './Creat';
import Note from './Note';
import './keep.css';


const Keep = () =>{
    const [cb,setcb] = useState([]);
    const hola = (a)=>{
        setcb((nala)=>{
            return[a,...nala];
        });
    }
    const daff = (id) =>{
        console.log(id);
        setcb((adr)=>{
            adr.filter((val,index) =>{
                return (index!==id);
            })
        })
    }
    return(
        <>
        <div className="keepMain">
            <Header />
            <Creat tmacin={hola}/>
            <div className="keep">
                { 
                cb.map((lulla,index) =>{
                    return (<Note 
                    key= {index} 
                    id= {index} 
                    titla= {lulla.title} 
                    contenta= {lulla.content} 
                    thebtn= {daff} />);
                })
                }
            </div>
            
            <Footer />
        </div> 
        </>
    );
};
export default Keep;
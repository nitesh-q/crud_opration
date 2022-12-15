import React,{useState,useEffect} from "react";
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';


function Show(props){
    
const [name,setName]=useState('')
const [name1,setName1]=useState('')
    const mystyle={
        
        display:"inline-block",
        marginLeft:'450px',
        marginTop:'200px',
        height:"180px",
        width: "30%",
        border: "5px solid #0066CC",
        padding: "10px",
        borderRadius:"20px",
        backgroundColor:"rgb(153, 153, 153)",
        textAlign: "center",
        boxShadow: "5px 10px #888888"
    }

    const mysecond={
        height: "150px",
        width: "40%",
        backgroundColor: "rgb(179, 179, 179)",
        borderColor: "rgb(0, 0, 0)",
        borderRadius:"10px",
      
    }
 useEffect(()=>{
    setName(localStorage.getItem('Index1'));//name
    setName1(localStorage.getItem('Index2'));//age
   
 },[]);
    
return(
   

    <>
    <div style={mystyle}>
        <div style={mysecond}>
        </div>
        <p style={{marginTop:'-130px',marginLeft:'120px'}}><b>Name:&nbsp;</b>{`${name}`}</p>
        <p style={{marginTop:'10px',marginLeft:'90px'}}><b>Age:&nbsp;</b>{`${name1}`}</p>
    </div>
    <div style={{marginLeft:'620px',marginTop:'20px'}}>
    <Link to={'/'}><Button style={{display:"inline-block"}}>Back</Button></Link>
    </div>
    
    
   
    </>
    
);

}
export default Show;
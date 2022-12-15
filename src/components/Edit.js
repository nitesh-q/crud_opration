import React,{useState,useEffect} from "react";
import {Button,Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
//import Employees from "./Employees";

import {useNavigate} from 'react-router-dom';


function Edit(props){

const [name,setName]=useState('');
const [age,setAge]=useState('');
const [id,setId]=useState('');

let history = useNavigate();
var index =props.Employees1.map(function(e){
    return e.id
}).indexOf(id);


const handlesubmit=(e)=>{
    e.preventDefault();

    let a=props.Employees1[index]
    a.name=name;
    a.age=age;
    
    history("/")
    //salert('was updated sucessfully !')
}
useEffect(()=>{
    setName(localStorage.getItem('Name'));
    setAge(localStorage.getItem('Age'));
    setId(localStorage.getItem('Id'));
},[])

return (
    <div>
           <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formname">
                    <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e)=>setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formage">
                    <Form.Control type="text" placeholder="Enter Age" value={age} required onChange={(e)=>setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Button  onClick={(e) =>handlesubmit(e)} type="submit">Update</Button>
            </Form>
    </div>
);





}
export default Edit;

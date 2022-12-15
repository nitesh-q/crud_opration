import React,{useState} from "react";
import {Button,Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import {v4 as uuid} from "uuid";
import {Link,useNavigate} from 'react-router-dom';


function Add(props){
    const [name, setName]=useState('');
    const [age, setAge]=useState('');
    let history = useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();

        const ids=uuid();
        let uniqueID=ids.slice(0,8);

        let a=name,
        b=age;

        props.Employees1.push({id:uniqueID,name:a,age:b});
        history("/")
    }
    return(
        <div>

            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formname">
                    <Form.Control type="text" placeholder="Enter Name" required onChange={(e)=>setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formage">
                    <Form.Control type="text" placeholder="Enter Age" required onChange={(e)=>setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Button  onClick={(e) =>handlesubmit(e)} type="submit">submit</Button>
            </Form>
        </div>

    );
}

export default Add;

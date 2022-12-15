import React from "react";

import {Button,Table} from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css";
//import Employees from "./Employees";
import {Link,useNavigate} from 'react-router-dom';


function Home(props){

    let EmployeeDetail= props.Employees1;
    let history=useNavigate();

    const handleEdit=(id,name,age)=>{
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
        localStorage.setItem('Id',id);
    }

    

    const Handledelete=(id)=>{
        var index =props.Employees1.map(function(e){
            return e.id
        }).indexOf(id);
        props.Employees1.splice(index,1);
        history('/');
    }
     
    // show
    const handleshow=(id)=>{
        var index =props.Employees1.map(function(e){
            return e.id
        }).indexOf(id);

      let  name1=props.Employees1[index].name
        let age1=props.Employees1[index].age
      localStorage.setItem("Index1",name1);
      localStorage.setItem("Index2",age1);
    
       //alert(x);

}


    return(
        <>
        <div style={{margin:"10rem"  } } >
            <Table striped bordered hover size ="sm" variant="info">
            <thead>
                <tr>
                    
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>{
                    EmployeeDetail && EmployeeDetail.length>0? EmployeeDetail.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>
                                <Link to={`/edit`}>
                                <Button onClick={()=> handleEdit(item.id,item.name,item.age)}>Edit</Button>
                                </Link>&nbsp; &nbsp; &nbsp;
                                <Button onClick={()=> Handledelete(item.id)}>Delete</Button>
                                &nbsp; &nbsp; &nbsp;
                                <Link to={`/show`}><Button onClick={()=> handleshow(item.id)}>Show</Button></Link>
                                </td>
                            </tr>
                        )
                    }):"no data to show"
                }</tbody>
            </Table>
                <br></br>
                <Link className="d-grid gap-2" to="/create">
                <Button size="lg">Create</Button>
                </Link>
        </div>
        </>

    )
}

export default Home;
import React, { useState } from "react"
import Navbar from './../Navbar/Navbar'
import { useEffect } from 'react';
import axios  from "axios";
import EditCustomer from "../Customers/EditCustomer";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';

function AdminDash() {
  const navigate = useNavigate();

  const [customerFirstName,setCustomerFirstName] = useState("");
  const [customerLastName,setCustomerLastName] = useState("");
  const [customerPassword,setCustomerPassword] = useState("");
  const [customerEmail,setCustomerEmail] = useState("");

    const createCustomer = async () => {
      if(customerFirstName == "" || customerLastName == "" || customerEmail == "" || customerPassword == ""){
        alert('Please fill all the fields');
      }else{
        let req = await axios.post('http://localhost:5000/api/v1/bank-app/customers',
        {"firstName":customerFirstName,"lastName":customerLastName,"email":customerEmail,"password":customerPassword,"balance":0});
        handleClose();
        //console.log(customerFirstName, customerLastName, customerPassword, customerEmail);
        alert('Customer Created Successfullly!');
      }
     
    }
  

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [customers,setCustomer] = useState(null);
      const getCustomers = async () => {
        const respCust = await axios.get('http://localhost:5000/api/v1/bank-app/customers?limit=20&offset=0');
        setCustomer(respCust.data);
        console.log(respCust.data);
    } 
      useEffect(() => {
        getCustomers();
      },[]);


  return (
    <>
     
    <Navbar something={"admin"}></Navbar>
    <div className="container-sm">
    <Button variant="outline-primary" onClick={handleShow}>
      🙎 Create New Customer
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create New Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
        <Form.Control
          onChange={(e) => setCustomerFirstName(e.target.value)}
          aria-label="firstName"
          aria-describedby="basic-addon1"
        />
      </InputGroup>


      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
        <Form.Control
          onChange={(e) => setCustomerLastName(e.target.value)}
          aria-label="lastName"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
        <Form.Control
          onChange={(e) => setCustomerEmail(e.target.value)}
          aria-label="email"
          aria-describedby="basic-addon1"
        />
      </InputGroup>


      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
        <Form.Control
          onChange={(e) => setCustomerPassword(e.target.value)}
          aria-label="email"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={createCustomer}>Create!</Button>
        </Modal.Footer>
      </Modal>

<Table responsive="sm">
      <thead>
          <tr>
            <th scope="col" width="200">Customer name</th>
            <th scope="col" width="200">Email</th>
            <th scope="col" width="100">Balance</th>
            <th scope="col" width="100">Action</th>
            <th scope="col" width="100">Disable</th>
            <th scope="col" width="100">Delete</th>
            <th scope="col" width="100">View</th>
          </tr>
        </thead>
        </Table>
{customers && customers.map((customer, index) => 
          <EditCustomer key={index} customer={customer} />)
          }

<Pagination>

      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Next />
    </Pagination>

    </div>
          
      
    </>
  )
}

export default AdminDash;

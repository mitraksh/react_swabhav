import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useEffect } from 'react';
import CustAccounts from "../Accounts/CustAccounts";

function EditCustomer({customer}) {
  // console.log( typeof customer.credential.isActive)
    const username = useParams().username
    const custId = customer.id;
    const isActive = customer.credential.isActive; 
    const firstName = customer.firstName;
    const lastName = customer.lastName;
    const email = customer.email;
    const balance = customer.balance;
    const [show, setShow] = useState(false);
    const [showTX, setShowTX] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseTX = () => setShowTX(false);
    const handleShowTX = () => setShowTX(true);

    const navigate = useNavigate();
   
    const editCustomer = () => {
      //navigate('/editCustomer')
    }

    const disableCustomer = async (id,activeBool,custName, custLastName) => {
      if(activeBool === true){
        alert(`${custName}.${custLastName} is disabled.`)
        await axios.put(`http://localhost:5000/api/v1/bank-app/auth/${id}`,{isActive: false})
      }else{
        alert(`${custName}.${custLastName} is enabled.`)
        await axios.put(`http://localhost:5000/api/v1/bank-app/auth/${id}`,{isActive: true})
      }
    }


    const getAllCustAccounts = (id) => {
      navigate(`/custAccs/${username}/${id}`)
    }


  return (
    <div className="container-sm">


<Table responsive="sm">
        
<tbody>
    <tr>
    <td width="200">{firstName}.{lastName}</td>

    <td width="200">{email}</td>

    <td width="100">{balance}</td>

    <td width="100">  
      <Button variant="outline-primary" onClick={handleShow}>
    ✍ Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
        <Form.Control
        value={firstName}
          aria-label="firstName"
          aria-describedby="basic-addon1"
        />
      </InputGroup>


      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
        <Form.Control
            value={lastName}
            aria-label="lastName"
            aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
        <Form.Control
        value={email} 
        aria-label="email"
        aria-describedby="basic-addon1"
        />
      </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Update!</Button>
        </Modal.Footer>
      </Modal>
    </td>


    <td width="100"> 
    {(isActive === true) ?  <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={() => {disableCustomer(custId,isActive,firstName,lastName)}}/>
      </div> : <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={() => {disableCustomer(custId,isActive,firstName,lastName)}} checked/>
      </div>}
    </td>

          
    <td width="100">
    <Button variant="outline-success" onClick={() => {getAllCustAccounts(custId)}}>Tx</Button>
    </td>
          
    </tr>
</tbody>
      </Table>

    </div>
  );
}

export default EditCustomer;

import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function EditCustomer({customer}) {
    const firstName = customer.firstName;
    const lastName = customer.lastName;
    const email = customer.email;
    const balance = customer.balance;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
   
    const editCustomer = () => {
      //navigate('/editCustomer')
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


    <td width="100"> <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
        </div>
    </td>


    <td width="100"><button className="btn btn-outline-danger"  onClick={editCustomer} >🚫</button></td>
          
    <td width="100">
    <Button variant="outline-success">Tx</Button>
    </td>
          
    </tr>
</tbody>
      </Table>

    </div>
  );
}

export default EditCustomer;

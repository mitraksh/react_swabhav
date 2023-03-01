import React, { useState } from "react"
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function Bank({bank}) {
    const fullName = bank.fullName;
    const abbreviation = bank.abbreviation;
   
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
    <td width="200">{fullName}</td>

    <td width="100">{abbreviation}</td>

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
        <InputGroup.Text id="basic-addon1">Bank Name</InputGroup.Text>
        <Form.Control
        value={fullName}
          aria-label="firstName"
          aria-describedby="basic-addon1"
        />
      </InputGroup>


      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Abbreviation</InputGroup.Text>
        <Form.Control
            value={abbreviation}
            aria-label="lastName"
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
    <Button variant="outline-danger">
        X
      </Button>
    </td>
          
    </tr>
</tbody>
      </Table>

    </div>
  )
}

export default Bank
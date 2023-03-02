import React, { useState } from "react"
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Bank({bank}) {
    const [fullName,setBankName] = useState(bank.fullName);
    const [abbreviation,setBankAbbreviation] = useState(bank.abbreviation);
    const bankID = bank.id; 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
   
    const editCustomer = async (id) => {
      let req = await axios.post(`http://localhost:5000/api/v1/bank-app/banks/${id}`,
        {fullName,abbreviation});
        console.log(req);
        handleClose();
        alert(`${fullName} Bank Updated `)
        window.location.reload(true)
      //navigate('/editCustomer')
    }
    const deleteCustomer = async (id) => {
      let req = await axios.delete(`http://localhost:5000/api/v1/bank-app/banks/${id}`,);
        console.log(req);
        alert(`${fullName} Bank Deleted `)
        window.location.reload(true)
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
        onChange={e=>setBankName(e.target.value)}
          aria-label="firstName"
          aria-describedby="basic-addon1"
        />
      </InputGroup>


      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Abbreviation</InputGroup.Text>
        <Form.Control
            value={abbreviation}
            onChange={e=>setBankAbbreviation(e.target.value)}
            aria-label="lastName"
            aria-describedby="basic-addon1"
        />
      </InputGroup>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>{editCustomer(bankID)}}>Update!</Button>
        </Modal.Footer>
      </Modal>
    </td>


    <td width="100"> 
    <Button variant="outline-danger" onClick={()=>{deleteCustomer(bankID)}}>
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
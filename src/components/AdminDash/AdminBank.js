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

function AdminBank() {
  const navigate = useNavigate();

  const [customerFirstName,setBankFirstName] = useState("");
  const [customerLastName,setBankLastName] = useState("");
  const [customerPassword,setBankPassword] = useState("");
  const [customerEmail,setBankEmail] = useState("");

    const createCustomer = async () => {
      if(customerFirstName == "" || customerLastName == "" || customerEmail == "" || customerPassword == ""){
        alert('Please fill all the fields');
      }else{
        let req = await axios.post('http://localhost:5000/api/v1/bank-app/banks',
        {"firstName":customerFirstName,"lastName":customerLastName,"email":customerEmail,"password":customerPassword,"balance":0});
        handleClose();
        //console.log(customerFirstName, customerLastName, customerPassword, customerEmail);
        alert('Customer Created Successfullly!');
      }
     
    }
  

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [banks,setBank] = useState(null);
      const getbanks = async () => {
        const respCust = await axios.get('http://localhost:5000/api/v1/bank-app/banks');
        setBank(respCust.data);
        console.log(respCust.data);
    } 
      useEffect(() => {
        getbanks();
      },[]);


  return (
    <>
     
    <Navbar something={"admin"}></Navbar>
    <div className="container-sm">
    <Button variant="outline-primary" onClick={handleShow}>
      🙎 Create New Bank
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create New Bank</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Bank Name</InputGroup.Text>
        <Form.Control
          onChange={(e) => setBankFirstName(e.target.value)}
          aria-label="fullName"
          aria-describedby="basic-addon1"
        />
      </InputGroup>


      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Abbreviation</InputGroup.Text>
        <Form.Control
          onChange={(e) => setBankPassword(e.target.value)}
          aria-label="abbreviation"
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
            <th scope="col" width="200">Bank name</th>
            <th scope="col" width="200">Abbreviation</th>
            <th scope="col" width="100">Action</th>
            <th scope="col" width="100">Disable</th>
          </tr>
        </thead>
        </Table>
{banks && banks.map((bank, index) => 
          <EditCustomer key={index} bank={bank} />)
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

export default AdminBank;

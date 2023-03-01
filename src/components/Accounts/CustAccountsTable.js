import React, { useState } from "react"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

function CustAccountsTable({custAcc}) {
  // console.log(JSON.stringify(custAcc)+" props from parent")
  const accId = custAcc.id;
  const accName = custAcc.accountName;

  const bankId = custAcc.bankID;

  const [depositAmt,setDepositAmt] = useState(null);
  const [withdrawAmt,setWithdrawAmt] = useState(null);
  const [transferAmt,setTransferAmt] = useState(null);
  const [toAcc,settoAcc] = useState(null);


  console.log(accId)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showDraw, setShowDraw] = useState(false);

  const handleCloseDraw = () => setShowDraw(false);
  const handleShowDraw = () => setShowDraw(true);

  const [showTransfer, setShowTransfer] = useState(false);

  const handleCloseTransfer = () => setShowTransfer(false);
  const handleShowTransfer = () => setShowTransfer(true);

    const username = useParams().username
    const accountid = custAcc.id;
    const accounts = custAcc.accountName;
    const balance = custAcc.balance;
    const navigate = useNavigate();
    const goToTransactions = () => {
      navigate(`/tx/${username}/${accountid}`);
    } 

    const depositAmount = async (id) => {
      let respDepositAmount = await axios.post(`http://localhost:5000/api/v1/bank-app/accounts/${id}/deposit`,{amount:depositAmt,bankID:bankId});
      console.log(respDepositAmount);
      handleClose()
    }

    const withdrawAmount = async (id) => {
      let respwithdrawAmount = await axios.post(`http://localhost:5000/api/v1/bank-app/accounts/${id}/withdraw`,{amount:withdrawAmt,bankID:bankId});
      console.log(respwithdrawAmount);
      handleCloseDraw()
    }

    const transfer = async (id) => {

        let resptransferAmount = await axios.post(`http://localhost:5000/api/v1/bank-app/accounts/${id}/transfer`,{amount:transferAmt,toAccountID:toAcc,bankID:bankId});
        console.log(resptransferAmount);
  
        handleCloseTransfer()
      
    }

  return (
<>

<Table responsive="sm">
<tbody>
    <tr>
    <td width="200">{accounts}</td>
    <td width="100">{balance}</td>

    <td width="100"> <Button variant="outline-primary" onClick={goToTransactions}>
        View
      </Button>
    </td>

      <td width="100">
        <Button variant="outline-success" onClick={handleShow}>
          Deposit
          </Button>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Deposit Money from {accName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Amount</InputGroup.Text>
            <Form.Control
              value={depositAmt}
              onChange={e=>setDepositAmt(e.target.value)}
              aria-label="depositAmount"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={()=>{depositAmount(accId)}}>Deposit!</Button>
            </Modal.Footer>
          </Modal>
      </td>

      <td width="100"> 
      <Button variant="outline-secondary" onClick={handleShowDraw}>
          Withraw
          </Button>

          <Modal
            show={showDraw}
            onHide={handleCloseDraw}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Withraw Money  from {accName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Amount</InputGroup.Text>
            <Form.Control
            value={withdrawAmt}
            onChange={e=>setWithdrawAmt(e.target.value)}
              aria-label="withrawAmount"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={()=>{withdrawAmount(accId)}}>Withraw!</Button>
            </Modal.Footer>
          </Modal>
      </td>

      <td width="100"> 
      <Button variant="outline-primary" onClick={handleShowTransfer}>
          Transfer
          </Button>
              <Modal
            show={showTransfer}
            onHide={handleCloseTransfer}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Transfer Money  from {accName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Amount</InputGroup.Text>
            <Form.Control
              value={transferAmt}
              onChange={e=>setTransferAmt(e.target.value)}
              aria-label="transferAmount"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">To Account</InputGroup.Text>
            <Form.Control
              value={toAcc}
              onChange={e=>settoAcc(e.target.value)}
              aria-label="toAccount"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={()=>{transfer(accId)}}>Transfer!</Button>
            </Modal.Footer>
          </Modal>
      </td>
    </tr>
</tbody>
    </Table>
    </>
  )
}

export default CustAccountsTable
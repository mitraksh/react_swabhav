import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import TxTable from './TxTable';
import Table from 'react-bootstrap/Table';


function Tx() {
    const accId = useParams().id;
    const [txs,setTxs] = useState(null);
    const getAllTx = async () => {
        let respTx = await axios.get(`http://localhost:5000/api/v1/bank-app/accounts/${accId}/transactions`);
        console.log(respTx.data);
        setTxs(respTx.data);
    }
    useEffect(() => {
        getAllTx()
    })
  return (
    <>
    <Navbar something={"admin"}></Navbar>
    <div className="container-sm">

    <Table responsive="sm">
      <thead>
          <tr>
            <th scope="col" width="100">Amount</th>
            <th scope="col" width="100">Date</th>
            <th scope="col" width="100">From Account</th>
            <th scope="col" width="100">To Account</th>
          </tr>
        </thead>
        </Table>
    {txs && txs.map((tx, index) => 
          <TxTable key={index} tx={tx} />)
          }

          </div>
    </>
  )
}

export default Tx
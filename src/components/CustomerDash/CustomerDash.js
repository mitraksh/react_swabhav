import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import Navbar from './../Navbar/Navbar'
import axios from "axios";
import CustAccountsTable from "../Accounts/CustAccountsTable";
import Table from 'react-bootstrap/Table';
import './customerDash.css'

function CustomerDash() {
  const username = useParams().username;
    const [custAccs,setCustAcc] = useState(null);
    const getAllCustAccounts = async (id) => {
        let respAcc = await axios.get(`http://localhost:5000/api/v1/bank-app/accounts`,{params: {username}});
        console.log(respAcc.data);
        setCustAcc(respAcc.data)
      }
      useEffect(() => {
        getAllCustAccounts(username);
      },[])
  return (
    <>
    <Navbar something={"Customer"}></Navbar>
    <div className="container-sm">

    <Table responsive="sm">
      <thead>
          <tr>
            <th scope="col" width="200">Accounts</th>
            <th scope="col" width="100">Balance</th>
            <th scope="col" width="100">TX</th>
            <th scope="col" width="100">Deposit</th>
            <th scope="col" width="100">Withdraw</th>
            <th scope="col" width="100">Transfer</th>
          </tr>
        </thead>
        </Table>
    {custAccs && custAccs.map((custAcc, index) => 
          <CustAccountsTable key={index} custAcc={custAcc} />)
          }
          
         
         
         
          </div>
    </>
  )
}

export default CustomerDash;

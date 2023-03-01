import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import axios from "axios";
import CustAccountsTable from "./CustAccountsTable";
import Navbar from './../Navbar/Navbar'
import Table from 'react-bootstrap/Table';


function CustAccounts() {
    const custId = useParams().id;
    const [custAccs,setCustAcc] = useState(null);
    const getAllCustAccounts = async (id) => {
        let respAcc = await axios.get(`http://localhost:5000/api/v1/bank-app/accounts`,{params: {custId}});
        console.log(respAcc.data);
        setCustAcc(respAcc.data)
      }
      useEffect(() => {
        getAllCustAccounts(custId);
      },[])
  return (
    <>
    <Navbar something={"admin"}></Navbar>
    <div className="container-sm">

<Table responsive="sm">
      <thead>
          <tr>
            <th scope="col" width="200">Accounts</th>
            <th scope="col" width="100">Balance</th>
            <th scope="col" width="100">TX</th>
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

export default CustAccounts
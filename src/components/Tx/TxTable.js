import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function TxTable({tx}) {
    const date = tx.date;
    const amount = tx.amount;
    const from = tx.fromAccountID;
    const to = tx.toAccountID;
  return (
    <>
    <Table responsive="sm">
<tbody>
    <tr>
    <td width="100">{amount}</td>
    <td width="100">{date}</td>
    <td width="100">{from}</td>
    <td width="100">{to}</td>
    </tr>
</tbody>
    </Table>
    </>
  )
}

export default TxTable
import React from "react";
import './customer.css';
function Customers({customer}) {
console.log(customer);
  const firstName = customer.firstName;
  const lastName = customer.lastName;
  const email = customer.email;
  const balance = customer.balance;
  
  return (
    <div className="container-sm">
    <div className="card text-bg-primary mb-3" id="cardSize">
      <div className="card-header">
        Customer Name: <strong>{firstName}.{lastName}</strong> 
        
      </div>
      <div className="card-body">
        <h5 className="card-title">{email}</h5>
        <p className="card-text">Balance: <strong>{balance}</strong></p>
      </div>
    </div>
    </div>
  );
}

export default Customers;

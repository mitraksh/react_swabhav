import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import AdminDash from './components/AdminDash/AdminDash';
import CustomerDash from './components/CustomerDash/CustomerDash';
import CreateCustomer from './components/Customers/CreateCustomer';
import EditCustomer from './components/Customers/EditCustomer';
import AdminBank from './components/AdminDash/AdminBank';
import Comp1 from './components/Context/Comp1';
import Action from './components/Actions/Action';
import CustAccounts from './components/Accounts/CustAccounts';
import Tx from './components/Tx/Tx';

function App() {
  
  return (

      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/admindashboard/:username" element={<AdminDash></AdminDash>}/>
        <Route path="/customerdashboard/:username" element={<CustomerDash></CustomerDash>}/>
        <Route path="/createCustomer" element={<CreateCustomer></CreateCustomer>}/>
        <Route path="/editCustomer" element={<EditCustomer></EditCustomer>}/>
        <Route path="/adminBank/:username" element={<AdminBank></AdminBank>}/>
        <Route path="/comp" element={<Comp1></Comp1>}/>
        <Route path="/act" element={<Action></Action>}/>
        <Route path="/custAccs/:username/:id" element={<CustAccounts></CustAccounts>}/>
        <Route path="/tx/:username/:id" element={<Tx></Tx>}/>
      </Routes>
   
  );
}

export default App;

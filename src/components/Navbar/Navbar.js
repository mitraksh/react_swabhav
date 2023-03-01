import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Navbar(props) {
  const something = props.something;
  const username = useParams().username;
  const navigate = useNavigate();
  const logout = () => {
    navigate('/')
  }
  const adminBank = () => {
    navigate(`/adminBank/${username}`)
  }
  const customers = () => {
    navigate(`/admindashboard/${username}`)
  }

  if(something == 'admin'){
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">{username}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" onClick={customers}>Customers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={adminBank}>Banks</a>
            </li>
          </ul>
            <button className="btn btn-outline-primary" onClick={logout} type="submit">Log me out</button>
        </div>
      </div>
    </nav>
    );

  }
  if(something == 'Customer'){
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">{username}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Accounts</a>
            </li>
            
          </ul>
         <button className="btn btn-outline-primary" onClick={logout} type="submit">Log me out</button>
        </div>
      </div>
    </nav>
    );
  }
 
   
}

export default Navbar;

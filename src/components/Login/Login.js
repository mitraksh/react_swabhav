import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css'

function Login() {
  const [username,setUsername] = useState('shailesh@sbi.com');
  const [password,setPassword] = useState('sbi');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(username === "" || password === ""){
      return
    }
    let resp = await axios.post('http://localhost:5000/api/v1/bank-app/auth/login',{username,password})
    console.log(resp.data)
    const user = resp.data.username;
    if(resp.data.roleName == 'admin'){
      navigate(`/admindashboard/${user}`)
    }
    if(resp.data.roleName == 'Customer'){
      navigate(`/customerdashboard/${user}`)
    }
    console.log('Submitted')
  }
  return (
    <div className="container">
      <h2>💲 Welcome to My Bank 🏦</h2>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={e => setUsername(e.target.value)}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)}/>
  </div>

  <button type="submit" className="btn btn-success">Log me in!</button>
</form>
</div>
  );
}

export default Login;

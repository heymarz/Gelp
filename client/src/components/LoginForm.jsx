import React, {useState} from 'react';
import {headers} from '../Global';
// import {useNavigate} from "react-router-dom"

function LoginForm({ loginUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate(0)

  function handleSubmit(e){
    e.preventDefault();
    fetch('http://localhost:3000/login',{
      method: "POST",
      headers,
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
    .then((r)=>r.json())
    .then(data=>{
      loginUser(data.user);
      // navigate("/")
    })
  }
  

  return (
   <div>
    <h1>Log in</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        autoComplete='off'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type = "password"
        id = "password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        autoComplete='current-password'
      />
      <br />
      <button type="submit">Sign In</button>
    </form>
   </div>
  )
}

export default LoginForm
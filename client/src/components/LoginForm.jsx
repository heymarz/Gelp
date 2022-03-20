import React, {useEffect, useState} from 'react';
import {headers} from '../Global';
// import {useNavigate} from "react-router-dom"

function LoginForm({ loginUser, addErrors, clearErrors }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate(0)

  function handleSubmit(e){
    e.preventDefault();
    fetch('/login',{
      method: "POST",
      headers,
      body: JSON.stringify({
        username, password,
      }),
    }).then((r)=>{
      if(r.ok){
        r.json().then((user)=>loginUser(user));
        // navigate("/")
      }else{
        addErrors(["Invalid username or password"])
      }
    })
  }

  useEffect(()=>{
    return()=>{
      clearErrors();
    }
  })

  return (
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
        type="password"
        id="password"
        autoComplete='current-password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button type="submit">Sign In</button>
    </form>
  )
}

export default LoginForm
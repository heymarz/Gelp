import React, {useEffect, useState} from 'react';
import {headers} from '../../Global';
import {useNavigate} from "react-router-dom";
import Errors from './Errors';
import './forms.css'
import '../pages/restaurantList.css'

function LoginForm({ loginUser, addErrors, errors, clearErrors }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault();

    fetch('/login',{
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        user: { 
          username: username,
          password: password,
      }}),
    })
    .then((r)=>r.json())
    .then(data=>{ 
      if (data.id){
        loginUser(data);
        navigate('/');
      } else {
        addErrors(["Please check the spelling of your username or password. Case-Sensitive!"])
      }
    })
  }
  useEffect(()=>{
    return ()=> clearErrors()
  },[])

  return (
   <div className='form'>
    <h1 className='small-header'>Log in</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        id="username"
        autoComplete='off'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        type = "password"
        id = "password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        autoComplete='current-password'
      />
      <br />
      <button className="button" type="submit">Sign In</button>
    </form>
    <Errors errors={errors} />
   </div>
  )
}

export default LoginForm
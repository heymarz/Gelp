import React, {useState, useEffect} from 'react';
import {headers} from '../Global'

function SignupForm({ loginUser, addErrors, clearErrors }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
  function handleSubmit(e){
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers,
      body: JSON.stringify({
        username,
        password,
        passwordConfirmation: passwordConfirmation,
      }),
    })
    .then((r)=> {
      if (r.ok) {
        r.json().then((user)=>loginUser(user));
        //add nav link
      } else {
        r.json().then((err)=> addErrors(err));
      }
    });
  }
  
  useEffect(()=>{
    return()=>{
      clearErrors();
    }
  },[])

  return (
    <form onSubmit = {handleSubmit}>
      <label htmlFor="usename">Username:</label>
      <input 
        type = "text"
        id = "username"
        autoComplete='off'
        placeholder = "Adam West"
        value = {username}
        onChange = {(e)=>setUsername(e.target.value)}
      />
      <br />
      <label htmlFor = "password">Password</label>
      <input
        type = "password"
        id = "password"
        value = {password}
        onChange = {(e)=> setPassword(e.target.value)}
        autoComplete = "current-password"
      />
      <br />
      <label htmlFor="password">Password Confirmation:</label>
      <input
        type = "password"
        id = "password_confirmation"
        value = {passwordConfirmation}
        onChange = {(e)=>setPasswordConfirmation(e.target.value)}
        autoComplete = "current-password"
      />
      <br />
      <button type="submit">Sign up</button>
    </form>
  )
}

export default SignupForm
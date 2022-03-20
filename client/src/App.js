import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/navigation/NavBar";
import Login from "./components/pages/Login";
import AddReview from "./components/pages/AddReview";
import Home from "./components/pages/Home";
import Errors from './components/static/Errors'
import SignupForm from "./components/SignupForm";
import {headers, getToken} from "./Global"

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false)
  const [errors, setErrors] = useState([])

  function loginUser(user){
    setCurrentUser(user)
    setLoggedIn(true)
  }

  function logoutUser(){
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.removeItem('jwt')
  }

  useEffect(()=>{
    const token = localStorage.getItem('jwt');
    if(token && !loggedIn) {
      fetch('/me',{
        method: "GET",
        headers:{
          ...headers, ...getToken()
        },
      })
      .then((r)=>r.json())
      .then((user)=>loginUser(user))
    }
  },[loggedIn])

  function addErrors(){
    setErrors(errors)
  }

  function clearErrors(){
    setErrors([])
  }

  return (
    <div>
      <NavBar 
        logoutUser={logoutUser}
        loggedIn = {loggedIn}
      />
      <main>
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/signup" 
            element={<SignupForm 
              loginUser={loginUser}
              addErrors={addErrors}
              clearErrors={clearErrors}/>} 
          />
          <Route 
            path="/login"  
            element={<Login 
              loginUser={loginUser}
              addErrors={addErrors} clearErrors={clearErrors} 
            />} 
          />
          <Route 
            path="/reviews/new" 
            element={<AddReview currentUser={currentUser} />} 
          />
        </Routes>
      </main>
      <Errors errors={errors}/>
    </div>
  );
}

export default App;

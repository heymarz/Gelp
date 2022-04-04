import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/navigation/NavBar";
import Login from "./components/pages/Login";
import AddReview from "./components/pages/AddReview";
import Home from "./components/pages/Home";
import SignupForm from "./components/SignupForm";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [restaurants, setRestaurants] = useState("")

  function loginUser(user){
    setCurrentUser(user);
    setLoggedIn(true);
  }

  function logoutUser(){
    setCurrentUser({});
    setLoggedIn(false);
  }

  return (
    <Router>
      <NavBar 
        logoutUser={logoutUser}
        loggedIn = {loggedIn}
      />
      <main>
        <Routes>
          <Route 
            path="/" 
            element={<Home loggedIn={loggedIn}  restaurants={restaurants} setRestaurants={setRestaurants} />} 
          />
          <Route 
            path="/signup" 
            element={<SignupForm 
              loginUser={loginUser}
            />} 
          />
          <Route 
            path="/login"  
            element={<Login 
              loginUser={loginUser}
            />} 
          />
          <Route 
            path="/reviews/new" 
            element={<AddReview currentUser={currentUser} restaurants={restaurants}/>} 
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

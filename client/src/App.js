import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/navigation/NavBar";
import LoginForm from './components/LoginForm'
import AddReview from "./components/pages/AddReview";
import Home from "./components/pages/Home";
import SignupForm from "./components/SignupForm";


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [restaurants, setRestaurants] = useState("");
  const [errors, setErrors] = useState([]);

  function addErrors(errors){
    setErrors(errors)
  }

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
            element={
              <Home 
                loggedIn={loggedIn}  
                restaurants={restaurants} 
                setRestaurants={setRestaurants} 
              />
            } 
          />
          <Route 
            path="/signup" 
            element={
              <SignupForm 
                errors={errors}
                loginUser={loginUser}
                addErrors={addErrors}
              />
            } 
          />
          <Route 
            path="/login"  
            element={
              <LoginForm 
                errors={errors}
                loginUser={loginUser}
                addErrors={addErrors}
              />
            } 
          />
          <Route 
            path="restaurants/:id/reviews/new" 
            element={
              <AddReview 
                currentUser={currentUser}
                restaurants={restaurants}
              />
            } 
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

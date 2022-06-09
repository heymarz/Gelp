import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/navigation/NavBar";
import LoginForm from './components/static/LoginForm'
import AddReview from "./components/pages/AddReview";
import Home from "./components/pages/Home";
import SignupForm from "./components/static/SignupForm";
import RestaurantDetails from "./components/pages/RestaurantDetails";
import ErrorPage from './components/static/ErrorPage'

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [errors, setErrors] = useState([]);
  
  function addErrors(errors){
    setErrors(errors)
  }
  function clearErrors() {
    setErrors([]);
  }
  
  function loginUser(user){
    setCurrentUser(user);
    setLoggedIn(true);
  }
  
  function logoutUser(){
    setCurrentUser({});
    setLoggedIn(false);
  }
  
    useEffect(()=>{
      fetch('/me')
      .then(res=>{
        if(res.ok){
          res.json().then(user => loginUser(user))
        }
      })
    },[])
  
  // if(!currentUser) return
  // <LoginForm 
  // errors={errors}
  // loginUser={loginUser}
  // addErrors={addErrors}
  // clearErrors={clearErrors}
  // />
  
  function onUpdateReview (reviewId, restaurantId, newRating, newComment){
    const copy = [...restaurants];
    for (const restaurant of copy){
      if(restaurant.id === restaurantId){
        const review = restaurant.reviews.find((rev)=>rev.id === reviewId
        );
        review.rating = newRating;
        review.comment = newComment;
      }
    } 
    setRestaurants(copy)
  };


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
                loginUser={loginUser}
                errors={errors}
                addErrors={addErrors}
                clearErrors={clearErrors}
              />
            } 
          />
          <Route 
            path="restaurants/:restaurant_id/reviews/new" 
            element={
              <AddReview 
                currentUser={currentUser}
              />
            } 
          />
        <Route 
            path="restaurants/:restaurant_id" 
            element={
              <RestaurantDetails
                currentUser={currentUser}
                onUpdateReview={onUpdateReview}
              />
            } 
          />
           <Route 
            path="*" 
            element={<ErrorPage />} 
          />
          <Route
          path="/login"
          element={ <LoginForm 
            errors={errors}
            loginUser={loginUser}
            addErrors={addErrors}
            clearErrors={clearErrors}
            />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

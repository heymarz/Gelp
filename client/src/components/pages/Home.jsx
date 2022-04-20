import React, {useEffect} from 'react'
import RestaurantListing from './RestaurantListing'
import './home.css'

function Home({ loggedIn, restaurants, setRestaurants }){

  useEffect(()=> {
    fetch("/restaurants")
    .then((r)=>r.json())
    .then(setRestaurants);
  },[]);

  return (
    <div className="body">
      <h1 className="header">Welcome to Gelp!</h1>
      <h3>This is a website that you can count on. Rate restaurants and their services. Share your thoughts and opinions with Restuarant reviews! Happy Gelping!</h3>
      {loggedIn? <RestaurantListing restaurants={restaurants} /> : <p className="red-font"><b>Please sign in at the link above.</b></p>}
    </div>
  )
}

export default Home
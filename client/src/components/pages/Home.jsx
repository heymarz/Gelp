import React from 'react'
import RestaurantListing from '../RestaurantListing'

function Home({loggedIn}){
  return (
    <div>
      <h1>Welcome to Gelp!</h1>
      <h3>This is a website that you can count on. Rate restaurants and their services. Share your thoughts and opinions with Restuarant reviews! Can't wait to hear your thoughts! Happy Gelping!</h3>
      {loggedIn? <RestaurantListing /> : <p>Please sign in at the link above.</p>}
    </div>
  )
}

export default Home
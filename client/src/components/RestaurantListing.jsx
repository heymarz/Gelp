import React,{ useEffect, useState } from 'react';
import './restaurantList.css'

function RestaurantListing() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(()=> {
    fetch("/restaurants")
    .then((r)=>r.json())
    .then(setRestaurants);
  },[]);
  
  return (
    <div>
      <h4>Restaurant Listing</h4>
      {restaurants.map((r)=>{
    return <div className="card" key={r.id}>
        <h3>Name:</h3>
        <p>{r.name}</p>
        <h4>Food Type:</h4>
        <p>{r.food_type}</p>
        <h4>Restaurant Description:</h4>
        <p>{r.description}</p>
      </div>
      })
    }
    </div>
  )
}

export default RestaurantListing
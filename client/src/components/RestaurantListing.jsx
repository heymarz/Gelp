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
        <h4>{r.name}</h4>
        <p><em><b>Food Type:</b>{r.food_type}</em></p>
        <p><b>Restaurant Description:</b><br />{r.description}</p>
      </div>
      })
    }
    </div>
  )
}

export default RestaurantListing
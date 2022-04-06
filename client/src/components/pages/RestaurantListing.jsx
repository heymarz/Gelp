import React from 'react';
import './restaurantList.css';
import {useNavigate} from 'react-router-dom';

function RestaurantListing({restaurants}) {
  let navigate = useNavigate()

  function handleAddReview(id){
    navigate(`/restaurants/${id}/reviews/new`) 
  }

  function showDetails(id){
    navigate(`/restaurants/${id}`)
  }
  
  return (
    <div>
      <h4>Restaurant Listing</h4>
      {/* add a new restaurant button here and should navigate to the form page */}
      {restaurants.map((r)=>{
        return (
          <div className="card" key={r.id}>
            <div onClick={()=>showDetails(r.id)}>
              <h4>{r.name}</h4>
              <p><em><b>Food Type:</b>{r.food_type}</em></p>
              <p><b>Restaurant Description:</b><br />{r.description}</p>
            </div>
              <button onClick={()=>handleAddReview(r.id)}>Add a review</button>
          </div>
          )
      })}
    </div>
  )
}

export default RestaurantListing
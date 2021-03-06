import React from 'react';
import './restaurantList.css';
import {useNavigate} from 'react-router-dom';

function RestaurantListing({restaurants}) {
  let navigate = useNavigate()

  function handleAddReview(restaurant_id){
    navigate(`/restaurants/${restaurant_id}/reviews/new`) 
  }

  function showDetails(restaurant_id){
    navigate(`/restaurants/${restaurant_id}`)
  }
  
  return (
    <div>
      <h4>Restaurant Listing</h4>
      {/* add a new restaurant button here and should navigate to the form page */}
      {restaurants && restaurants.map((r)=>{
        return (
          <div className="card" key={r.id}>
            <div onClick={()=>showDetails(r.id)}>
              <h4 className='restaurant-title'>{r.name}</h4>
              <p><em><b>Food Type:</b>{r.food_type}</em></p>
              <p><b>Restaurant Description:</b><br />{r.description}</p>
            </div>
              <button className="button" onClick={()=>handleAddReview(r.id)}>Add a review</button>
          </div>
          )
      })}
    </div>
  )
}

export default RestaurantListing
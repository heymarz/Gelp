import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './restaurantDetails.css'

function RestaurantDetails() {
  const [currentRestaurant, setCurrentRestaurant] = useState([]);
  const {name, food_type, description, reviews} = currentRestaurant
  let { id } = useParams();
  
  useEffect(()=>{
    fetch(`/restaurants/${id}`)
    .then((r)=>r.json())
    .then((data)=>setCurrentRestaurant(data))
  },[])

//   {id: 1, name: 'Smokestack Shakes', food_type: 'European', description: 'Our mission is to be a leader in the distribution …ssential components in accomplishing our mission.', reviews: Array(5)}
// description: "Our mission is to be a leader in the distribution and merchandising of food, pharmacy, health and personal care items, seasonal merchandise, and related products and services. We place considerable importance on forging strong supplier partnerships. Our suppliers, large or small, local or global, are essential components in accomplishing our mission."
// food_type: "European"
// id: 1
// name: "Smokestack Shakes"
// reviews: (5) [{…}, {…}, {…}, {…}, {…}]
console.log(currentRestaurant)
  return (
    <div>
      <div>
        <h1>{name}</h1><br />
        <h2><em>{food_type}</em></h2>
        <h3>{description}</h3>
        <ul>
          {reviews && reviews.map((review)=>{
            return(
              <div className="reviewContainer" key={review.id}>
                <div>{review.rating}</div>
                <p>{review.review_description}</p>
                
              </div>
            )
          })}
          {/* edit and delete buttons, if currentuser.id === review.user_id, show buttons */}
        </ul>
      </div>
    </div>
  )
}

export default RestaurantDetails
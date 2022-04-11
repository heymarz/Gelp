import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './restaurantDetails.css'

function RestaurantDetails({ currentUser, onDeleteReview }) {
  const [currentRestaurant, setCurrentRestaurant] = useState([]);
  // const [isEditing, setIsEditing] = useState("");
  // const [rating, setRating] = useState("")
  const {name, food_type, description, reviews} = currentRestaurant
  let { restaurant_id } = useParams();
  
  useEffect(()=>{
    fetch(`/restaurants/${restaurant_id}`)
    .then((r)=>r.json())
    .then((data)=>setCurrentRestaurant(data))
  },[])

  function handleDelete(id){
    fetch(`/reviews/${id}`,{
      method: "DELETE",
    }).then((r)=>{
        onDeleteReview(id)
    })
  }

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
                {currentUser.id === review.user_id ? <span><button>Edit</button><button onClick={()=>handleDelete(review.id)}>Delete</button></span> : null}
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default RestaurantDetails
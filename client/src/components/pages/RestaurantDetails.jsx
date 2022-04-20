import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './restaurantDetails.css'
import EditReview from './EditReview';

function RestaurantDetails({ currentUser, onUpdateReview }) {
  const [currentRestaurant, setCurrentRestaurant] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const {name, food_type, description, reviews} = currentRestaurant
  let {restaurant_id} = useParams();
  const navigate = useNavigate()
  
  useEffect(()=>{
    fetch(`/restaurants/${restaurant_id}`)
    .then((r)=>r.json())
    .then((data)=>setCurrentRestaurant(data))
  },[])

  function handleDelete(review_id){
    fetch(`/reviews/${review_id}`,{
      method: "DELETE",
    }).then(()=>{
    onUpdateReview(currentRestaurant.id, review_id)
    navigate(0)
    })
  }

  return (
    <div>
      <div>
        <h1>{name}</h1>
        <h3><em>{food_type}</em></h3>
        <p>{description}</p>
        <h2>Reviews:</h2>
        {isEditing ? (<EditReview review={isEditing} onUpdateReview={onUpdateReview}/>) : (<div>{reviews && reviews.map((review)=>{
            return(
              <div className="reviewContainer" key={review.id}>
                <div>{review.rating}
              </div>
                <p>{review.review_description}</p>
                {currentUser.id === review.user_id ? <span><button onClick={()=>setIsEditing(review)}>Edit</button><button onClick={()=>handleDelete(review.id)}>Delete</button></span> : null}
              </div>
            )
          })}</div>)}
          {/* {reviews && reviews.map((review)=>{
            return(
              <div className="reviewContainer" key={review.id}>
                <div>{review.rating}</div>
                <p>{review.review_description}</p>
                {currentUser.id === review.user_id ? <span><button onClick={()=>handleEditReview(review)}>Edit</button><button onClick={()=>handleDelete(review.id)}>Delete</button></span> : null}
              </div>
            )
          })} */}
        <ul>
        </ul>
      </div>
    </div>
  )
}

export default RestaurantDetails
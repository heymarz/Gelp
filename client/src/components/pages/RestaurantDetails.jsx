import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './restaurantList.css'
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
    navigate("/")
    })
  }

  return (
    <div>
      <div className='body'>
        <h1 className="restaurant-title">{name}</h1>
        <h3><em>{food_type}</em></h3>
        <p>{description}</p>
        <h2 className='opposing-title'>Reviews:</h2>
        {isEditing ? (<EditReview review={isEditing} setIsEditing={setIsEditing} onUpdateReview={onUpdateReview}/>) : (<div>{reviews && reviews.map((review)=>{
            return(
              <div className="reviewContainer" key={review.id}>
                <div>{review.rating}
              </div>
                <p>{review.review_description}</p>
                {currentUser.id === review.user_id ? <span><button className="button" onClick={()=>setIsEditing(review)}>Edit</button><button className="button" onClick={()=>handleDelete(review.id)}>Delete</button></span> : null}
              </div>
            )
          })}</div>)}
        <ul>
        </ul>
      </div>
    </div>
  )
}

export default RestaurantDetails
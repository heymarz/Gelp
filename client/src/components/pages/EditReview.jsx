import React, { useState } from 'react';
import  {FaStar} from "react-icons/fa";
import { headers } from '../../Global';
import { useParams, useNavigate } from 'react-router-dom';
import './AddReview.css'
import './restaurantList.css'

function EditReview({review, setIsEditing, onUpdateReview}) {
  const { rating, review_description } = review;
  const [hover, setHover] = useState(null);
  const [comment, setComment] = useState(review_description);
  const [newRating, setNewRating] = useState(rating);
  const { restaurant_id } = useParams();
  const navigate = useNavigate();

  const paramsToEdit = {
    review: {
      review_description: comment,
      rating: newRating,
  }}

  function fetchPatch(){
    fetch(`/reviews/${review.id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(paramsToEdit)
    })
    .then((r)=>r.json())
    .then((newReview)=>{
      onUpdateReview(newReview.id, restaurant_id, newReview.review_description, newReview.newRating);
    })
  }  

  function handleEditReview(e){
    e.preventDefault();
    fetchPatch()
    setIsEditing(false)
    navigate(`/`)
  }

  return (
    <form className="edit-review" onSubmit={handleEditReview}>
      <label htmlFor='edit-review-rating'>Your star ratings:</label><br/>
      {[...Array(5)].map((star, i)=>{
            const ratingValue = i + 1
            return (
            <label key={ratingValue}>
              <input 
                type="radio"
                name="rating"
                autoComplete='off'
                value={ratingValue}
                onChange={(e)=>setNewRating(e.target.value)}
              />
              <FaStar 
                className="star" 
                size={30} 
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={()=> setHover(ratingValue)}
                onMouseLeave={()=>setHover(newRating)}
              />
            </label>)
      })}
      <br />
      <label htmlFor='edit-review-description' id="editBox">Your review:</label>
      <br />
      <input
        type="text"
        name="description"
        autoComplete='off'
        value={comment}
        onChange={(e)=>setComment(e.target.value)}
        />
        <br />
        <input className="button" type="submit" value="Save" />
    </form>
  )
}

export default EditReview
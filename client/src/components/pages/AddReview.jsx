import React, {useState} from 'react';
import './AddReview.css';
import './restaurantList.css'
import { FaStar } from "react-icons/fa";
import { headers } from '../../Global';
import { useParams, useNavigate } from 'react-router-dom';

function AddReview({ currentUser }) {
  const [description, setDescription] = useState("");
  const [rating, setRating] =useState(null);
  const [hover, setHover] = useState(null);
  let { restaurant_id } = useParams();
  let navigate = useNavigate()

  function handleAddReview(e){
    e.preventDefault();
    fetch(`/restaurants/${restaurant_id}/reviews`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        user_id: currentUser.id,
        restaurant_id: restaurant_id,
        review_description: description,
        rating: rating
      })
    })
    .then((r)=> r.json())
    .then(navigate('/'))
  }

  
  return (
    <div className="review-body">
      <h1 className='add-review-header'>Add a new review...</h1>
      <form onSubmit={handleAddReview}>
        <h3><label htmlFor='description' id="textbox">Write your review in the box below:</label></h3>
        <div>
          <legend className="star-rating__title">Your rating:</legend>
          {[...Array(5)].map((star, i)=>{
            const ratingValue = i + 1
            return (
            <label key={ratingValue}>
              <input 
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={()=>setRating(ratingValue)}
              />
              <FaStar 
                className="star" 
                size={30} 
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={()=> setHover(ratingValue)}
                onMouseLeave={()=>setHover(null)}
              />
            </label>)
          })}
          <br/>
          <textarea
            type="text"
            id="description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />
          </div>
          <button className="button" type="submit">Submit</button>
          <label html="user"></label>
          <input 
            type="hidden" 
            id="currentUser"
            value={currentUser.id}
          />        
      </form>
    </div>
  )
}

export default AddReview
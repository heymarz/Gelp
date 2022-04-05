import React, {useState} from 'react';
import './AddReview.css';
import { FaStar } from "react-icons/fa";

function AddReview({currentUser, restuarants}) {
  const [description, setDescription] = useState("");
  const [rating, setRating] =useState(null);
  const [hover, setHover] = useState(null)
  
  return (
    <div className="reviewBody">
      <h1>Add a new review for ...</h1>
      <form>
        <h3><label htmlFor='description' id="textbox">Write your review in the box below:</label></h3>
        <div>
          <legend className="star-rating__title">Your rating:</legend>
          {[...Array(5)].map((star, i)=>{
            const ratingValue = i + 1
            return (
            <label>
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
          <button>Submit</button>
          <label html="user"></label>
          <input 
            type="hidden" 
            id="currentUser"
            value={currentUser.id}
          />
          {/* <input
            type="hidden"
            id={restaurant.id}
            value={restaurant.id}
          /> 
          <input
            type="hidden"
            id={user.id}
            value={user.id}
          /> */}          
      </form>
    </div>
  )
}

export default AddReview
import React, {useState} from 'react';
import './AddReview.css';

function AddReview({currentUser, restuarants}) {
  const [description, setDescription] = useState("");
  
  return (
    <div>
      <h1>Add a new review for ...</h1>
      <form>
        <label htmlFor='description' id="textbox">Write your review in the box below:</label>
        <div>
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
        /> */}
        <br />
        <fieldset className="star-rating">
          <legend className="star-rating__title">Your rating:</legend>
          <div className='star-rating__stars'>
            <input
              className="star-rating__label" 
              type="radio" 
              id="rating1" 
              name="rating" 
              value="1"
            />
            <label className="star-rating__label" htmlFor="rating1" aria-label="One"></label>
            <input
              className="star-rating__label" 
              type="radio" 
              id="rating2" 
              name="rating" 
              value="2"
            />
            <label className="star-rating__label" htmlFor="rating2" aria-label="Two"></label>
            <input
              className="star-rating__label"
              type="radio" 
              id="rating3" 
              name="rating" 
              value="3"
            />
            <label className="star-rating__label" htmlFor="rating3" aria-label="Three"></label>
            <input
              className="star-rating__label" 
              type="radio" 
              id="rating4" 
              name="rating" 
              value="4"
            />
            <label className="star-rating__label" htmlFor="rating4" aria-label="Four"></label>
            <input
              className="star-rating__label" 
              type="radio" 
              id="rating5" 
              name="rating" 
              value="5"
            />
            <label className="star-rating__label" htmlFor="rating5" aria-label='Five'></label>
          </div>
        </fieldset>
      </form>

    {/* submit at the back end: user.id, restuarnat.id,rating */}
    </div>
  )
}

export default AddReview
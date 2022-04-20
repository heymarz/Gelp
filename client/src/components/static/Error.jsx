import React from 'react';
import './error.css';

function Error({error}) {
  return (
    <li className='error-message'>
      {error}
    </li>
  )
}

export default Error
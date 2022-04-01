import React, {useState} from 'react';
import SignupForm from '../SignupForm';
import LoginForm from '../LoginForm';
import Errors from '../static/Errors'

function Login ({loginUser}){
  const [showLogin, setShowLogin] = useState(true);
  const [errors, setErrors] = useState([]);

  function addErrors(errors){
    setErrors(errors)
  }

  return (
    <div>
      {showLogin ? (
        <>
          <LoginForm loginUser={loginUser} addErrors={addErrors} />
          <br />
          <p>
            Don't have an account? &nbsp;
            <button onClick={()=>setShowLogin(false)}>Sign up</button>
          </p>
        </>
      ) : (
        <>
          <SignupForm loginUser={loginUser} addErrors={setErrors}/>
          <br />
          <p>
            Already have an account? &nbsp;
            <button onClick={()=>setShowLogin(true)}>Sign in</button>
          </p>
        </>
      )}
      <Errors errors={errors}/>
    </div>
  )
}

export default Login
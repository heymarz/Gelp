import React, {useState} from 'react';
import SignupForm from '../SignupForm';
import LoginForm from '../LoginForm';

function Login ({loginUser, addErrors, clearErrors}){
  const [showLogin, setShowLogin] = useState(true)

  return (
    <div>
      {showLogin ? (
        <>
          <LoginForm loginUser={loginUser} addErrors={addErrors} clearErrors={clearErrors} />
          <br />
          <p>
            Don't have an account? &nbsp;
            <button onClick={()=>setShowLogin(false)}>Sign up</button>
          </p>
        </>
      ) : (
        <>
          <SignupForm loginUser={loginUser} addErrors={addErrors} clearErrors={clearErrors} />
          <br />
          <p>
            Already have an account? &nbsp;
            <button onClick={()=>setShowLogin(true)}>Sign in</button>
          </p>
        </>
      )}
    </div>
  )
}

export default Login
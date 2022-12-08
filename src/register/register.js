import './Register.css';
import { useRef } from 'react';
const Login = () => {
  const userIdRef = useRef('');


  return (
    <>
      <div id="login-container">
        <h1>Sign up</h1>
        <div>
          <label>Email</label>
          <InputUserId
            userIdRef={userIdRef}
          />
        </div>
        <button>Continue</button>
      </div>
      <button>Create Account</button>
    </>

  )
}

export default Login;
import './Login.css';
import { useState } from 'react';
import InputUserId from './InputUserId';
import Button from './Button';
import InputUserPassword from './InputUserPassword';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const onChangeUserId = (id) => {
    setUserId(id);
  }
  const onChangeUserPassword = (password) => {
    setUserPassword(password);
  }
  console.log(userId);
  return (
    <>
      <div id="login-container">
        <h1>Log In</h1>
        <div id='login-userInput'>
          <label>Email:</label>
          <InputUserId
            onChangeUserId={onChangeUserId}
          />
          <label>Password:</label>

          <InputUserPassword
            onChangeUserPassword={onChangeUserPassword}
          />
        </div>
        <Button
          userId={userId}
          userPassword={userPassword}
        >Continue</Button>
        <span>need help</span>

      </div>
      <button>Create Account</button>
    </>
  )
}

export default Login;
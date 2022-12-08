import InputUserInfo from "./signUp/InputUserInfo";
import Button from "./login/Button";
import { useState } from "react";
import './SignUp.css';

const SignUp = ({pageName}) => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  
  const onChangeUserId = (id) => {
    setUserId(id);
  }
  const onChangeUserPassword = (password) => {
    setUserPassword(password);
  }
  
  return (
    <>
      <div id="a-container">
        <h1>{pageName}</h1>
        <div id='a-userInput'>
          <label>Email:</label>
          <InputUserInfo
            onChangeUserInfo={onChangeUserId}
          />
          <label>Password:</label>
          <InputUserInfo
            onChangeUserInfo={onChangeUserPassword}
          />
        </div>
        <Button
          userId={userId}
          userPassword={userPassword}
        >{pageName}</Button>
      </div>
    </>
  )
}

export default SignUp;

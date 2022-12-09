import InputUserInfo from "./InputUserInfo";
import ValidationBtn from "./ValidationBtn";
import { useState, useEffect } from "react";
import { api } from '../API/API'
import './AccountTemplate.css';

const AccountTemplate = ({ pageName, typeAPI }) => {
  const _api = api[typeAPI];
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const onChangeUserId = (id) => {
    setUserId(id);
  }
  const onChangeUserPassword = (password) => {
    setUserPassword(password);
  }
  const handleBtnClick = () => {
   _api({
      email: userId,
      password: userPassword
    }).then((res)=> localStorage.setItem('wtd_tk',res.data))
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
        <ValidationBtn
          userId={userId}
          userPassword={userPassword}
          handleBtnClick={handleBtnClick}
        >{pageName}</ValidationBtn>
      </div>
    </>
  )
}

export default AccountTemplate;

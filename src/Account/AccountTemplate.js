import InputUserInfo from "./InputUserInfo";
import ValidationBtn from "./ValidationBtn";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from '../API/API'
import './AccountTemplate.css';

const AccountTemplate = ({ pageName, typeAPI }) => {
  const _api = api[typeAPI];
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigate = useNavigate();

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
    }).then((res)=> {
      localStorage.setItem('wtd_tk',res.data.access_token)
      navigate('/todos') //res 가 성공적이면~
    }).catch((err)=> console.warn(err));
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
            type = {'password'}
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

import { vaildUserId, vaildUserPassword } from './Assignment1/validation';
import { api } from '../API/API';

const Button = ({ children, userId ,userPassword}) => {
  const onClickBtn =()=>{
    api.logIn({
      email:userId,
      password: userPassword,
    })
  }
  return (
    <button
      disabled={vaildUserId(userId) || vaildUserPassword(userPassword)} // a && b 
      onClick={onClickBtn}
    >{children}</button>
  )
}

export default Button;
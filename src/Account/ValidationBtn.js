import { validUserId, validUserPassword } from './Assignment1/validation';

const ValidationBtn = ({ children, userId ,userPassword,handleBtnClick}) => {
  const onClickBtn =()=>{
    handleBtnClick();
  }
  return (
    <button
      id="btn-validation"
      disabled={validUserId(userId) || validUserPassword(userPassword)} //
      onClick={onClickBtn}
    >{children}</button>
  )
}

export default ValidationBtn;
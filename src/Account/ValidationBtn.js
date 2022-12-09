import { vaildUserId, vaildUserPassword } from './Assignment1/validation';

const ValidationBtn = ({ children, userId ,userPassword,handleBtnClick}) => {
  const onClickBtn =()=>{
    handleBtnClick();
  }
  return (
    <button
      disabled={vaildUserId(userId) || vaildUserPassword(userPassword)} //
      onClick={onClickBtn}
    >{children}</button>
  )
}

export default ValidationBtn;
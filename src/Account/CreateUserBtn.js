const CreateUserBtn = ({onSetPage,pageName}) => {
  console.log(pageName);  
  const onClick = () => {
      onSetPage('signUp')
    }
  return (
     pageName === 'logIn' ? <button id="btn-signup" onClick={onClick}>
      <span>create user</span>
    </button>
    : ""
  )
}

export default CreateUserBtn;
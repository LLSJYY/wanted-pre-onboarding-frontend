const CreateUserBtn = ({onSetPage}) => {
    const onClick = () => {
      onSetPage('signUp')
    }
  return (
    <button onClick={onClick}>
      <span>create user</span>
    </button>
  )
}

export default CreateUserBtn;
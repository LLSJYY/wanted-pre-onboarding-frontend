
const InputUserPassword = ({ onChangeUserPassword }) => {
  const onChangeInput = (e) => {
    onChangeUserPassword(e.target.value)
  }
  return (
    <input
      onChange={onChangeInput}
    />
  )
}

export default InputUserPassword;
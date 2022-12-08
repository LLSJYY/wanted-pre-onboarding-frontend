
const InputUserId = ({ onChangeUserId }) => {
  const onChangeInput = (e) => {
    onChangeUserId(e.target.value)
  }
  return (
    <input
      onChange={onChangeInput}
    />
  )
}

export default InputUserId;
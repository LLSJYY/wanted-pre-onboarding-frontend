
const InputUserInfo = ({ onChangeUserInfo }) => {
  const onChangeInput = (e) => {
    onChangeUserInfo(e.target.value)
  }
  return (
    <input
      onChange={onChangeInput}
    />
  )
}

export default InputUserInfo;
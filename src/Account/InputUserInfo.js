
const InputUserInfo = ({ onChangeUserInfo,type }) => {
  const onChangeInput = (e) => {
    onChangeUserInfo(e.target.value)
  }
  return (
    <input
      onChange={onChangeInput}
      type={type ? type : ''}
    />
  )
}

export default InputUserInfo;
import { useRef } from "react";

const NewTodo = ({setTodoText}) => {
  const inputRef = useRef();
  

  const onKeyDownInput= (e)=>{
    if(e.key === 'Enter'){
      setTodoText(inputRef.current.value);
      inputRef.current.value = "";

    }
  }
  const onClickBtn = () => {
    setTodoText(inputRef.current.value);
    inputRef.current.value = "";
  }

  
  return (
    <div className="newTodo">
    <input
      onKeyDown={onKeyDownInput}
      ref={inputRef}
/>
    <button
      onClick={onClickBtn}
    >add</button>
    </div>
  );
}
export default NewTodo;
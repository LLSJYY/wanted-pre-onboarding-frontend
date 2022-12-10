import { useRef } from "react";

const NewTodo = ({setNewTodo,onAddTodo}) => {
  const inputRef = useRef();
  

  const onKeyDownInput= (e)=>{

    if(e.key === 'Enter'){
      setNewTodo(inputRef.current.value);
      onAddTodo(inputRef.current.value);
      inputRef.current.value = "";
    }
  }
  const onClickBtn = () => {
    setNewTodo(inputRef.current.value);
    onAddTodo(inputRef.current.value);
    inputRef.current.value = "";
  }

  
  return (
    <div className="newTodo">
    <input
      onKeyDown={onKeyDownInput}
      ref={inputRef}
      placeholder="newTodo"
/>
    <button
      onClick={onClickBtn}
    >add</button>
    </div>
  );
}
export default NewTodo;
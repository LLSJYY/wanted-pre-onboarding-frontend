import { useRef } from "react";

const TodoItem = ({ todoList, modify, onDestoryTodo, onCompletedTodo, onModifyBtn,onModifyTodo}) => {
  const inputRef = useRef();
  const onModifyInput =(e) => {
    inputRef.current.value = e.target.value;
  }
  


  function switchMode(mode, el) {  /* todo: 함수이름명 고치기.. */
    if (el.id === modify.id && mode === 'modify') {
      return <>
        <input defaultValue={el.todo} ref={inputRef} onChange={onModifyInput}/>
        <button onClick={() => {onModifyTodo({item:el,newTodo:inputRef.current.value},false)}} className="btn modify">제출</button>
        <button onClick={() => onModifyBtn(el.id, "cancel")} className="btn destroy">취소</button>
      </>
    }
    return <>
      <span id="todoText">{el.todo}</span>
      <button onClick={() => onModifyBtn(el.id, "modify")} className="btn modify">수정</button>
      <button onClick={() => onDestoryTodo(el.id)} className="btn destroy">삭제</button>
    </>

  }

  return (
    todoList.map((el) => {
      return <li key={el.id} className='todoItem'>
        <input
          id="todoCheckbox"
          type='checkbox'
          defaultChecked={el.isCompleted}
          onChange={() => { onCompletedTodo(el) }}
        />
        {switchMode(modify.mode, el)}
      </li>
    })
  )
}

export default TodoItem;